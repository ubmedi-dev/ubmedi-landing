import { contactSummary, messengerLinks, supportChannels, supportFaqs } from "@/app/site-content";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";

const supportCards = [
  { title: "대표 전화", value: contactSummary.phone, text: "빠른 응답이 필요할 때 바로 연결됩니다." },
  { title: "대표 메일", value: contactSummary.email, text: "자료 첨부와 상세 문의에 적합합니다." },
  { title: "운영 시간", value: "Mon - Fri / 09:00 - 18:00", text: "긴급 문의는 메신저로 남겨주세요." },
  { title: "오피스", value: contactSummary.address, text: "상담 및 운영 중심 거점입니다." },
];

export default function SupportPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="SUPPORT"
        title="가장 빠르게 연결되는 고객 센터"
        description="전화, 이메일, 메신저, 상담 폼 중 편한 방식으로 문의해 주세요. 의료 목적과 일정을 확인해 적합한 답변을 드립니다."
        image="/intro/intro-map.png"
      />

      <section className="section-block support-section">
        <div className="container">
          <div className="support-card-grid">
            {supportCards.map((item) => (
              <article className="support-card" key={item.title}>
                <p>{item.title}</p>
                <h3>{item.value}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>

          <div className="channel-grid messenger-grid">
            {messengerLinks.map((item) => (
              <a className="messenger-card" key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <strong>{item.label}</strong>
                <span>해외 체류 중에도 바로 문의 가능한 메신저 채널</span>
              </a>
            ))}
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

      <section className="faq-section section-block" id="faq">
        <div className="container narrow">
          <div className="section-heading is-centered">
            <p className="section-tag">FAQ</p>
            <h2>상담 전에 많이 확인하시는 내용</h2>
          </div>

          <div className="faq-list">
            {supportFaqs.map((item) => (
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
            이메일 전송 기능은 그대로 유지한 채
            <br />
            상담 접수를 받을 수 있습니다
          </>
        }
        description="아래 폼으로 접수하면 기존 `/api/contact` 경로로 동일하게 전송됩니다. 병원, 일정, 치료 목적을 남겨주시면 확인 후 회신드립니다."
        points={[
          "기존 이메일 발송 동작 유지",
          "문의 필수 필드 구조 동일 유지",
          "페이지 디자인만 피그마 기준으로 전면 개편",
        ]}
      />
    </SiteShell>
  );
}
