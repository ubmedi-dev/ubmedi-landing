import { supportChannels, usageSteps } from "@/app/site-content";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";

export default function UsagePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="PROCESS"
        title="상담부터 사후 관리까지 한 흐름으로 운영합니다"
        description="환자의 상태와 일정에 맞춰 예약, 통역, 이동, 숙소, 회복 관리까지 단계별로 정리해 드립니다."
        image="/intro/intro-consulting.png"
      />

      <section className="section-block process-detail-section">
        <div className="container">
          <div className="section-heading is-centered">
            <p className="section-tag">HOW IT WORKS</p>
            <h2>유비메디 이용 절차</h2>
          </div>

          <div className="process-stack">
            {usageSteps.map((item) => (
              <article className="process-row-card" key={item.step}>
                <div className="process-row-step">{item.step}</div>
                <div className="process-row-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block channels-section">
        <div className="container">
          <div className="section-heading is-centered">
            <p className="section-tag">CONTACT CHANNEL</p>
            <h2>가장 편한 방식으로 상담을 시작하세요</h2>
          </div>

          <div className="channel-grid">
            {supportChannels.map((item) => (
              <article className="channel-card" key={item.title}>
                <p>{item.title}</p>
                <h3>{item.value}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band-cta band-cta-dark">
        <div className="container band-cta-inner">
          <div>
            <p className="section-tag is-light">START NOW</p>
            <h2>필요한 서류가 없어도 괜찮습니다. 현재 상황부터 정리해 드립니다.</h2>
          </div>
          <div className="band-cta-actions">
            <a className="primary-cta" href="/support">
              무료 상담 신청
            </a>
            <a className="secondary-cta" href="/support#faq">
              FAQ 보기
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
