"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1400&q=82",
    thumb:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=360&q=72",
    alt: "温暖明亮的宠物店接待区",
    thumbAlt: "接待区缩略图",
    title: "明亮接待区",
    description:
      "入店先确认宠物状态和洗护需求，等待区有饮水、牵引挂点和家长休息座位。",
    dotLabel: "查看接待区",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1400&q=82",
    thumb:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=360&q=72",
    alt: "宠物洗护操作区",
    thumbAlt: "洗护间缩略图",
    title: "独立洗护间",
    description:
      "洗护台、防滑垫和温水系统独立配置，不同体型宠物分时段安排。",
    dotLabel: "查看洗护间",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1400&q=82",
    thumb:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=360&q=72",
    alt: "安静舒适的猫咪护理区",
    thumbAlt: "猫咪房缩略图",
    title: "猫咪安静房",
    description:
      "猫咪护理尽量避开犬只高峰，使用低噪设备，减少陌生环境带来的紧张。",
    dotLabel: "查看猫咪房",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1400&q=82",
    thumb:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=360&q=72",
    alt: "宠物护理后的干净状态",
    thumbAlt: "完成区缩略图",
    title: "护理完成区",
    description:
      "吹干梳顺后拍照记录，护理师会同步皮肤、耳道、脚垫和毛发观察建议。",
    dotLabel: "查看完成区",
  },
];

export function EnvironmentCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  return (
    <div>
      <div
        className="carousel"
        data-carousel
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <article className="carousel-slide" key={slide.title}>
              <img src={slide.image} alt={slide.alt} />
              <div className="slide-caption">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          className="carousel-control prev"
          type="button"
          data-carousel-prev
          aria-label="上一张店内环境照片"
          onClick={() => goToSlide(current - 1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <button
          className="carousel-control next"
          type="button"
          data-carousel-next
          aria-label="下一张店内环境照片"
          onClick={() => goToSlide(current + 1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>

        <div className="carousel-dots" aria-label="轮播图分页">
          {slides.map((slide, index) => (
            <button
              className={`carousel-dot${index === current ? " active" : ""}`}
              type="button"
              data-carousel-dot={index}
              aria-label={slide.dotLabel}
              key={slide.dotLabel}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="carousel-thumbs" aria-label="店内环境缩略图">
        {slides.map((slide, index) => (
          <button
            className={`thumb${index === current ? " active" : ""}`}
            type="button"
            data-carousel-thumb={index}
            key={slide.thumbAlt}
            onClick={() => goToSlide(index)}
          >
            <img src={slide.thumb} alt={slide.thumbAlt} />
          </button>
        ))}
      </div>
    </div>
  );
}
