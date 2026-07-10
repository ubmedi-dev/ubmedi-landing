import Image from "next/image";
import { companyTimeline, companyValues, partnerHospitals } from "@/app/site-content";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";

const stats = [
  { value: "24H", label: "1차 상담 회신 목표" },
  { value: "6+", label: "주요 상급병원 파트너" },
  { value: "1:1", label: "전담 코디네이터 운영" },
  { value: "End-to-End", label: "상담부터 귀국 후 관리까지" },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="ABOUT"
        title="유비메디는 의료와 체류를 함께 설계합니다"
        description="해외 환자가 한국에서 안정적으로 치료받을 수 있도록 병원 연결, 일정, 이동, 통역, 사후 관리까지 통합 운영합니다."
        image="/intro/intro-care.jpg"
      />

      <section className="section-block">
        <div className="container mission-grid">
          <article className="mission-card">
            <p className="section-tag">MISSION</p>
            <h2>환자에게는 더 명확한 선택지를, 병원에는 더 정돈된 운영 흐름을 만듭니다.</h2>
            <p>
              유비메디는 단순 소개를 넘어서 환자의 치료 목적, 체류 기간, 보호자 동선, 언어 환경을 함께 고려해
              현실적인 메디컬 여정을 설계합니다.
            </p>
          </article>

          <div className="stats-grid">
            {stats.map((item) => (
              <article className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block value-section">
        <div className="container">
          <div className="section-heading is-centered">
            <p className="section-tag">CORE VALUES</p>
            <h2>유비메디가 중요하게 보는 기준</h2>
          </div>

          <div className="advantage-grid">
            {companyValues.map((item) => (
              <article className="advantage-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="history-section section-block">
        <div className="container narrow">
          <div className="section-heading is-centered">
            <p className="section-tag">HISTORY</p>
            <h2>신뢰를 쌓아온 운영 이력</h2>
          </div>

          <div className="timeline-list">
            {companyTimeline.map((item) => (
              <article className="timeline-row" key={item.period}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-dot" aria-hidden />
                <div className="timeline-body">
                  {item.lines.map((line) => (
                    <p key={`${item.period}-${line}`}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="awards-section section-block">
        <div className="container">
          <div className="awards-grid">
            <article className="award-card">
              <div className="award-images is-multi">
                <div className="award-image-frame">
                  <Image src="/awards/amc-award-2019.jpg" alt="2019 우수 파트너" fill sizes="(max-width: 980px) 100vw, 20vw" />
                </div>
                <div className="award-image-frame">
                  <Image src="/awards/amc-award-2025.jpg" alt="2025 우수 파트너" fill sizes="(max-width: 980px) 100vw, 20vw" />
                </div>
                <div className="award-image-frame">
                  <Image src="/awards/amc-award-2026.jpg" alt="2026 우수 파트너" fill sizes="(max-width: 980px) 100vw, 20vw" />
                </div>
              </div>
              <div className="award-copy">
                <p>PARTNER RECOGNITION</p>
                <h3>서울아산병원 우수 파트너</h3>
                <strong>2019 · 2025 · 2026</strong>
              </div>
            </article>

            <article className="award-card">
              <div className="award-images is-single">
                <div className="award-image-frame">
                  <Image src="/awards/snuh-award-2022.png" alt="서울대학교병원 감사패" fill sizes="(max-width: 980px) 100vw, 24vw" />
                </div>
              </div>
              <div className="award-copy">
                <p>APPRECIATION</p>
                <h3>서울대학교병원</h3>
                <strong>2022 감사패</strong>
              </div>
            </article>
          </div>

          <div className="partner-grid">
            {partnerHospitals.map((item) => (
              <div className="partner-grid-card" key={item.key}>
                <Image src={item.logo} alt={item.label} width={160} height={42} className="partner-logo-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-cta band-cta-dark">
        <div className="container band-cta-inner">
          <div>
            <p className="section-tag is-light">NEXT STEP</p>
            <h2>현재 상태와 희망 일정을 알려주시면 적합한 병원부터 제안합니다.</h2>
          </div>
          <a className="primary-cta" href="/support">
            무료 상담 신청
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
