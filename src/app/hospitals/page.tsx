import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { HospitalExplorer } from "@/components/hospital-explorer";

export default function HospitalsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="PARTNER HOSPITALS"
        title="국내 주요 상급병원과 전문 클리닉 네트워크"
        description="환자의 상태, 희망 일정, 치료 목적에 맞춰 적합한 병원과 국제진료 프로세스를 연결합니다."
        image="/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png"
      />

      <HospitalExplorer />

      <section className="band-cta band-cta-dark">
        <div className="container band-cta-inner">
          <div>
            <p className="section-tag is-light">HOSPITAL MATCHING</p>
            <h2>이미 원하는 병원이 있거나, 아직 비교 단계여도 모두 상담 가능합니다.</h2>
          </div>
          <a className="primary-cta" href="/support">
            병원 상담 신청
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
