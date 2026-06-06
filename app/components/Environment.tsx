import { EnvironmentCarousel } from "./EnvironmentCarousel";

export function Environment() {
  return (
    <section
      className="environment-section"
      id="environment"
      aria-label="店内环境展示"
    >
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="section-kicker">Environment</p>
            <h2>店内环境展示</h2>
          </div>
          <p>
            明亮接待区、独立洗护间、猫咪安静房和消毒收纳区分开管理，让宠物少等待，家长也看得清楚。
          </p>
        </div>

        <div className="environment-layout">
          <EnvironmentCarousel />

          <aside className="store-info-card" aria-label="门店信息">
            <div className="store-map">
              <span className="map-pin" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
            </div>
            <h3>泡泡爪宠物洗护店</h3>
            <ul className="store-list">
              <li>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <div>
                  <strong>地址</strong>
                  <span>幸福路 88 号阳光里商街 1F-06，近东门停车场</span>
                </div>
              </li>
              <li>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 11a8 8 0 0 1 16 0"></path>
                    <path d="M4 11v5a2 2 0 0 0 2 2h2v-7H4Z"></path>
                    <path d="M20 11v5a2 2 0 0 1-2 2h-2v-7h4Z"></path>
                  </svg>
                </span>
                <div>
                  <strong>交通</strong>
                  <span>地铁 2 号线幸福路站 B 口步行约 6 分钟，门口可临停</span>
                </div>
              </li>
              <li>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </span>
                <div>
                  <strong>营业时间</strong>
                  <span>周一至周日 10:00-21:00，节假日建议提前 1 天预约</span>
                </div>
              </li>
              <li>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 17h14"></path>
                    <path d="M5 17a4 4 0 0 1 0-8h14a4 4 0 0 1 0 8"></path>
                    <path d="M8 13h.01"></path>
                    <path d="M16 13h.01"></path>
                  </svg>
                </span>
                <div>
                  <strong>接送范围</strong>
                  <span>
                    3 公里内可预约接送，需提前确认宠物箱、牵引绳和时间
                  </span>
                </div>
              </li>
              <li>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
                    <path d="m9 12 2 2 4-5"></path>
                  </svg>
                </span>
                <div>
                  <strong>门店配置</strong>
                  <span>
                    独立猫犬区、恒温热水、低噪吹水机、毛巾分宠消毒
                  </span>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
