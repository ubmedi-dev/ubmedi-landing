import Image from "next/image";
import { ContactCta } from "@/components/contact-cta";
import { SiteShell } from "@/components/site-shell";
import {
  companyTimeline,
  companyValues,
  homeFeatures,
  homeReviews,
  partnerHospitals,
  supportFaqs,
} from "@/app/site-content";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero-section">
        <Image className="hero-image" src="/히어로 섹션 이미지.png" alt="" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-kicker">PREMIUM MEDICAL TOUR</p>
          <h1>
            해외 환자를 위한
            <br />
            <span>프리미엄 메디컬 케어</span>
          </h1>
          <p className="hero-copy">
            검증된 국내 상급병원 연결부터 통역, 체류, 이동, 사후 관리까지
            <br />
            한국 의료 여정을 한 번에 설계합니다.
          </p>
          <div className="hero-cta-row">
            <a className="primary-cta" href="/support">
              무료 상담 신청하기
            </a>
            <a className="secondary-cta" href="/about">
              서비스 소개 보기
            </a>
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label="협력 병원">
        <div className="container partner-strip-inner">
          {partnerHospitals.map((item) => (
            <div className="partner-logo-chip" key={item.key}>
              <Image src={item.logo} alt={item.label} width={118} height={32} className="partner-logo-image" />
            </div>
          ))}
        </div>
      </section>

      <section className="about-section section-block">
        <div className="container about-grid">
          <article className="about-card about-card-main">
            <div className="about-media">
              <Image src="/intro/intro-consulting.png" alt="의료 상담 장면" fill sizes="(max-width: 900px) 100vw, 38vw" />
            </div>
            <div className="about-copy">
              <p className="section-tag">ABOUT UB MEDI</p>
              <h2>상담부터 귀국 후 관리까지 이어지는 의료 여정 설계</h2>
              <p>
                UB MEDI는 해외 환자가 한국 의료 서비스를 안정적으로 이용할 수 있도록 상담, 병원 제안, 예약,
                통역, 픽업, 숙소, 회복 이후 팔로업까지 하나의 흐름으로 운영합니다.
              </p>
            </div>
          </article>

          <article className="about-card about-card-side">
            <div className="about-media">
              <Image src="/intro/intro-care.jpg" alt="프리미엄 케어 공간" fill sizes="(max-width: 900px) 100vw, 22vw" />
            </div>
            <div className="about-side-copy">
              <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={110} height={24} />
              <p>환자 상태와 체류 목적에 맞춘 현실적인 진료 동선을 제안하고 끝까지 동행합니다.</p>
              <a href="/support">무료 상담 요청</a>
            </div>
          </article>

          <article className="about-card about-card-feature">
            <div className="about-feature-top">
              <p className="section-tag">CORE SERVICE</p>
              <h3>하나의 창구로 연결되는 프리미엄 메디컬 케어</h3>
            </div>
            <ul className="feature-list">
              {homeFeatures.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="history-section section-block">
        <div className="container narrow">
          <div className="section-heading is-centered">
            <p className="section-tag">OUR HISTORY</p>
            <h2>UB MEDI의 성장과 운영 경험</h2>
            <p>축적된 병원 협력 경험과 해외 환자 운영 노하우를 바탕으로 서비스 범위를 확장해 왔습니다.</p>
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

      <section className="metric-section section-block">
        <div className="container">
          <div className="section-heading is-centered">
            <p className="section-tag">WHY UB MEDI</p>
            <h2>유비메디가 만드는 차이</h2>
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

      <section className="review-section section-block">
        <div className="container">
          <div className="section-heading is-centered">
            <p className="section-tag">REVIEWS</p>
            <h2>실제 고객 후기로 확인하는 운영 경험</h2>
          </div>

          <div className="review-grid">
            {homeReviews.map((item) => (
              <article className="review-card" key={`${item.name}-${item.country}`}>
                <div className="review-head">
                  <Image src={item.image} alt={item.name} width={52} height={52} className="review-avatar" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.country}</p>
                  </div>
                </div>
                <div className="review-stars" aria-label="5 stars">
                  ★★★★★
                </div>
                <p className="review-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section-block">
        <div className="container narrow">
          <div className="section-heading is-centered">
            <p className="section-tag">FAQ</p>
            <h2>자주 묻는 질문</h2>
          </div>

          <div className="faq-list">
            {supportFaqs.slice(0, 5).map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title={
          <>
            한국에서의 프리미엄 의료 여정,
            <br />
            지금 시작하세요
          </>
        }
        description="치료 목적과 희망 일정, 사용 중인 메신저를 남겨주시면 전담 코디네이터가 확인 후 빠르게 연락드립니다."
        points={[
          "전담 코디네이터가 24시간 이내 1차 안내",
          "병원, 일정, 체류 플랜을 한 번에 제안",
          "입국 준비부터 귀국 후 관리까지 연속 지원",
        ]}
      />
    </SiteShell>
  );
}
