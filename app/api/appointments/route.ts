import { NextResponse } from "next/server";
import { getPostgresPool } from "../../lib/postgres";

export const runtime = "nodejs";

const petTypes = new Set(["小型犬", "中大型犬", "猫咪", "其他宠物"]);
const services = new Set([
  "基础香氛洗护",
  "全身精修造型",
  "皮毛舒缓护理",
  "单项护理",
]);
const timeSlots = new Set([
  "10:00-12:00",
  "12:00-15:00",
  "15:00-18:00",
  "18:00-21:00",
]);

type AppointmentPayload = {
  customerName?: unknown;
  phone?: unknown;
  petName?: unknown;
  petType?: unknown;
  service?: unknown;
  appointmentDate?: unknown;
  timeSlot?: unknown;
  note?: unknown;
};

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isDateText(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}

export async function POST(request: Request) {
  let payload: AppointmentPayload;

  try {
    payload = (await request.json()) as AppointmentPayload;
  } catch {
    return NextResponse.json({ message: "请求数据格式不正确。" }, { status: 400 });
  }

  const customerName = readText(payload.customerName);
  const phone = readText(payload.phone);
  const petName = readText(payload.petName);
  const petType = readText(payload.petType);
  const service = readText(payload.service);
  const appointmentDate = readText(payload.appointmentDate);
  const timeSlot = readText(payload.timeSlot);
  const note = readText(payload.note);

  if (
    !customerName ||
    !phone ||
    !petName ||
    !petType ||
    !service ||
    !appointmentDate ||
    !timeSlot
  ) {
    return NextResponse.json({ message: "请把必填信息填写完整。" }, { status: 400 });
  }

  if (phone.length < 6 || phone.length > 30) {
    return NextResponse.json({ message: "请输入有效的手机号码。" }, { status: 400 });
  }

  if (!petTypes.has(petType) || !services.has(service) || !timeSlots.has(timeSlot)) {
    return NextResponse.json({ message: "预约选项不正确，请刷新页面后重试。" }, { status: 400 });
  }

  if (!isDateText(appointmentDate)) {
    return NextResponse.json({ message: "请选择有效的到店日期。" }, { status: 400 });
  }

  try {
    const pool = getPostgresPool();
    const result = await pool.query<{ id: string }>(
      `insert into public.appointments (
        customer_name,
        phone,
        pet_name,
        pet_type,
        service,
        appointment_date,
        time_slot,
        note
      ) values ($1, $2, $3, $4, $5, $6, $7, nullif($8, ''))
      returning id`,
      [
        customerName,
        phone,
        petName,
        petType,
        service,
        appointmentDate,
        timeSlot,
        note,
      ],
    );

    return NextResponse.json({
      id: result.rows[0]?.id,
      message: "预约信息已提交，我们会尽快与您确认。",
    });
  } catch (error) {
    console.error("Create appointment failed:", error);
    return NextResponse.json(
      { message: "预约提交失败，请稍后再试或电话联系我们。" },
      { status: 500 },
    );
  }
}
