type StaticHtmlProps = {
  html: string;
};

function StaticHtml({ html }: StaticHtmlProps) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export function Header() {
  return <StaticHtml html={HEADER_HTML} />;
}

export function Hero() {
  return <StaticHtml html={HERO_HTML} />;
}

export function HeroStrip() {
  return <StaticHtml html={HERO_STRIP_HTML} />;
}

export function Services() {
  return <StaticHtml html={SERVICES_HTML} />;
}

export function Process() {
  return <StaticHtml html={PROCESS_HTML} />;
}

export function Pricing() {
  return <StaticHtml html={PRICING_HTML} />;
}

export function Gallery() {
  return <StaticHtml html={GALLERY_HTML} />;
}

export function Reviews() {
  const reviews = [
    {
      initial: "刘",
      name: "刘女士 · 柯基家长",
      text: "家里柯基很怕吹风，这次店员分段吹干，中间还让它休息，回家完全没有闹脾气。",
    },
    {
      initial: "陈",
      name: "陈先生 · 比熊家长",
      text: "比熊修得很圆润，眼周也清爽了。洗前会确认造型照片，沟通很细。",
    },
    {
      initial: "周",
      name: "周小姐 · 英短家长",
      text: "猫咪第一次出门洗澡，独立房间很安静，洗后还发了皮肤和耳朵检查照片。",
    },
    {
      initial: "王",
      name: "王女士 · 金毛家长",
      text: "金毛毛量大，以前洗完总是半干。这次吹得很透，梳毛也耐心，身上香味很自然。",
    },
    {
      initial: "赵",
      name: "赵先生 · 雪纳瑞家长",
      text: "修剪前会先问生活习惯，不是只追求好看。胡子和脚边处理得干净，走路也舒服。",
    },
    {
      initial: "林",
      name: "林小姐 · 布偶家长",
      text: "布偶比较敏感，护理师全程动作很轻。洗后还提醒耳朵护理和换毛期梳理频率。",
    },
  ];
  const carouselReviews = [...reviews, ...reviews];

  return (
    <section className="reviews" id="reviews">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="section-kicker">Reviews</p>
            <h2>家长们的真实反馈</h2>
          </div>
          <p>我们更在意宠物的状态：少害怕、少拉扯、少等待，洗完还能轻松地摇尾巴。</p>
        </div>

        <div className="review-carousel" aria-label="客户评价轮播">
          <div className="review-track">
            {carouselReviews.map((review, index) => (
              <article
                className="review-card"
                key={`${review.initial}-${index}`}
                aria-hidden={index >= reviews.length}
              >
                <div className="stars" aria-label="五星评价">
                  ★★★★★
                </div>
                <p>{review.text}</p>
                <div className="reviewer">
                  <span className="avatar">{review.initial}</span>
                  {review.name}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return <StaticHtml html={FOOTER_HTML} />;
}

const HEADER_HTML = "<header class=\"site-header\">\n    <nav class=\"nav\" aria-label=\"主导航\">\n      <a class=\"brand\" href=\"#top\" aria-label=\"泡泡爪宠物洗护店首页\">\n        <span class=\"brand-mark\" aria-hidden=\"true\">\n          <svg viewBox=\"0 0 24 24\">\n            <circle cx=\"6.5\" cy=\"9\" r=\"2.2\"></circle>\n            <circle cx=\"12\" cy=\"6.8\" r=\"2.2\"></circle>\n            <circle cx=\"17.5\" cy=\"9\" r=\"2.2\"></circle>\n            <path d=\"M7.4 17.4c.5-3 2.2-5.2 4.6-5.2s4.1 2.2 4.6 5.2c.3 1.8-.9 3.1-2.5 2.4-1.2-.5-3-.5-4.2 0-1.6.7-2.8-.6-2.5-2.4Z\"></path>\n          </svg>\n        </span>\n        泡泡爪宠物洗护店\n      </a>\n      <div class=\"nav-links\">\n        <a href=\"#services\">服务</a>\n        <a href=\"#process\">流程</a>\n        <a href=\"#pricing\">价格</a>\n        <a href=\"#reviews\">口碑</a>\n      </div>\n      <a class=\"button\" href=\"#booking\">\n        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n          <path d=\"M8 2v4\"></path>\n          <path d=\"M16 2v4\"></path>\n          <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"></rect>\n          <path d=\"M3 10h18\"></path>\n        </svg>\n        预约洗护\n      </a>\n    </nav>\n  </header>";
const HERO_HTML = "<section class=\"hero\" aria-label=\"泡泡爪宠物洗护店\">\n      <div class=\"hero-inner\">\n        <p class=\"eyebrow\">猫犬洗护 · 美容修剪 · 皮毛护理</p>\n        <h1>让毛孩子干净、放松、香喷喷回家</h1>\n        <p class=\"hero-copy\">独立洗护间、低噪吹干、按体型和毛量定制护理。每一次洗澡都记录皮肤、耳道、指甲和毛发状态，让家长更放心。</p>\n        <div class=\"hero-actions\">\n          <a class=\"button\" href=\"#booking\">\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n              <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path>\n              <path d=\"M7 10l5 5 5-5\"></path>\n              <path d=\"M12 15V3\"></path>\n            </svg>\n            立即预约\n          </a>\n          <a class=\"button secondary\" href=\"#pricing\">\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n              <path d=\"M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z\"></path>\n              <circle cx=\"7.5\" cy=\"7.5\" r=\".5\"></circle>\n            </svg>\n            查看价目\n          </a>\n        </div>\n      </div>\n    </section>";
const HERO_STRIP_HTML = "<div class=\"hero-strip\" aria-label=\"门店亮点\">\n      <div class=\"strip-item\">\n        <strong>45分钟起</strong>\n        <span>基础洗护高效完成</span>\n      </div>\n      <div class=\"strip-item\">\n        <strong>1宠1巾</strong>\n        <span>用品分区消毒管理</span>\n      </div>\n      <div class=\"strip-item\">\n        <strong>低噪音</strong>\n        <span>敏感宠物友好吹干</span>\n      </div>\n      <div class=\"strip-item\">\n        <strong>可接送</strong>\n        <span>3公里内预约服务</span>\n      </div>\n    </div>";
const SERVICES_HTML = "<section id=\"services\">\n      <div class=\"section-inner\">\n        <div class=\"section-head\">\n          <div>\n            <p class=\"section-kicker\">Services</p>\n            <h2>按宠物状态选择护理</h2>\n          </div>\n          <p>从日常清洁到造型修剪，护理师会先检查毛发打结、皮肤泛红、耳道异味等情况，再给出合适方案。</p>\n        </div>\n\n        <div class=\"services-grid\">\n          <article class=\"service-card\">\n            <div class=\"service-image\">\n              <img src=\"https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80\" alt=\"小狗洗护护理\">\n            </div>\n            <div class=\"service-content\">\n              <span class=\"icon\" aria-hidden=\"true\">\n                <svg viewBox=\"0 0 24 24\">\n                  <path d=\"M7 21h10\"></path>\n                  <path d=\"M12 21V9\"></path>\n                  <path d=\"M8 9a4 4 0 0 1 8 0\"></path>\n                  <path d=\"M6 13h12\"></path>\n                  <path d=\"M9 17h6\"></path>\n                </svg>\n              </span>\n              <h3>基础香氛洗护</h3>\n              <p>温和清洁、肛门腺、耳道清理、指甲修剪、脚底毛和腹底毛修整。</p>\n            </div>\n          </article>\n\n          <article class=\"service-card\">\n            <div class=\"service-image\">\n              <img src=\"https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=900&q=80\" alt=\"宠物美容造型修剪\">\n            </div>\n            <div class=\"service-content\">\n              <span class=\"icon\" aria-hidden=\"true\">\n                <svg viewBox=\"0 0 24 24\">\n                  <path d=\"m14.5 4.5 5 5\"></path>\n                  <path d=\"M4 20 20 4\"></path>\n                  <path d=\"M7 8 3.5 4.5a2.1 2.1 0 0 1 3-3L10 5\"></path>\n                  <path d=\"M17 16l3.5 3.5a2.1 2.1 0 0 1-3 3L14 19\"></path>\n                </svg>\n              </span>\n              <h3>精修造型美容</h3>\n              <p>泰迪圆头、比熊云朵头、猫咪局部修毛等，保留可爱轮廓也兼顾舒适度。</p>\n            </div>\n          </article>\n\n          <article class=\"service-card\">\n            <div class=\"service-image\">\n              <img src=\"https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=900&q=80\" alt=\"宠物皮毛护理\">\n            </div>\n            <div class=\"service-content\">\n              <span class=\"icon\" aria-hidden=\"true\">\n                <svg viewBox=\"0 0 24 24\">\n                  <path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z\"></path>\n                  <path d=\"m9 12 2 2 4-5\"></path>\n                </svg>\n              </span>\n              <h3>皮毛舒缓护理</h3>\n              <p>针对换毛期、干燥毛躁、轻微打结，提供护毛浴、开结和保湿护理。</p>\n            </div>\n          </article>\n        </div>\n      </div>\n    </section>";
const PROCESS_HTML = "<section class=\"process\" id=\"process\">\n      <div class=\"section-inner process-layout\">\n        <div class=\"process-photo\" role=\"img\" aria-label=\"宠物洗护操作台\"></div>\n        <div>\n          <p class=\"section-kicker\">Process</p>\n          <h2>透明流程，洗前洗后都看得见</h2>\n          <div class=\"steps\" aria-label=\"洗护流程\">\n            <article class=\"step\">\n              <div class=\"step-number\">01</div>\n              <div>\n                <h3>洗前检查</h3>\n                <p>记录体重、毛结、皮肤、耳道和指甲状态，确认是否需要特殊护理。</p>\n              </div>\n            </article>\n            <article class=\"step\">\n              <div class=\"step-number\">02</div>\n              <div>\n                <h3>温水清洁</h3>\n                <p>根据犬猫皮毛选择洗护产品，避开眼鼻耳，减少紧张和刺激。</p>\n              </div>\n            </article>\n            <article class=\"step\">\n              <div class=\"step-number\">03</div>\n              <div>\n                <h3>低噪吹干</h3>\n                <p>分段吹干并梳开浮毛，敏感宠物可安排休息间隔，降低应激。</p>\n              </div>\n            </article>\n            <article class=\"step\">\n              <div class=\"step-number\">04</div>\n              <div>\n                <h3>护理回访</h3>\n                <p>洗后发送照片和护理建议，提醒下次洗护周期、驱虫和皮肤观察点。</p>\n              </div>\n            </article>\n          </div>\n        </div>\n      </div>\n    </section>";
const PRICING_HTML = "<section id=\"pricing\">\n      <div class=\"section-inner\">\n        <div class=\"section-head\">\n          <div>\n            <p class=\"section-kicker\">Pricing</p>\n            <h2>清晰价目，进店前心里有数</h2>\n          </div>\n          <p>实际价格会根据体型、毛量、打结程度和配合度微调，进店检查后再确认。</p>\n        </div>\n\n        <div class=\"price-grid\">\n          <article class=\"price-card\">\n            <span class=\"tag\">日常推荐</span>\n            <h3>小型犬基础洗护</h3>\n            <div class=\"price\">¥68 <small>起</small></div>\n            <ul class=\"price-list\">\n              <li>适合 8kg 以下犬只</li>\n              <li>含基础清洁四件套</li>\n              <li>免费赠送香氛喷雾</li>\n            </ul>\n            <a class=\"button secondary\" href=\"#booking\">预约此项</a>\n          </article>\n\n          <article class=\"price-card featured\">\n            <span class=\"tag\">人气套餐</span>\n            <h3>全身精修造型</h3>\n            <div class=\"price\">¥168 <small>起</small></div>\n            <ul class=\"price-list\">\n              <li>含洗护、吹干、造型</li>\n              <li>护理师沟通造型细节</li>\n              <li>适合泰迪、比熊、雪纳瑞</li>\n            </ul>\n            <a class=\"button\" href=\"#booking\">预约此项</a>\n          </article>\n\n          <article class=\"price-card\">\n            <span class=\"tag\">猫咪友好</span>\n            <h3>猫咪舒缓洗护</h3>\n            <div class=\"price\">¥128 <small>起</small></div>\n            <ul class=\"price-list\">\n              <li>独立安静洗护时段</li>\n              <li>含基础梳毛和指甲修剪</li>\n              <li>长毛猫可加选开结护理</li>\n            </ul>\n            <a class=\"button secondary\" href=\"#booking\">预约此项</a>\n          </article>\n        </div>\n      </div>\n    </section>";
const GALLERY_HTML = "<section class=\"gallery\" aria-label=\"洗护环境\">\n      <div class=\"section-inner\">\n        <div class=\"gallery-grid\">\n          <div class=\"gallery-item large\">\n            <img src=\"https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=82\" alt=\"宠物店里的狗狗\">\n          </div>\n          <div class=\"gallery-item\">\n            <img src=\"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=700&q=82\" alt=\"猫咪护理\">\n          </div>\n          <div class=\"gallery-item\">\n            <img src=\"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=700&q=82\" alt=\"干净的宠物狗\">\n          </div>\n          <div class=\"gallery-item wide\">\n            <img src=\"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=82\" alt=\"开心奔跑的狗狗\">\n          </div>\n        </div>\n      </div>\n    </section>";
const REVIEWS_HTML = "<section class=\"reviews\" id=\"reviews\">\n      <div class=\"section-inner\">\n        <div class=\"section-head\">\n          <div>\n            <p class=\"section-kicker\">Reviews</p>\n            <h2>家长们的真实反馈</h2>\n          </div>\n          <p>我们更在意宠物的状态：少害怕、少拉扯、少等待，洗完还能轻松地摇尾巴。</p>\n        </div>\n\n        <div class=\"review-grid\">\n          <article class=\"review-card\">\n            <div class=\"stars\" aria-label=\"五星评价\">★★★★★</div>\n            <p>家里柯基很怕吹风，这次店员分段吹干，中间还让它休息，回家完全没有闹脾气。</p>\n            <div class=\"reviewer\"><span class=\"avatar\">刘</span> 刘女士 · 柯基家长</div>\n          </article>\n          <article class=\"review-card\">\n            <div class=\"stars\" aria-label=\"五星评价\">★★★★★</div>\n            <p>比熊修得很圆润，眼周也清爽了。洗前会确认造型照片，沟通很细。</p>\n            <div class=\"reviewer\"><span class=\"avatar\">陈</span> 陈先生 · 比熊家长</div>\n          </article>\n          <article class=\"review-card\">\n            <div class=\"stars\" aria-label=\"五星评价\">★★★★★</div>\n            <p>猫咪第一次出门洗澡，独立房间很安静，洗后还发了皮肤和耳朵检查照片。</p>\n            <div class=\"reviewer\"><span class=\"avatar\">周</span> 周小姐 · 英短家长</div>\n          </article>\n        </div>\n      </div>\n    </section>";
const FOOTER_HTML = "<footer>\n    <div class=\"footer-inner\">\n      <span>© 2026 泡泡爪宠物洗护店</span>\n      <span>洗护 · 美容 · 护理 · 接送</span>\n    </div>\n  </footer>";
