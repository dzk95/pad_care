"use client";

export function Booking() {
  const handleBooking = () => {
    window.alert("预约信息已记录，我们会尽快与您确认。");
  };

  return (
    <section className="booking" id="booking">
      <div className="section-inner booking-layout">
        <aside className="visit-card">
          <p className="section-kicker">Visit Us</p>
          <h2>今天就给毛孩子约一个清爽时段</h2>
          <p>
            提交预约后，我们会在营业时间内联系确认宠物体型、服务项目和到店时间。
          </p>
          <div className="visit-list">
            <div className="visit-row">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <div>
                <strong>门店地址</strong>
                <p>幸福路 88 号阳光里商街 1F-06</p>
              </div>
            </div>
            <div className="visit-row">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.32 1.8.59 2.65a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.25-1.25a2 2 0 0 1 2.11-.45c.85.27 1.74.47 2.65.59A2 2 0 0 1 22 16.92Z"></path>
                </svg>
              </span>
              <div>
                <strong>预约电话</strong>
                <p>138-0000-5678</p>
              </div>
            </div>
            <div className="visit-row">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </span>
              <div>
                <strong>营业时间</strong>
                <p>周一至周日 10:00-21:00</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="form-panel">
          <form>
            <label>
              家长姓名
              <input type="text" name="name" placeholder="请输入姓名" />
            </label>
            <label>
              手机号码
              <input type="tel" name="phone" placeholder="请输入联系电话" />
            </label>
            <label>
              狗狗名字
              <input
                type="text"
                name="dogName"
                placeholder="请输入狗狗名字"
              />
            </label>
            <label>
              宠物类型
              <select name="pet">
                <option>小型犬</option>
                <option>中大型犬</option>
                <option>猫咪</option>
                <option>其他宠物</option>
              </select>
            </label>
            <label>
              预约项目
              <select name="service">
                <option>基础香氛洗护</option>
                <option>全身精修造型</option>
                <option>皮毛舒缓护理</option>
                <option>单项护理</option>
              </select>
            </label>
            <label>
              到店日期
              <input type="date" name="date" />
            </label>
            <label>
              期望时段
              <select name="time">
                <option>10:00-12:00</option>
                <option>12:00-15:00</option>
                <option>15:00-18:00</option>
                <option>18:00-21:00</option>
              </select>
            </label>
            <label className="full">
              备注
              <textarea
                name="note"
                placeholder="例如：怕吹风、皮肤敏感、毛发打结、需要接送等"
              />
            </label>
            <button
              className="button full"
              type="button"
              onClick={handleBooking}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 2 11 13"></path>
                <path d="m22 2-7 20-4-9-9-4 20-7Z"></path>
              </svg>
              提交预约
            </button>
          </form>
          <p className="form-note">页面为静态演示，表单不会真实提交到服务器。</p>
        </div>
      </div>
    </section>
  );
}
