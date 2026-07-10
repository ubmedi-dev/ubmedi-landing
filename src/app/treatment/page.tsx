import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { TreatmentExplorer } from "@/components/treatment-explorer";

export default function TreatmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="TREATMENT"
        title="치료 목적에 맞는 병원과 진료과를 제안합니다"
        description="중증 치료부터 검진, 안과, 피부과, 척추·관절, 치과까지 치료 분야별로 적합한 의료 네트워크를 연결합니다."
        image="/specialty-surgery.jpg"
      />

      <TreatmentExplorer />

      <section className="band-cta band-cta-light">
        <div className="container band-cta-inner">
          <div>
            <p className="section-tag">CUSTOM MATCHING</p>
            <h2>증상과 목표를 알려주시면 우선 검토할 진료과부터 정리해 드립니다.</h2>
          </div>
          <a className="primary-cta" href="/support">
            상담 요청하기
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
