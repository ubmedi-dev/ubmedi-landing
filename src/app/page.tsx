"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

type ContactFormState = {
  name: string;
  nation: string;
  email: string;
  messenger: string;
  interest: string;
  visitYear: string;
  visitMonth: string;
  visitDay: string;
  inquiry: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

type TimelineItem = {
  period: string;
  lines: string[];
};

type AwardItem = {
  year: string;
  title: string;
  subtitle: string;
  images: { src: string; alt: string }[];
};

type SpecialtyItem = {
  key: string;
  label: string;
  image: string;
  title: string;
  summary: string;
  points: string[];
};

const messengerLinks = [
  { label: "Viber", icon: "/messenger/viber.svg", href: "viber://chat?number=+821033907060" },
  { label: "Messenger", icon: "/messenger/messenger.svg", href: "https://m.me/1166142713249729" },
  { label: "WhatsApp", icon: "/messenger/whatsapp.svg", href: "https://wa.me/821033907060" },
  { label: "WeChat", icon: "/messenger/wechat.svg", href: "weixin://dl/search?wxid_6kt3xkqmvcxe22" },
] as const;

const partnerLogos = [
  { label: "서울아산병원", logo: "/파트너사로고/서울아산병원.svg" },
  { label: "서울대학교병원", logo: "/파트너사로고/서울대학교병원.svg" },
  { label: "삼성서울병원", logo: "/파트너사로고/삼성서울병원.svg" },
  { label: "세브란스병원", logo: "/파트너사로고/세브란스병원.svg" },
  { label: "서울성모병원", logo: "/파트너사로고/성모병원.svg" },
  { label: "고려대학교의료원", logo: "/파트너사로고/고려대학교의료원.svg" },
] as const;

const introFeatures = [
  "의료 상담부터 병원 매칭까지 단일 창구로 정리",
  "전문 코디네이터와 통역이 입국 전부터 동행",
  "회복 동선까지 고려한 숙소와 차량 운영",
  "협력 병원, 일정, 사후 관리 데이터를 통합 관리",
] as const;

const timeline: TimelineItem[] = [
  { period: "2017", lines: ["외국인 환자 유치 전문기업 UB MEDI 설립", "한국 의료 접근성의 장벽을 낮추는 서비스 시작"] },
  { period: "2019", lines: ["국민건강보험 일산병원 외국인 환자 유치 협약 체결", "서울아산병원 우수 파트너사 선정", "서울대학교병원 우수 유치업체 대상 수상"] },
  { period: "2022", lines: ["프리미엄 숙박 및 의전 운영 체계 고도화", "환자 여정 중심의 회복 프로그램 확장"] },
  { period: "2024", lines: ["의료 · 숙박 · 이동을 연동한 통합 서비스 운영", "공항-병원-호텔 연결 동선의 표준화"] },
  { period: "2025", lines: ["국내 6대 종합병원 공식 협력 파트너 등록", "강남 주요 전문 클리닉과 협력 네트워크 확대"] },
  { period: "2026", lines: ["서울아산병원 우수 파트너사 누적 3회 선정", "통합 ERP 시스템 기반 운영 효율화", "중국 · 몽골 고객 대상 채널 운영 확대"] },
];

const awards: AwardItem[] = [
  {
    year: "2019",
    title: "서울대학교병원",
    subtitle: "우수 유치업체 대상 수상",
    images: [{ src: "/awards/snuh-award-2022.png", alt: "서울대학교병원 수상 인증서" }],
  },
  {
    year: "2019 · 2025 · 2026",
    title: "서울아산병원",
    subtitle: "우수 파트너사 3회 선정",
    images: [
      { src: "/awards/amc-award-2019.jpg", alt: "서울아산병원 2019 인증서" },
      { src: "/awards/amc-award-2025.jpg", alt: "서울아산병원 2025 인증서" },
      { src: "/awards/amc-award-2026.jpg", alt: "서울아산병원 2026 인증서" },
    ],
  },
];

const erpFeatures = [
  { title: "상담 파이프라인", text: "문의, 병원 매칭, 예약 상태를 한 화면에서 추적합니다." },
  { title: "의료 일정 관리", text: "검사, 진료, 수술, 회복 스케줄을 고객 단위로 정리합니다." },
  { title: "코디네이터 협업", text: "통역, 차량, 숙소, 후속 안내까지 팀 단위로 공유합니다." },
] as const;

const metrics = [
  { title: "전담 팀 운영", value: "2일", description: "평균 1차 상담 응답 및 병원 매칭 제안" },
  { title: "환자 만족도", value: "85%", description: "재문의 및 추천으로 이어진 고객 비율" },
  { title: "협력 네트워크", value: "350+", description: "병원, 클리닉, 호텔, 이동 파트너 연계 경험" },
] as const;

const specialties: SpecialtyItem[] = [
  {
    key: "serious",
    label: "중증 치료",
    image: "/specialty-surgery.jpg",
    title: "암 · 심장 · 뇌신경 등 고난도 진료 연결",
    summary: "중증 질환 치료와 수술이 필요한 고객에게 대학병원 중심의 진료 경로를 설계합니다.",
    points: ["다학제 협진 기반 병원 매칭", "입원·수술 일정 조율", "보호자 동선과 회복 계획 동시 설계"],
  },
  {
    key: "checkup",
    label: "건강 검진",
    image: "/건강검진.jpg",
    title: "기본 검진부터 프리미엄 종합검진까지",
    summary: "방문 목적과 체류 기간에 맞춰 검진 패키지와 후속 진료 계획을 함께 제안합니다.",
    points: ["일반·종합·여성·암 검진", "결과 번역 및 설명 지원", "이상 소견 시 전문과 연계"],
  },
  {
    key: "beauty",
    label: "성형외과",
    image: "/피부과.jpg",
    title: "눈, 코, 리프팅, 피부 시술 맞춤 제안",
    summary: "강남 주요 전문 클리닉과 연계해 상담, 시술, 회복 숙소까지 하나의 흐름으로 연결합니다.",
    points: ["의사별 포트폴리오 비교", "회복 일정 중심 체류 설계", "사후 경과 체크 지원"],
  },
  {
    key: "eye",
    label: "안과",
    image: "/specialty-ophthalmology.jpg",
    title: "라식 · 라섹부터 백내장 · 망막 질환까지",
    summary: "정밀 검사를 기반으로 시술 가능 여부와 회복 시간을 고려한 방문 일정을 구성합니다.",
    points: ["수술 적합성 사전 확인", "검사-수술-회복 연계", "귀국 후 주의사항 가이드 제공"],
  },
  {
    key: "ortho",
    label: "정형외과",
    image: "/정형외과.jpg",
    title: "척추 · 관절 · 재활 중심의 회복 동선 설계",
    summary: "통증 치료와 재활, 수술 여부 판단까지 환자의 이동 부담을 줄이는 방식으로 조율합니다.",
    points: ["통증·수술·재활 병행 검토", "이동 최소화 스케줄 설계", "장기 회복 고객 숙소 제안"],
  },
  {
    key: "care",
    label: "프리미엄 케어",
    image: "/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png",
    title: "의료 외 체류 경험까지 설계하는 원스톱 운영",
    summary: "공항 픽업, 호텔, 통역, 사후 관리까지 의료 여행 전체를 끊김 없이 연결합니다.",
    points: ["입국 전 일정 브리핑", "의전 차량 및 호텔 연결", "귀국 후 경과 확인 채널 운영"],
  },
];

const comparisonRows = [
  { ub: "공항 픽업부터 병원 이동까지 전담 운영", normal: "고객이 개별 이동 수단을 직접 준비" },
  { ub: "의료 통역과 상담 요약까지 한 팀이 관리", normal: "통역과 병원 소통이 분리되어 비효율 발생" },
  { ub: "숙소, 검진, 수술, 회복까지 한 일정표로 정리", normal: "각 예약을 따로 맞추며 일정 충돌 가능" },
  { ub: "귀국 후 경과 확인과 후속 안내 지속", normal: "진료 종료 후 사후 연결이 약함" },
] as const;

const processSteps = [
  { step: "01", icon: "/step/STEP1.svg", title: "온라인 상담 접수", text: "증상, 목적, 희망 일정, 언어 지원 필요 여부를 먼저 확인합니다." },
  { step: "02", icon: "/step/STEP2.svg", title: "병원 · 일정 제안", text: "협력 병원과 진료과를 매칭하고 예약 가능 일정을 정리합니다." },
  { step: "03", icon: "/step/STEP3.svg", title: "입국 · 의전 지원", text: "공항 픽업, 숙소 안내, 병원 이동과 동행 통역을 운영합니다." },
  { step: "04", icon: "/step/STEP4.svg", title: "진료 · 회복 케어", text: "검사, 시술, 수술, 회복 중 필요한 이동과 안내를 실시간 지원합니다." },
  { step: "05", icon: "/step/STEP5.svg", title: "귀국 후 사후 관리", text: "주의사항 전달, 경과 체크, 재방문 또는 원격 상담 연결을 이어갑니다." },
] as const;

const advantages = [
  { number: "01", title: "의료 접근성", text: "언어와 정보의 장벽 없이 국내 상급 병원 진료에 접근할 수 있도록 설계합니다." },
  { number: "02", title: "일정 통합", text: "병원 예약, 숙소, 차량, 통역을 하나의 타임라인으로 묶어 체류 부담을 줄입니다." },
  { number: "03", title: "신뢰 기반 제안", text: "수상 이력과 제휴 경험을 바탕으로 검증된 병원과 클리닉만 연결합니다." },
  { number: "04", title: "사후 연결", text: "귀국 이후에도 결과 설명, 후속 예약, 관리 가이드를 이어서 제공합니다." },
] as const;

const reviews = [
  { image: "/고객 후기 프로필/beautiful-cheerful-woman-sitting-by-white-wall.jpg", name: "Zhang Wei", country: "중국", text: "병원 선택부터 통역, 이동까지 한 팀이 정리해줘서 치료 결정이 빨라졌습니다." },
  { image: "/고객 후기 프로필/medium-shot-smiley-man-posing-outdoors.jpg", name: "Sato Sakura", country: "일본", text: "검진과 숙소, 공항 픽업이 자연스럽게 이어져 의료 여행이 훨씬 편안했습니다." },
  { image: "/고객 후기 프로필/medium-shot-asian-girl-city.jpg", name: "Mohammed Al-Farsi", country: "UAE", text: "수술 전후 일정이 체계적으로 관리돼 가족도 안심하고 동행할 수 있었습니다." },
  { image: "/고객 후기 프로필/smiling-elderly-woman-city.jpg", name: "Elena Petrov", country: "러시아", text: "검사 결과 설명과 후속 상담까지 세심해서 낯선 의료 시스템이 어렵지 않았습니다." },
];

const faqs = [
  {
    question: "UB MEDI는 어떤 서비스를 제공하나요?",
    answer:
      "외국인 환자를 위한 한국 의료 토탈 케어 서비스를 제공합니다. 입국 전 상담, 병원 예약, 공항 픽업, 전문 통역, 숙소 연결, 귀국 후 사후 관리까지 한 흐름으로 운영합니다.",
  },
  {
    question: "주요 협력 병원은 어디인가요?",
    answer:
      "서울아산병원, 서울대학교병원, 삼성서울병원, 세브란스병원, 서울성모병원, 고려대학교의료원 등 국내 주요 상급 병원과 협력하고 있습니다.",
  },
  {
    question: "어떤 진료 분야를 많이 문의하나요?",
    answer:
      "중증 치료, 건강검진, 안과, 성형외과, 정형외과, 회복 중심 프리미엄 케어에 대한 문의가 많습니다. 증상과 목적에 따라 적합한 병원과 일정으로 재구성합니다.",
  },
  {
    question: "상담 후 일정 확정까지 얼마나 걸리나요?",
    answer:
      "일반적으로 상담 후 1~3일 내 1차 제안을 드리며, 병원 예약과 항목 조율을 거쳐 1~2주 내 방문 일정이 확정되는 경우가 많습니다.",
  },
  {
    question: "통역은 어떻게 지원되나요?",
    answer:
      "전담 코디네이터와 의료 통역 인력이 진료 상담, 검사, 수술 동의, 결과 설명까지 필요한 구간에 맞춰 동행하거나 원격 지원합니다.",
  },
  {
    question: "귀국 후에도 도움을 받을 수 있나요?",
    answer:
      "가능합니다. 주의사항 안내, 경과 체크, 재진 예약 또는 원격 상담 연결 등 사후 케어를 이어서 지원합니다.",
  },
];

const footerBusinessLinks = [
  { label: "소개", href: "#about" },
  { label: "치료 분야", href: "#specialties" },
  { label: "프로세스", href: "#process" },
  { label: "고객 후기", href: "#reviews" },
  { label: "자주 묻는 질문", href: "#faq" },
] as const;

const visitYears = ["방문 연도", "2026", "2027", "2028"];
const visitMonths = ["월", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const visitDays = ["일", ...Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, "0"))];

const initialContactForm: ContactFormState = {
  name: "",
  nation: "",
  email: "",
  messenger: "",
  interest: "",
  visitYear: visitYears[0],
  visitMonth: visitMonths[0],
  visitDay: visitDays[0],
  inquiry: "",
};

function getSubmitLabel(state: SubmitState) {
  if (state === "submitting") {
    return "전송 중...";
  }

  return "무료 상담 신청 보내기";
}

export default function Home() {
  const [activeSpecialty, setActiveSpecialty] = useState(specialties[0]?.key ?? "serious");
  const [contactForm, setContactForm] = useState<ContactFormState>(initialContactForm);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const selectedSpecialty = useMemo(
    () => specialties.find((item) => item.key === activeSpecialty) ?? specialties[0],
    [activeSpecialty],
  );

  const handleContactFieldChange = (field: keyof ContactFormState, value: string) => {
    setContactForm((current) => ({ ...current, [field]: value }));
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      setSubmitState("success");
      setSubmitMessage("상담 신청이 전송되었습니다. 확인 후 연락드리겠습니다.");
      setContactForm(initialContactForm);
    } catch (error) {
      console.error(error);
      setSubmitState("error");
      setSubmitMessage("메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <main className="landing-shell">
      <header className="site-header">
        <div className="container header-row">
          <a className="brand-mark" href="#top" aria-label="UB MEDI home">
            <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={124} height={28} priority />
          </a>

          <nav className="header-nav" aria-label="Primary">
            <a href="#about">소개</a>
            <a href="#history">성장</a>
            <a href="#specialties">치료 분야</a>
            <a href="#process">프로세스</a>
            <a href="#contact">상담</a>
          </nav>

          <div className="header-actions">
            <span className="header-badge">24시간 상담 가능</span>
            <div className="header-messengers" aria-label="Messenger links">
              {messengerLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <Image src={item.icon} alt={item.label} width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="hero-section" id="top">
        <Image className="hero-image" src="/히어로 섹션 이미지.png" alt="" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-kicker">PREMIUM MEDICAL TOUR</p>
          <h1>
            외국인 환자를 위한
            <br />
            <span>프리미엄 맞춤 메디컬 투어</span>
          </h1>
          <p className="hero-copy">
            검증된 상급 병원 연결부터 통역, 숙소, 이동, 사후 관리까지
            <br />
            한국 의료 여정을 하나의 팀이 설계하고 운영합니다.
          </p>
          <div className="hero-cta-row">
            <a className="primary-cta" href="#contact">
              무료상담 신청하기
            </a>
            <a className="secondary-cta" href="#about">
              서비스 소개 보기
            </a>
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label="협력 병원">
        <div className="container partner-strip-inner">
          {partnerLogos.map((item) => (
            <div className="partner-logo-chip" key={item.label}>
              <Image src={item.logo} alt={item.label} width={118} height={32} className="partner-logo-image" />
            </div>
          ))}
        </div>
      </section>

      <section className="about-section section-block" id="about">
        <div className="container about-grid">
          <article className="about-card about-card-main">
            <div className="about-media">
              <Image src="/intro/intro-consulting.png" alt="의료 상담 장면" fill sizes="(max-width: 900px) 100vw, 38vw" />
            </div>
            <div className="about-copy">
              <p className="section-tag">ABOUT UB MEDI</p>
              <h2>상담부터 귀국 후 관리까지 이어지는 의료 여정 설계</h2>
              <p>
                UB MEDI는 외국인 환자가 한국 의료 시스템을 더 쉽게 경험할 수 있도록
                상담, 병원 예약, 의전, 숙소, 회복, 사후 케어를 하나의 흐름으로 연결합니다.
              </p>
            </div>
          </article>

          <article className="about-card about-card-side">
            <div className="about-media">
              <Image src="/intro/intro-care.jpg" alt="프리미엄 케어 공간" fill sizes="(max-width: 900px) 100vw, 22vw" />
            </div>
            <div className="about-side-copy">
              <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={110} height={24} />
              <p>입국 전 플래닝부터 회복 단계까지, 고객별 목적에 맞춘 의료 투어를 설계합니다.</p>
              <a href="#contact">무료 상담 요청</a>
            </div>
          </article>

          <article className="about-card about-card-feature">
            <div className="about-feature-top">
              <p className="section-tag">CORE SERVICE</p>
              <h3>단일 창구로 묶는 프리미엄 메디컬 케어</h3>
            </div>
            <ul className="feature-list">
              {introFeatures.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="history-section section-block" id="history">
        <div className="container narrow">
          <div className="section-heading is-centered">
            <p className="section-tag">OUR HISTORY</p>
            <h2>UB MEDI 설립 배경과 성장</h2>
            <p>수상 이력과 제휴 확장을 통해 축적된 신뢰를 서비스 운영의 기준으로 삼고 있습니다.</p>
          </div>

          <div className="timeline-list">
            {timeline.map((item) => (
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
          <div className="section-heading is-centered">
            <p className="section-tag">TRUST & AWARDS</p>
            <h2>수상 및 파트너십 인증</h2>
            <p>국내 주요 병원과의 협력 경험과 수상 이력이 UB MEDI의 운영 신뢰도를 보여줍니다.</p>
          </div>

          <div className="awards-grid">
            {awards.map((item) => (
              <article className="award-card" key={item.title}>
                <div className={`award-images ${item.images.length > 1 ? "is-multi" : "is-single"}`}>
                  {item.images.map((image) => (
                    <div className="award-image-frame" key={image.src}>
                      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 26vw" />
                    </div>
                  ))}
                </div>
                <div className="award-copy">
                  <p>{item.year}</p>
                  <h3>{item.title}</h3>
                  <strong>{item.subtitle}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="partner-grid">
            {partnerLogos.map((item) => (
              <div className="partner-grid-card" key={item.label}>
                <Image src={item.logo} alt={item.label} width={148} height={38} className="partner-logo-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="erp-section section-block">
        <div className="container erp-grid">
          <div className="erp-copy">
            <p className="section-tag">SMART OPERATION</p>
            <h2>메디컬 케어 통합 ERP 시스템</h2>
            <p>
              고객 상담, 병원 예약, 차량, 통역, 숙소, 사후 관리 정보를 한 시스템에 묶어
              서비스 품질과 응답 속도를 함께 높입니다.
            </p>

            <div className="erp-feature-list">
              {erpFeatures.map((item) => (
                <article className="erp-feature" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="erp-visual">
            <div className="erp-screen erp-screen-main">
              <Image src="/intro/intro-map.png" alt="UB MEDI 운영 대시보드" fill sizes="(max-width: 900px) 100vw, 44vw" />
            </div>
            <div className="erp-screen erp-screen-sub">
              <Image src="/intro/intro-consulting.png" alt="고객 상담 기록 화면" fill sizes="(max-width: 900px) 70vw, 22vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="metric-section section-block">
        <div className="container">
          <div className="section-heading is-centered">
            <p className="section-tag">WHY UB MEDI</p>
            <h2>수치로 증명하는 운영 역량</h2>
          </div>

          <div className="metric-grid">
            {metrics.map((item) => (
              <article className="metric-card" key={item.title}>
                <span>{item.title}</span>
                <strong>{item.value}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specialty-section section-block" id="specialties">
        <div className="container">
          <div className="section-heading">
            <p className="section-tag">SPECIALTY</p>
            <h2>목적에 맞는 병원과 치료를 빠르게 연결합니다</h2>
            <p>주요 진료 카테고리별로 병원 매칭 방식과 회복 동선을 함께 설계합니다.</p>
          </div>

          <div className="specialty-layout">
            <div className="specialty-panel">
              <div className="specialty-image">
                <Image src={selectedSpecialty.image} alt={selectedSpecialty.title} fill sizes="(max-width: 900px) 100vw, 34vw" />
              </div>
              <div className="specialty-copy">
                <p className="specialty-label">{selectedSpecialty.label}</p>
                <h3>{selectedSpecialty.title}</h3>
                <p>{selectedSpecialty.summary}</p>
                <ul>
                  {selectedSpecialty.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="specialty-tabs" role="tablist" aria-label="진료 분야">
              {specialties.map((item) => (
                <button
                  key={item.key}
                  className={item.key === selectedSpecialty.key ? "is-active" : ""}
                  type="button"
                  onClick={() => setActiveSpecialty(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-section section-block">
        <div className="container narrow">
          <div className="section-heading is-centered">
            <p className="section-tag">COMPARISON</p>
            <h2>복잡한 준비 없이 의료 여정을 통합합니다</h2>
            <p>UB MEDI는 의료 여행 전 과정을 하나의 운영 흐름으로 묶는 데 집중합니다.</p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-column is-primary">
              <h3>UB MEDI</h3>
              {comparisonRows.map((row) => (
                <div className="comparison-pill" key={row.ub}>
                  {row.ub}
                </div>
              ))}
            </div>
            <div className="comparison-vs">VS</div>
            <div className="comparison-column">
              <h3>일반 개별 진행</h3>
              {comparisonRows.map((row) => (
                <div className="comparison-pill is-muted" key={row.normal}>
                  {row.normal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section-block" id="process">
        <div className="container">
          <div className="section-heading is-centered">
            <p className="section-tag">PROCESS</p>
            <h2>입국 전부터 귀국 후까지 이어지는 프리미엄 동행</h2>
            <p>의료 경험과 체류 경험을 분리하지 않고 하나의 프로젝트처럼 관리합니다.</p>
          </div>

          <div className="process-grid">
            {processSteps.map((item) => (
              <article className="process-card" key={item.step}>
                <div className="process-top">
                  <Image src={item.icon} alt="" width={22} height={22} aria-hidden />
                  <span>{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="advantage-section section-block">
        <div className="container">
          <div className="section-heading is-centered">
            <p className="section-tag">VALUE</p>
            <h2>UB MEDI만의 차별점</h2>
          </div>

          <div className="value-ring-wrap">
            <div className="value-ring">
              <Image src="/원스톱 케어.svg" alt="원스톱 케어 다이어그램" width={360} height={360} />
            </div>
            <p>의료, 통역, 숙소, 이동, 사후 관리가 하나의 원 안에서 연결되는 구조를 지향합니다.</p>
          </div>

          <div className="advantage-grid">
            {advantages.map((item) => (
              <article className="advantage-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="review-section section-block" id="reviews">
        <div className="container">
          <div className="section-heading is-centered">
            <p className="section-tag">REVIEWS</p>
            <h2>실제 고객의 후기로 증명된 운영 경험</h2>
          </div>

          <div className="review-grid">
            {reviews.map((item) => (
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

      <section className="faq-section section-block" id="faq">
        <div className="container narrow">
          <div className="section-heading is-centered">
            <p className="section-tag">FAQ</p>
            <h2>자주 묻는 질문</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="section-tag is-light">CONTACT</p>
            <h2>
              한국에서의 프리미엄 의료 여정
              <br />
              지금 시작하세요
            </h2>
            <p>
              치료 목적과 희망 일정, 사용 중인 메신저를 남겨주시면
              담당 코디네이터가 확인 후 연락드립니다.
            </p>
            <ul className="contact-points">
              <li>전담 코디네이터가 24시간 이내 1차 안내</li>
              <li>병원, 일정, 체류 플랜을 한 번에 제안</li>
              <li>입국 전 준비부터 귀국 후 관리까지 연속 지원</li>
            </ul>
          </div>

          <form className="contact-form-card" onSubmit={handleContactSubmit}>
            <h3>상담 신청서 작성</h3>
            <p className="contact-form-note">메일 전송은 현재 운영 중인 문의 시스템을 그대로 사용합니다.</p>

            <div className="contact-two-col">
              <label>
                이름
                <input
                  type="text"
                  placeholder="이름을 입력해주세요"
                  value={contactForm.name}
                  onChange={(event) => handleContactFieldChange("name", event.target.value)}
                />
              </label>
              <label>
                거주 국가
                <input
                  type="text"
                  placeholder="거주 국가를 입력해주세요"
                  value={contactForm.nation}
                  onChange={(event) => handleContactFieldChange("nation", event.target.value)}
                />
              </label>
            </div>

            <label>
              이메일
              <input
                type="email"
                placeholder="답변받을 이메일 주소"
                value={contactForm.email}
                onChange={(event) => handleContactFieldChange("email", event.target.value)}
              />
            </label>

            <label>
              메신저
              <input
                type="text"
                placeholder="WhatsApp / WeChat / Viber 등"
                value={contactForm.messenger}
                onChange={(event) => handleContactFieldChange("messenger", event.target.value)}
              />
            </label>

            <label>
              관심 분야
              <input
                type="text"
                placeholder="예: 건강검진, 안과, 성형외과"
                value={contactForm.interest}
                onChange={(event) => handleContactFieldChange("interest", event.target.value)}
              />
            </label>

            <label>
              희망 방문 시기
              <div className="visit-grid">
                <select value={contactForm.visitYear} onChange={(event) => handleContactFieldChange("visitYear", event.target.value)}>
                  {visitYears.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select value={contactForm.visitMonth} onChange={(event) => handleContactFieldChange("visitMonth", event.target.value)}>
                  {visitMonths.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select value={contactForm.visitDay} onChange={(event) => handleContactFieldChange("visitDay", event.target.value)}>
                  {visitDays.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            <label>
              추가 문의
              <textarea
                rows={5}
                placeholder="증상, 희망 병원, 일정 등 자세한 내용을 남겨주세요"
                value={contactForm.inquiry}
                onChange={(event) => handleContactFieldChange("inquiry", event.target.value)}
              />
            </label>

            <button className="contact-submit" type="submit" disabled={submitState === "submitting"}>
              {getSubmitLabel(submitState)}
            </button>

            {submitMessage ? <p className={`contact-feedback is-${submitState}`}>{submitMessage}</p> : null}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/footer/footer-logo-white.svg" alt="UB MEDI" width={154} height={38} />
            <p>You, Better Medical</p>
            <strong>한국 의료 경험을 더 쉽고 정교하게 연결합니다.</strong>

            <div className="footer-socials">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Image src="/footer/facebook.svg" alt="Facebook" width={18} height={18} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Image src="/footer/instagram.svg" alt="Instagram" width={18} height={18} />
              </a>
              <a href="tel:+821088119761" aria-label="Phone">
                <Image src="/footer/phone.svg" alt="Phone" width={18} height={18} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>연중무휴 24시간 상담</p>
            <p>전화: +82-10-8811-9761</p>
            <p>이메일: info@ubmedi.com</p>
            <p>상호: 주식회사 유비메디 (UBMEDI CO., LTD)</p>
          </div>

          <div className="footer-column">
            <h3>Service & Support</h3>
            {footerBusinessLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>Subscribe For Newsletter</h3>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email address" />
              <button type="button">Subscribe Now</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
