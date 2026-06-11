import Image from "next/image";

const partnerHospitals = [
  "세브란스병원",
  "아산의료원",
  "강남성심병원",
  "삼성서울병원",
  "강남성형외과",
  "서울삼성치과의원",
  "서울보라매병원",
];

const specialties = [
  {
    image: "/건강검진.jpg",
    title: "건강검진",
    summary: "기본 검진부터 프리미엄 종합검진, 암 검진, 여성 검진 등 목적에 맞게 제공합니다.",
    tags: ["혈액", "영상", "초음파"],
  },
  {
    image: "/피부과.jpg",
    title: "성형외과",
    summary: "눈, 코, 윤곽 성형부터 지방흡입, 재건 성형까지 한국 최고 수준의 성형 외과를 연결합니다.",
    tags: ["눈성형", "코성형", "윤곽"],
  },
  {
    image: "/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png",
    title: "치과",
    summary: "충치 치료부터 투명교정, 임플란트, 라미네이트까지 구강 건강을 종합적으로 케어합니다.",
    tags: ["임플란트", "투명교정", "심미"],
  },
  {
    image: "/정형외과.jpg",
    title: "정형외과",
    summary: "최신 장비를 활용한 정밀 종합진단으로 건강 위험 요소를 선제적으로 관리합니다.",
    tags: ["무릎통증", "허리수술", "재활"],
  },
];

const ubmediStrengths = [
  "공항 픽업·이동",
  "의료 전문 통역",
  "숙박·관광 연계",
  "사후 관리",
  "24시간 코디네이터",
];

const genericSupport = ["개인 이동", "일반적인 통역", "의료 연계만 제공", "사후 관리 없음", "영업시간 내 한정"];

const processSteps = [
  {
    icon: "/SVG/아트보드 2.svg",
    step: "STEP01",
    title: "1:1 맞춤형 의료 컨설팅",
    text: "전담 코디네이터가 24시간 밀착 케어로 고객 맞춤형 의료 여정을 설계합니다.",
  },
  {
    icon: "/SVG/아트보드 3.svg",
    step: "STEP02",
    title: "의료투어 예약",
    text: "국내 최고 대학병원 예약부터 비자, 숙박, 항공까지 원스톱으로 해결합니다.",
  },
  {
    icon: "/SVG/아트보드 4.svg",
    step: "STEP03",
    title: "입국 & 프리미엄 의전",
    text: "공항 픽업부터 병원까지, 전담 코디네이터가 1:1로 밀착 동행합니다.",
  },
  {
    icon: "/SVG/아트보드 8.svg",
    step: "STEP04",
    title: "프리미엄 회복 및 웰니스",
    text: "최고급 휴니스 프로그램과 맞춤형 단독 관리를 위한 프리미엄 솔루션이 제공됩니다.",
  },
  {
    icon: "/SVG/아트보드 9.svg",
    step: "STEP05",
    title: "귀국 & 사후 관리",
    text: "귀국하시는 길까지 세심하게 동행하고, 이후 건강 상태를 체크하며 필요한 상담을 이어갑니다.",
  },
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
            <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={138} height={34} priority />
          </a>

          <nav className="main-nav" aria-label="주요 메뉴">
            <a href="#top">소개</a>
            <a href="#specialties">치료 분야</a>
            <a href="#process">이용 안내</a>
            <a href="#reviews">이용 후기</a>
            <a href="#contact">고객 센터</a>
          </nav>

          <div className="header-utils" aria-label="연락 정보">
            <button className="lang-chip" type="button">
              KO
            </button>
            <span className="header-accent">24시간 상담 가능</span>
            <span className="header-phone">+82-0507-1465-7060</span>
            <a className="header-whatsapp" href="#contact">
              WhatsApp
            </a>
          </div>
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
          <span className="hero-badge">PREMIUM MEDICAL CONCIERGE</span>
          <h1>
            한 번의 선택으로 완성되는
            <br />
            <span>프리미엄 맞춤 메디컬 투어</span>
          </h1>
          <p className="hero-copy">
            글로벌 최고 수준의 의료진과 1:1 전담 컨시어지가
            <br />
            입국부터 귀국까지 당신만을 위한 여정을 설계합니다.
          </p>
          <a className="primary-button hero-button" href="#contact">
            무료상담 신청하기
          </a>
        </div>

        <div className="hero-partners">
          <div className="container">
            <div className="partners-title">
              <span>협력 메디컬 투어 파트너</span>
            </div>
            <div className="partners-grid">
              {partnerHospitals.map((partner) => (
                <div className="partner-item" key={partner}>
                  <span className="partner-dot" aria-hidden />
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section specialty-section" id="specialties">
        <div className="container">
          <div className="specialty-heading">
            <h2>
              목적별 <span>메디컬 분야</span> 큐레이션
            </h2>
            <p>증상이나 시술명을 입력하면 해당 진료과로 바로 이동합니다.</p>
          </div>

          <div className="search-shell specialty-search" aria-label="검색 박스">
            <div className="search-prompt">
              <span className="search-plus" aria-hidden>
                ✦
              </span>
              <span>예) 라식, 허리통증, 충치, 성형 등</span>
            </div>
            <button type="button" aria-label="검색" className="search-button">
              ⌕
            </button>
          </div>

          <div className="specialty-list-heading">진료과 선택</div>

          <div className="specialty-carousel">
            <button className="carousel-arrow is-left" type="button" aria-label="이전">
              ‹
            </button>
            <div className="card-grid specialty-grid">
              {specialties.map((item) => (
                <article className="specialty-card" key={item.title}>
                  <div className="card-media specialty-media">
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 25vw" />
                  </div>
                  <div className="card-body specialty-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <div className="tag-row specialty-tags">
                      {item.tags.map((tag) => (
                        <span className="tag specialty-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <button className="carousel-arrow is-right" type="button" aria-label="다음">
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container narrow comparison-wrap">
          <div className="comparison-copy">
            <p>20개 이상의 전문 진료과와 100여 가지 의료 시술을</p>
            <p>UB MEDI를 통해 경험할 수 있습니다.</p>
          </div>
          <div className="comparison-grid">
            <div className="comparison-box is-primary">
              <div className="comparison-title is-primary-title">UB MEDI</div>
              <div className="comparison-list">
                {ubmediStrengths.map((item) => (
                  <div className="pill-row" key={item}>
                    <span className="pill-icon is-check" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="comparison-vs">VS</div>
            <div className="comparison-box is-secondary">
              <div className="comparison-title">일반 플랫폼</div>
              <div className="comparison-list">
                {genericSupport.map((item) => (
                  <div className="pill-row is-muted" key={item}>
                    <span className="pill-icon is-x" aria-hidden>
                      ⨯
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container process-wrap">
          <div className="process-heading">
            <h2>
              입국 전부터 귀국 후까지
              <br />
              <span>프리미엄 메디컬 투어</span>
            </h2>
            <p>전 세계 고객들이 경험한 UB MEDI의 프리미엄 의료 여정</p>
          </div>

          <div className="process-timeline">
            <div className="timeline-line" aria-hidden />
            <div className="timeline-points">
              {processSteps.map((step, index) => (
                <span className="timeline-point" key={step.title}>
                  0{index + 1}
                </span>
              ))}
            </div>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.title}>
                <div className="process-card-top">
                  <Image src={step.icon} alt="" width={22} height={22} aria-hidden />
                  <span className="process-step-label">{step.step}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <div className="process-card-line" aria-hidden />
              </article>
            ))}
          </div>

          <div className="process-badge">입국 전 플래닝부터 귀국 후 사후 케어까지, 5단계 완전 관리 서비스</div>
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
