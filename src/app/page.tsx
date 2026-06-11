import Image from "next/image";

const quickStats = [
  { icon: "/SVG/아트보드 6.svg", label: "입국 지원" },
  { icon: "/SVG/아트보드 7.svg", label: "진료 예약" },
  { icon: "/SVG/아트보드 8.svg", label: "통역 서비스" },
  { icon: "/SVG/아트보드 9.svg", label: "사후 관리" },
  { icon: "/SVG/아트보드 4.svg", label: "맞춤 일정" },
  { icon: "/SVG/아트보드 5.svg", label: "체류 케어" },
  { icon: "/SVG/대지 1.svg", label: "24h 상담" },
];

const specialties = [
  {
    image: "/건강검진.jpg",
    title: "건강검진",
    summary: "정밀 검진과 전문의 상담을 연계해 상태를 빠르게 파악합니다.",
    tags: ["프리미엄 검진", "당일 상담"],
  },
  {
    image: "/피부과.jpg",
    title: "피부과",
    summary: "시술 목적과 회복 기간을 고려해 맞춤형 프로그램을 설계합니다.",
    tags: ["미용 시술", "회복 케어"],
  },
  {
    image: "/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png",
    title: "내과",
    summary: "진료 전후 이동, 검사, 통역까지 한 흐름으로 관리합니다.",
    tags: ["정밀 진단", "동행 지원"],
  },
  {
    image: "/정형외과.jpg",
    title: "정형외과",
    summary: "재활 일정과 체류 기간을 고려한 치료 플랜을 제안합니다.",
    tags: ["수술 연계", "재활 설계"],
  },
];

const ubmediStrengths = [
  "맞춤 병원 큐레이션",
  "전 일정 통합 지원",
  "실시간 통역",
  "숙소·이동 관리",
  "24시 고객 케어",
];

const genericSupport = ["병원 직접 탐색", "개별 예약", "일정 조율 부담", "이동 동선 분리", "상황별 대응 한계"];

const processSteps = [
  { icon: "/SVG/아트보드 2.svg", title: "상담 접수", text: "희망 진료, 일정, 체류 조건을 먼저 확인합니다." },
  { icon: "/SVG/아트보드 3.svg", title: "병원 매칭", text: "분야와 예산에 맞는 병원과 의료진을 선별합니다." },
  { icon: "/SVG/아트보드 4.svg", title: "방문 설계", text: "검사, 진료, 회복 일정을 한 번에 구성합니다." },
  { icon: "/SVG/아트보드 8.svg", title: "현장 케어", text: "입국 후 통역, 이동, 접수, 동행을 지원합니다." },
  { icon: "/SVG/아트보드 9.svg", title: "사후 관리", text: "귀국 이후 경과 확인과 추가 상담을 연결합니다." },
];

const benefits = [
  {
    icon: "/SVG/아트보드 6.svg",
    title: "상담부터 귀국까지 원스톱",
    text: "검사 예약, 스케줄 조율, 현장 응대까지 하나의 창구로 운영합니다.",
  },
  {
    icon: "/SVG/아트보드 7.svg",
    title: "의료진 기준의 일정 설계",
    text: "회복 시간과 이동 피로도를 고려해 체류 동선을 조정합니다.",
  },
  {
    icon: "/SVG/아트보드 5.svg",
    title: "카카오톡 기반 24시간 연결",
    text: "응급 문의나 일정 변경이 생겨도 즉시 대응 가능한 채널을 둡니다.",
  },
  {
    icon: "/SVG/대지 1.svg",
    title: "한국 체류 특화 운영",
    text: "입출국, 숙소, 공항 이동까지 메디컬 투어 관점에서 연결합니다.",
  },
];

const reviews = [
  {
    image: "/고객 후기 프로필/beautiful-cheerful-woman-sitting-by-white-wall.jpg",
    name: "Josephine W.",
    text: "검진부터 체류 일정까지 정리돼 있어서 한국 방문이 훨씬 편했습니다.",
  },
  {
    image: "/고객 후기 프로필/medium-shot-smiley-man-posing-outdoors.jpg",
    name: "Alex M.",
    text: "병원 선택 이유와 회복 일정까지 설명이 명확해서 신뢰가 갔습니다.",
  },
  {
    image: "/고객 후기 프로필/medium-shot-asian-girl-city.jpg",
    name: "Yuna K.",
    text: "피부과 시술 후 사후 케어 메시지가 꾸준히 와서 안심됐습니다.",
  },
  {
    image: "/고객 후기 프로필/smiling-elderly-woman-city.jpg",
    name: "Maria T.",
    text: "통역과 이동 지원이 자연스럽게 이어져서 가족도 만족했습니다.",
  },
  {
    image: "/고객 후기 프로필/young-man-middle-eastern-young-man-traditional-clothing.jpg",
    name: "Omar A.",
    text: "짧은 체류 일정 안에서 필요한 진료를 효율적으로 받을 수 있었습니다.",
  },
];

const faqs = [
  {
    question: "어떤 진료과목을 연결할 수 있나요?",
    answer: "건강검진, 피부과, 정형외과, 내과 등 주요 메디컬 투어 수요가 높은 진료과목을 중심으로 운영합니다.",
  },
  {
    question: "한국 입국 전에도 상담이 가능한가요?",
    answer: "가능합니다. 방문 전 온라인 상담으로 일정과 예산, 희망 진료를 먼저 조율합니다.",
  },
  {
    question: "통역과 차량 지원도 포함되나요?",
    answer: "요청 범위에 따라 통역, 공항 픽업, 병원 이동 동선까지 묶어서 제안할 수 있습니다.",
  },
  {
    question: "시술이나 수술 후 관리도 도와주나요?",
    answer: "귀국 이후에도 경과 확인, 병원 재문의, 추가 예약 연계까지 후속 지원을 제공합니다.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="UB MEDI 홈">
            <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={120} height={30} priority />
          </a>
          <nav className="main-nav" aria-label="주요 메뉴">
            <a href="#specialties">서비스</a>
            <a href="#process">프로세스</a>
            <a href="#benefits">차별점</a>
            <a href="#reviews">후기</a>
            <a href="#contact">문의</a>
          </nav>
        </div>
      </header>

      <section className="hero-section" id="top">
        <Image
          className="hero-bg"
          src="/히어로 섹션 이미지.png"
          alt="UB MEDI 메디컬 투어 배경"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">UB MEDI PREMIUM CARE</p>
          <h1>
            한 번의 선택으로 완성되는
            <br />
            <span>프리미엄 맞춤 메디컬 투어</span>
          </h1>
          <p className="hero-copy">
            건강검진과 치료, 시술, 회복 관리까지.
            <br />
            한국 체류 일정 전체를 하나의 동선으로 설계합니다.
          </p>
          <a className="primary-button" href="#contact">
            맞춤 상담 신청하기
          </a>
        </div>
      </section>

      <section className="stat-strip">
        <div className="container stat-grid">
          {quickStats.map((item) => (
            <div className="stat-item" key={item.label}>
              <Image src={item.icon} alt="" width={18} height={18} aria-hidden />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="specialties">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">SPECIALTY CURATION</p>
            <h2>목적별 메디컬 분야 큐레이션</h2>
            <p>원하는 치료 목적과 체류 계획에 맞춰 적합한 진료 분야부터 정리합니다.</p>
          </div>

          <div className="search-shell" aria-label="검색 박스">
            <span>어떤 치료나 검진을 찾고 계신가요?</span>
            <button type="button" aria-label="검색">
              검색
            </button>
          </div>

          <div className="card-grid">
            {specialties.map((item) => (
              <article className="specialty-card" key={item.title}>
                <div className="card-media">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 25vw" />
                </div>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container narrow">
          <div className="section-heading">
            <h2>고객 여정에 필요한 요소만 모아 설계하는 방식</h2>
            <p>UB MEDI는 병원 예약을 넘어 체류 전체를 운영 관점에서 묶습니다.</p>
          </div>
          <div className="comparison-grid">
            <div className="comparison-box is-primary">
              <div className="comparison-title">UB MEDI</div>
              {ubmediStrengths.map((item) => (
                <div className="pill-row" key={item}>
                  {item}
                </div>
              ))}
            </div>
            <div className="comparison-vs">VS</div>
            <div className="comparison-box">
              <div className="comparison-title">일반 접근</div>
              {genericSupport.map((item) => (
                <div className="pill-row is-muted" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">PREMIUM MEDICAL TOUR</p>
            <h2>
              입국 전부터 귀국 후까지
              <br />
              <span>프리미엄 메디컬 투어</span>
            </h2>
            <p>상담 단계부터 사후 확인까지 끊기지 않는 흐름으로 연결합니다.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <div className="process-number">0{index + 1}</div>
                <Image src={step.icon} alt="" width={28} height={28} aria-hidden />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <p className="section-note">환자 상태와 방문 목적에 따라 일정과 지원 항목은 유연하게 조정됩니다.</p>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container">
          <div className="section-heading">
            <h2>
              이 모든 여정을 가능하게 하는
              <br />
              <span>UB MEDI의 차별점</span>
            </h2>
          </div>
          <div className="care-visual">
            <Image src="/원스톱 케어.svg" alt="UB MEDI 원스톱 케어" width={582} height={576} />
          </div>
          <div className="benefit-grid">
            {benefits.map((item) => (
              <article className="benefit-item" key={item.title}>
                <Image src={item.icon} alt="" width={28} height={28} aria-hidden />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section review-section" id="reviews">
        <div className="container">
          <div className="section-heading">
            <h2>
              실제 고객의 <span>메디컬 투어 후기</span>
            </h2>
            <p>해외 체류 환자와 보호자가 경험한 실제 여정을 간단히 정리했습니다.</p>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <Image className="review-avatar" src={review.image} alt={review.name} width={52} height={52} />
                <div>
                  <h3>{review.name}</h3>
                  <p>{review.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container narrow">
          <div className="section-heading">
            <h2>FAQ</h2>
            <p>자주 묻는 질문</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <Image
          className="contact-bg"
          src="/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png"
          alt=""
          fill
          sizes="100vw"
        />
        <div className="contact-overlay" />
        <div className="container contact-grid">
          <div className="contact-copy">
            <h2>
              한국에서의 프리미엄 의료 여정
              <br />
              지금 시작하세요
            </h2>
            <ul>
              <li>희망 진료과와 일정만 알려주시면 맞춤 동선을 설계합니다.</li>
              <li>병원 예약부터 통역, 이동, 체류 지원까지 한 번에 연결합니다.</li>
              <li>상담 내용은 빠르게 검토 후 순차적으로 안내드립니다.</li>
            </ul>
          </div>
          <form className="contact-form">
            <h3>상담 신청서 작성</h3>
            <div className="form-grid">
              <label>
                이름
                <input type="text" placeholder="이름을 입력하세요" />
              </label>
              <label>
                국적
                <input type="text" placeholder="국가명을 입력하세요" />
              </label>
            </div>
            <label>
              연락처
              <input type="text" placeholder="+82 / WhatsApp / Telegram" />
            </label>
            <label>
              희망 진료 분야
              <input type="text" placeholder="예: 건강검진, 피부과, 정형외과" />
            </label>
            <label>
              방문 예정 시기
              <input type="text" placeholder="예: 2026년 7월 첫째 주" />
            </label>
            <label>
              문의 내용
              <textarea rows={5} placeholder="현재 상태, 희망 일정, 동행 인원 등을 적어주세요" />
            </label>
            <button className="primary-button form-button" type="submit">
              무료 맞춤 상담 신청
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={154} height={40} />
            <div className="footer-brand-copy">
              <p className="footer-tagline">You, Better Medical</p>
              <p>"당신을 위한, 더 나은 의료 경험"</p>
            </div>
            <div className="footer-socials" aria-label="소셜 링크">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ◎
              </a>
              <a href="#" aria-label="WhatsApp">
                ◔
              </a>
            </div>
            <p className="footer-copyright">COPYRIGHT © 2014 UB MED INC. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>연중무휴 24시간 상담</p>
            <p>WhatsApp, 카카오톡 상담</p>
            <p className="footer-spacer" />
            <p>전화: +82-0507-1465-7060</p>
            <p>kevin7060@naver.com</p>
            <p className="footer-spacer" />
            <p>주소:</p>
            <p>상호: UB MEDI(유비 메디)</p>
            <p>사업자 등록번호:</p>
            <div className="footer-meta-links">
              <a href="#">개인정보처리방침</a>
              <a href="#">이메일무단수집거부</a>
            </div>
          </div>
          <div className="footer-column footer-links">
            <h3>서비스 및 지원</h3>
            <a href="#">소개</a>
            <a href="#">치료 분야</a>
            <a href="#">이용 안내</a>
            <a href="#">이용 후기</a>
            <a href="#">고객센터</a>
          </div>
          <div className="footer-column footer-newsletter">
            <h3>Subscribe & Newsletter</h3>
            <div className="newsletter-row">
              <input type="email" placeholder="Email address" />
              <button type="button">Submit Now</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
