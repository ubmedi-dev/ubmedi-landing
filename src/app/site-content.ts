export const navItems = [
  { label: "소개", href: "/about" },
  { label: "이용안내", href: "/usage" },
  { label: "치료 분야", href: "/treatment" },
  { label: "제휴 병원", href: "/hospitals" },
  { label: "고객 센터", href: "/support" },
] as const;

export const messengerLinks = [
  { label: "Viber", icon: "/messenger/viber.svg", href: "viber://chat?number=+821033907060" },
  { label: "Messenger", icon: "/messenger/messenger.svg", href: "https://m.me/1166142713249729" },
  { label: "WhatsApp", icon: "/messenger/whatsapp.svg", href: "https://wa.me/821033907060" },
  { label: "WeChat", icon: "/messenger/wechat.svg", href: "weixin://dl/search?wxid_6kt3xkqmvcxe22" },
] as const;

export const footerLinks = navItems;

export const contactSummary = {
  phone: "+82 10-3390-7060",
  email: "info@ubmedi.com",
  address: "서울 금천구 가산디지털1로 168 우림라이온스밸리 A동 1107호",
};

export const partnerHospitals = [
  { key: "amc", label: "서울아산병원", logo: "/파트너사로고/서울아산병원.svg" },
  { key: "sev", label: "세브란스병원", logo: "/파트너사로고/세브란스병원.svg" },
  { key: "smc", label: "삼성서울병원", logo: "/파트너사로고/삼성서울병원.svg" },
  { key: "ku", label: "고려대학교의료원", logo: "/파트너사로고/고려대학교의료원.svg" },
  { key: "snuh", label: "서울대학교병원", logo: "/파트너사로고/서울대학교병원.svg" },
  { key: "cmc", label: "가톨릭대학교 서울성모병원", logo: "/파트너사로고/성모병원.svg" },
] as const;

export const homeFeatures = [
  "상담부터 병원 예약, 통역, 이동, 사후 관리까지 한 번에 정리합니다.",
  "전담 코디네이터가 환자 상태와 일정에 맞춰 동선을 설계합니다.",
  "공항 픽업, 숙소, 보호자 일정까지 함께 고려한 체류 계획을 제안합니다.",
  "치료 목적과 예산, 회복 기간을 기준으로 적합한 병원을 연결합니다.",
];

export const companyTimeline = [
  {
    period: "2017",
    lines: ["UB MEDI 설립", "국내 병원과 해외 환자를 연결하는 메디컬 코디네이션 서비스 시작"],
  },
  {
    period: "2019",
    lines: ["국민건강보험 일산병원 해외 환자 유치 협약", "서울아산병원 우수 파트너사 선정"],
  },
  {
    period: "2022",
    lines: ["프리미엄 숙박 및 의전 운영 체계 고도화", "환자 중심의 원스톱 프로그램 확장"],
  },
  {
    period: "2024",
    lines: ["치료, 동행, 이동을 연결한 통합 서비스 운영", "공항-병원-호텔 연계 동선 표준화"],
  },
  {
    period: "2025",
    lines: ["국내 주요 상급종합병원 공식 파트너 네트워크 확대", "강남 전문 클리닉 협력 라인업 강화"],
  },
] as const;

export const companyValues = [
  {
    number: "01",
    title: "의료 연결력",
    text: "환자의 증상과 우선순위를 파악해 국내 상급병원과 전문 의료진을 빠르게 연결합니다.",
  },
  {
    number: "02",
    title: "일정 통합",
    text: "진료 예약, 체류, 교통, 통역을 따로 준비하지 않도록 하나의 여정으로 묶습니다.",
  },
  {
    number: "03",
    title: "검증된 네트워크",
    text: "협력 병원과 축적된 운영 경험을 기반으로 현실적인 치료 계획을 제안합니다.",
  },
  {
    number: "04",
    title: "사후 관리",
    text: "귀국 이후에도 결과 설명, 후속 예약, 온라인 상담까지 이어서 지원합니다.",
  },
] as const;

export const homeReviews = [
  {
    image: "/고객 후기 프로필/beautiful-cheerful-woman-sitting-by-white-wall.jpg",
    name: "Zhang Wei",
    country: "중국",
    text: "치료 목적에 맞는 병원을 빠르게 제안받았고, 통역과 이동 일정까지 정리되어 결정이 쉬웠습니다.",
  },
  {
    image: "/고객 후기 프로필/medium-shot-smiley-man-posing-outdoors.jpg",
    name: "Sato Sakura",
    country: "일본",
    text: "검진 예약부터 숙소와 공항 픽업까지 이어져서 처음 한국에 와도 불안하지 않았습니다.",
  },
  {
    image: "/고객 후기 프로필/young-man-middle-eastern-young-man-traditional-clothing.jpg",
    name: "Mohammed Al-Farsi",
    country: "UAE",
    text: "수술 전후 일정과 보호자 동선까지 세밀하게 맞춰줘서 체류 중 부담이 많이 줄었습니다.",
  },
  {
    image: "/고객 후기 프로필/smiling-elderly-woman-city.jpg",
    name: "Elena Petrov",
    country: "러시아",
    text: "결과 설명과 후속 상담까지 연결되어 귀국 후에도 관리받는 느낌이 유지되었습니다.",
  },
] as const;

export const usageSteps = [
  {
    step: "STEP 1",
    title: "무료 상담 접수",
    text: "치료 목적, 현재 상태, 희망 일정과 메신저 채널을 접수합니다.",
  },
  {
    step: "STEP 2",
    title: "병원 및 진료안 제안",
    text: "협력 병원과 예상 일정, 필요한 서류, 예상 비용 범위를 안내합니다.",
  },
  {
    step: "STEP 3",
    title: "예약 및 통역 준비",
    text: "진료 일정 확정 후 통역, 의전, 공항 픽업, 숙소 동선을 함께 구성합니다.",
  },
  {
    step: "STEP 4",
    title: "입국 및 진료 진행",
    text: "공항 도착부터 병원 방문, 검사, 수술, 입원 일정까지 현장에서 지원합니다.",
  },
  {
    step: "STEP 5",
    title: "회복 및 체류 관리",
    text: "회복 단계에 맞춰 재진 일정과 보호자 일정, 숙소 연장 여부를 조정합니다.",
  },
  {
    step: "STEP 6",
    title: "귀국 후 사후 케어",
    text: "검사 결과 설명, 온라인 상담, 후속 예약 요청까지 이어서 관리합니다.",
  },
] as const;

export const supportChannels = [
  {
    title: "상담 전화",
    value: "+82 10-3390-7060",
    text: "한국 시간 기준 빠른 응답이 필요한 경우 바로 연결해 드립니다.",
  },
  {
    title: "이메일",
    value: "info@ubmedi.com",
    text: "검사 자료, 영상, 의무기록을 함께 전달해야 할 때 적합합니다.",
  },
  {
    title: "메신저 상담",
    value: "WhatsApp · WeChat · Viber",
    text: "해외 체류 중에도 가장 익숙한 채널로 편하게 문의할 수 있습니다.",
  },
];

export const supportFaqs = [
  {
    question: "UB MEDI는 어떤 서비스를 제공하나요?",
    answer:
      "해외 환자를 위한 한국 의료 컨시어지 서비스입니다. 상담, 병원 제안, 예약, 통역, 픽업, 숙소, 사후 관리까지 하나의 흐름으로 운영합니다.",
  },
  {
    question: "어느 국가의 환자가 이용하나요?",
    answer:
      "중국, 일본, 중동, CIS권 고객 비중이 높지만 국가와 관계없이 상담 가능합니다. 환자의 언어와 진료 목적에 맞는 운영 방식을 먼저 안내합니다.",
  },
  {
    question: "주요 진료 분야는 무엇인가요?",
    answer:
      "중증 치료, 건강검진, 피부과와 성형, 안과, 척추·관절, 심장·혈관, 치과 분야를 중심으로 운영하고 있습니다.",
  },
  {
    question: "상담 후 실제 예약까지 얼마나 걸리나요?",
    answer:
      "보통 24시간 이내 1차 회신을 드리며, 진료 분야와 일정에 따라 병원 제안과 예약 확정까지는 수일에서 2주 정도가 소요됩니다.",
  },
  {
    question: "비용은 어떻게 산정되나요?",
    answer:
      "진료 분야, 병원, 체류 일정, 통역과 의전 범위에 따라 달라집니다. 상담 접수 후 환자 상황에 맞춘 개별 견적을 드립니다.",
  },
  {
    question: "통역 서비스는 어떻게 제공되나요?",
    answer:
      "전담 코디네이터와 전문 통역 인력이 진료 상담, 검사 결과 설명, 입퇴원 안내 등 필요한 구간에서 지원합니다.",
  },
  {
    question: "숙소와 픽업도 함께 운영하나요?",
    answer:
      "공항 픽업, 병원 인근 숙소 제안, 병원 이동 차량 배정까지 체류 동선 전체를 일정에 맞춰 운영합니다.",
  },
  {
    question: "체류 중 긴급 상황이 생기면 어떻게 되나요?",
    answer:
      "전담 코디네이터가 우선 연락 창구가 되며, 병원과 보호자, 필요한 통역 지원을 빠르게 연결합니다.",
  },
  {
    question: "귀국 후에도 관리가 이어지나요?",
    answer:
      "필요시 온라인 상담 연계, 후속 예약, 검사 결과 정리와 전달까지 이어서 지원합니다.",
  },
] as const;
