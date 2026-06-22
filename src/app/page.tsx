"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Locale = "ko" | "en" | "mn";

function detectPreferredLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone?.toLowerCase() ?? "";
  const browserLanguages = [navigator.language, ...(navigator.languages ?? [])]
    .filter(Boolean)
    .map((language) => language.toLowerCase());

  if (timezone.includes("seoul") || browserLanguages.some((language) => language === "ko" || language.startsWith("ko-"))) {
    return "ko";
  }

  if (
    timezone.includes("ulaanbaatar") ||
    timezone.includes("choibalsan") ||
    timezone.includes("hovd") ||
    browserLanguages.some((language) => language === "mn" || language.startsWith("mn-"))
  ) {
    return "mn";
  }

  return "en";
}

type Review = {
  image: string;
  name: string;
  country: string;
  text: string;
};

type Faq = {
  question: string;
  answer: string;
};

type ProcessStep = {
  icon: string;
  step: string;
  title: string;
  text: string;
};

type Specialty = {
  image: string;
  title: string;
  summary: string;
  tags: string[];
};

type Benefit = {
  icon: string;
  title: string;
  text: string;
};

type IntroFeature = {
  number: string;
  title: string;
  text: string;
};

type TimelineItem = {
  period: string;
  lines: string[];
};

type AwardCard = {
  images: { src: string; alt: string }[];
  year: string;
  title: string;
  subtitle: string;
};

type PartnerLogoGroup = {
  logos: { label: string; logo: string }[];
  year: string;
  title: string;
  subtitle: string;
};

type FooterSocialLink = {
  label: string;
  href: string;
  icon: string;
};

type Copy = {
  localeLabel: string;
  nav: {
    intro: string;
    specialties: string;
    guide: string;
    reviews: string;
    support: string;
  };
  header: {
    available: string;
    whatsapp: string;
  };
  introSection: {
    tagline: string;
    titleLine1: string;
    titleLine2: string;
    descriptionLine1: string;
    descriptionLine2: string;
    features: IntroFeature[];
  };
  timeline: {
    title: string;
    subtitle: string;
    items: TimelineItem[];
  };
  awards: {
    title: string;
    subtitle: string;
    cards: AwardCard[];
    partnerGroup: PartnerLogoGroup;
  };
  hero: {
    badge: string;
    titleTop: string;
    titleAccent: string;
    descriptionLine1: string;
    descriptionLine2: string;
    cta: string;
    partnerTitle: string;
  };
  partners: { label: string; logo: string }[];
  specialty: {
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    searchPlaceholder: string;
    selectTitle: string;
    prev: string;
    next: string;
    items: Specialty[];
  };
  comparison: {
    line1: string;
    line2: string;
    ubMediTitle: string;
    genericTitle: string;
    ubMediItems: string[];
    genericItems: string[];
  };
  process: {
    titleTop: string;
    titleAccent: string;
    description: string;
    badge: string;
    items: ProcessStep[];
  };
  benefits: {
    titleLine1: string;
    titleAccent: string;
    summaryLine1: string;
    summaryLine2: string;
    items: Benefit[];
  };
  reviews: {
    titlePrefix: string;
    titleAccent: string;
    description: string;
    items: Review[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: Faq[];
  };
  contact: {
    titleLine1: string;
    titleLine2: string;
    introLine1: string;
    introLine2: string;
    points: string[];
    formTitle: string;
    formNote: string;
    nameLabel: string;
    namePlaceholder: string;
    nationLabel: string;
    nationPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messengerLabel: string;
    messengerPlaceholder: string;
    interestLabel: string;
    interestPlaceholder: string;
    visitLabel: string;
    visitYear: string[];
    visitMonth: string[];
    visitDay: string[];
    inquiryLabel: string;
    inquiryPlaceholder: string;
    submit: string;
  };
  footer: {
    tagline: string;
    quote: string;
    contactTitle: string;
    contactPrimary: string[];
    contactMeta: string[];
    businessTitle: string;
    businessLinks: string[];
    newsletterTitle: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    socialLinks: FooterSocialLink[];
    copyright: string;
  };
};

const headerMessengers = [
  { label: "Viber", icon: "/messenger/viber.svg", href: "viber://chat?number=+821033907060" },
  { label: "Messenger", icon: "/messenger/messenger.svg", href: "https://m.me/1166142713249729" },
  { label: "WhatsApp", icon: "/messenger/whatsapp.svg", href: "https://wa.me/821033907060" },
  { label: "WeChat", icon: "/messenger/wechat.svg", href: "weixin://dl/search?wxid_6kt3xkqmvcxe22" },
] as const;

const copies: Record<Locale, Copy> = {
  ko: {
    localeLabel: "KOR",
    nav: {
      intro: "소개",
      specialties: "치료 분야",
      guide: "이용 안내",
      reviews: "이용 후기",
      support: "고객 센터",
    },
    header: {
      available: "24시간 상담 가능",
      whatsapp: "WhatsApp",
    },
    introSection: {
      tagline: "You, Better Medical UB MEDI",
      titleLine1: "당신을 위한,",
      titleLine2: "더 나은 프리미엄 의료의 동행",
      descriptionLine1: "UB MEDI는 외국인 환자를 위한 한국 의료관광 원스톱 플랫폼으로",
      descriptionLine2: "복잡한 의료 일정을 하나의 책임 운영으로 통합합니다.",
      features: [
        { number: "01", title: "의료 서비스", text: "상담을 통한 검증된 병원 · 의료진 연결" },
        { number: "02", title: "전담 통역", text: "전 과정 동행하는 1:1 전담 통역 지원" },
        { number: "03", title: "픽업 서비스", text: "공항부터 병원 · 숙소까지 전용 차량 이동" },
        { number: "04", title: "프리미엄 숙소", text: "회복에 최적화된 프리미엄 숙소 제공" },
        { number: "05", title: "컨시어지", text: "예약부터 귀국까지 VIP 컨시어지 제공" },
      ],
    },
    timeline: {
      title: "대표 이력 및 UB MEDI 설립 배경과 성장",
      subtitle: "경험은 신뢰가 되고, 신뢰는 동행이 됩니다",
      items: [
        { period: "2005년 07월", lines: ["LG그룹 건설 공채 입사(대표)"] },
        { period: "2006년 ~ 2008년", lines: ["동계 올림픽 대관령 알펜시아 조성 사업 (업무: 재경, 대표)"] },
        { period: "2010년 ~ 2011년", lines: ["해외 UAE 아부다비 프로젝트 근무 (업무: 재무, 대표)"] },
        { period: "2011년 ~ 2013년", lines: ["해외 방글라데시 근무 (업무: Branch Manager, 대표)"] },
        { period: "2013년 ~ 2016년", lines: ["해외 터키 근무 (업무: Finacial Manager, 대표)"] },
        {
          period: "2016년 11월",
          lines: ["국토부 장관 표창(대표)", "(업적: 터키 진출 한국 기업 TAX 절감 기여 / 연간 700억)"],
        },
        { period: "2017년", lines: ["외국인환자 유치 전문기업 UB MEDI 설립", "해외 UAE 근무 (Business Manager)"] },
        {
          period: "2019년",
          lines: [
            "UB MEDI 국민건강보험 일산병원 외국인 환자 유치 협약 체결",
            "서울아산병원 우수 파트너사 선정",
            "서울대학교병원 우수 유치업체 대상 수상",
          ],
        },
        { period: "2022년", lines: ["호텔 그라체 브랜드 개발 및 위탁 운영 실시(대표)"] },
        {
          period: "2024년",
          lines: [
            "스테이지(STAY-G) 법인 설립(대표)",
            "인천공항 시애틀 호텔 위탁",
            "인천공항 시애틀 호텔 위탁 후 매도 성공",
            "청평 원스테이 호텔 위탁",
          ],
        },
        {
          period: "2025년",
          lines: [
            "UB MEDI 서울아산병원 우수 파트너사 선정",
            "6대 종합병원(서울대학교병원 · 삼성서울병원 · 서울아산병원 · 세브란스병원 · 서울성모병원 · 고려대학교병원) 공식 협력 파트너 등록",
            "강남 성형외과 4개원 협력 파트너 등록",
            "강남 피부과 3개원 협력 파트너 등록",
          ],
        },
        {
          period: "2026년",
          lines: [
            "UB MEDI 서울아산병원 우수 파트너사 누적 3회 선정",
            "대표이사 이시형 취임 · 의료관광 통합 케어 사업 총괄",
            "몽골·중국 마케팅 채널 구축 및 본격 런칭",
            "ERP 시스템 도입으로 운영 효율화",
            "스테이지 파트너십 체결 · 통역 · 픽업 · 컨시어지 · 숙소 원스톱 제공",
          ],
        },
      ],
    },
    awards: {
      title: "수상 및 파트너십 인증",
      subtitle: "국내 최상급 의료기관이 선택한 파트너, UB MEDI의 신뢰는 증서로 증명됩니다.",
      cards: [
        {
          images: [{ src: "/awards/snuh-award-2022.png", alt: "2022 Seoul National University Hospital award" }],
          year: "2019",
          title: "서울대학교병원",
          subtitle: "우수 유치업체 대상 수상",
        },
        {
          images: [
            { src: "/awards/amc-award-2019.jpg", alt: "2019 Asan Medical Center excellence certificate" },
            { src: "/awards/amc-award-2025.jpg", alt: "2025 Asan Medical Center excellence certificate" },
            { src: "/awards/amc-award-2026.jpg", alt: "2026 Asan Medical Center excellence certificate" },
          ],
          year: "2019 · 2025 · 2026",
          title: "서울아산병원",
          subtitle: "우수 파트너사 3회 선정",
        },
      ],
      partnerGroup: {
        logos: [
          { label: "서울아산병원", logo: "/파트너사로고/서울아산병원.svg" },
          { label: "세브란스병원", logo: "/파트너사로고/세브란스병원.svg" },
          { label: "삼성서울병원", logo: "/파트너사로고/삼성서울병원.svg" },
          { label: "고려대학교의료원", logo: "/파트너사로고/고려대학교의료원.svg" },
          { label: "서울대학교병원", logo: "/파트너사로고/서울대학교병원.svg" },
          { label: "성모병원", logo: "/파트너사로고/성모병원.svg" },
        ],
        year: "2025",
        title: "6대 종합병원",
        subtitle: "외국인 환자 유치 협약 체결",
      },
    },
    hero: {
      badge: "PREMIUM MEDICAL CONCIERGE",
      titleTop: "한 번의 선택으로 완성되는",
      titleAccent: "프리미엄 맞춤 메디컬 투어",
      descriptionLine1: "글로벌 최고 수준의 의료진과 1:1 전담 컨시어지가",
      descriptionLine2: "입국부터 귀국까지 당신만을 위한 여정을 설계합니다.",
      cta: "무료상담 신청하기",
      partnerTitle: "협력 메디컬 투어 파트너",
    },
    partners: [
      { label: "세브란스병원", logo: "/파트너사로고/세브란스병원.svg" },
      { label: "서울아산병원", logo: "/파트너사로고/서울아산병원.svg" },
      { label: "성모병원", logo: "/파트너사로고/성모병원.svg" },
      { label: "삼성서울병원", logo: "/파트너사로고/삼성서울병원.svg" },
      { label: "고려대학교의료원", logo: "/파트너사로고/고려대학교의료원.svg" },
      { label: "서울대학교병원", logo: "/파트너사로고/서울대학교병원.svg" },
      { label: "일산병원", logo: "/파트너사로고/일산병원.svg" },
    ],
    specialty: {
      titlePrefix: "증상부터 시술까지",
      titleAccent: "목적에 맞는 의료",
      titleSuffix: "를 바로 연결합니다",
      description: "최고의 의료진과 검증된 제휴병원으로 당신의 치료 여정을 함께합니다.",
      searchPlaceholder: "예) 라식, 허리통증, 충치, 성형 등",
      selectTitle: "진료과 안내",
      prev: "이전",
      next: "다음",
      items: [
        {
          image: "/specialty-surgery.jpg",
          title: "중증 치료 · 수술",
          summary: "글로벌 최고 수준의 의료진과 최신 장비로 암, 심장, 뇌신경, 척추 등 중증 질환 치료부터 수술까지 책임집니다.",
          tags: ["종양", "심장혈관", "뇌신경", "척추관절"],
        },
        {
          image: "/건강검진.jpg",
          title: "건강검진",
          summary: "기본 검진부터 프리미엄 종합검진, 암 검진, 여성 검진 등 목적에 맞게 제공합니다.",
          tags: ["기본", "종합", "특화"],
        },
        {
          image: "/피부과.jpg",
          title: "성형외과",
          summary: "눈, 코 윤곽 성형부터 지방이식, 가슴 성형까지 한국 최고 수준의 성형 의료를 연결합니다.",
          tags: ["눈 성형", "코 성형", "윤곽"],
        },
        {
          image: "/specialty-ophthalmology.jpg",
          title: "안과",
          summary: "라식·라섹부터 백내장, 녹내장, 망막 질환까지 정밀 검사와 맞춤 치료를 제공합니다.",
          tags: ["라식라섹", "백내장", "녹내장"],
        },
        {
          image: "/정형외과.jpg",
          title: "정형외과",
          summary: "관절, 척추, 스포츠 손상, 재활 치료까지 움직임 회복에 필요한 정형외과 진료를 연결합니다.",
          tags: ["무릎", "허리", "재활"],
        },
        {
          image: "/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png",
          title: "치과",
          summary: "충치 치료부터 투명교정, 임플란트, 라미네이트까지 구강 건강을 종합적으로 케어합니다.",
          tags: ["임플란트", "교정", "심미"],
        },
      ],
    },
    comparison: {
      line1: "20개 이상의 전문 진료과와 100여 가지 의료 시술을",
      line2: "UB MEDI를 통해 경험할 수 있습니다.",
      ubMediTitle: "UB MEDI",
      genericTitle: "일반 플랫폼",
      ubMediItems: ["공항 픽업·이동", "의료 전문 통역", "숙박·관광 연계", "사후 관리", "24시간 코디네이터"],
      genericItems: ["개인 이동", "일반적인 통역", "의료 연계만 제공", "사후 관리 없음", "영업시간 내 한정"],
    },
    process: {
      titleTop: "입국 전부터 귀국 후까지",
      titleAccent: "프리미엄 메디컬 투어",
      description: "전 세계 고객들이 경험한 UB MEDI의 프리미엄 의료 여정",
      badge: "입국 전 플래닝부터 귀국 후 사후 케어까지, 5단계 완전 관리 서비스",
      items: [
        {
          icon: "/step/STEP1.svg",
          step: "STEP01",
          title: "1:1 맞춤형 의료 컨설팅",
          text: "전담 코디네이터가 24시간 밀착 케어로 고객 맞춤형 의료 여정을 설계합니다.",
        },
        {
          icon: "/step/STEP2.svg",
          step: "STEP02",
          title: "의료투어 예약",
          text: "국내 최고 대학병원 예약부터 비자, 숙박, 항공까지 원스톱으로 해결합니다.",
        },
        {
          icon: "/step/STEP3.svg",
          step: "STEP03",
          title: "입국 & 프리미엄 의전",
          text: "공항 픽업부터 병원까지, 전담 코디네이터가 1:1로 밀착 동행합니다.",
        },
        {
          icon: "/step/STEP4.svg",
          step: "STEP04",
          title: "프리미엄 회복 및 웰니스",
          text: "최고급 휴니스 프로그램과 맞춤형 단독 관리를 위한 프리미엄 솔루션이 제공됩니다.",
        },
        {
          icon: "/step/STEP5.svg",
          step: "STEP05",
          title: "귀국 & 사후 관리",
          text: "귀국하시는 길까지 세심하게 동행하고, 이후 건강 상태를 체크하며 필요한 상담을 이어갑니다.",
        },
      ],
    },
    benefits: {
      titleLine1: "이 모든 여정을 가능하게 하는",
      titleAccent: "UB MEDI만의 차별점",
      summaryLine1: "공항 픽업 · 병원 이동 · 전문 통역 · 회복 숙박 · 사후 관리까지",
      summaryLine2: "외국인 환자가 한국에서 겪는 모든 불편을 단 하나의 플랫폼에서 해결합니다.",
      items: [
        {
          icon: "/SVG/아트보드 6.svg",
          title: "의료 전문 통역 동행",
          text: "일반 통역이 아닌 의료 용어에 특화된 전담 통역사가 진료 현장에 직접 동행합니다.",
        },
        {
          icon: "/SVG/아트보드 7.svg",
          title: "외국인 진료 경험 병원 제휴",
          text: "외국인 환자 진료 경험이 풍부하고 국제 의료 기준을 충족한 병원만 엄선해 연결합니다.",
        },
        {
          icon: "/SVG/아트보드 5.svg",
          title: "전담 코디네이터 24시간 밀착",
          text: "입국 전 상담부터 귀국 후 사후 관리까지 동일한 코디네이터가 고객을 끝까지 책임집니다.",
        },
        {
          icon: "/SVG/아트보드 4.svg",
          title: "맞춤 숙박 & 한국 관광",
          text: "회복 기간을 고려한 숙박을 연계하고, 일정에 맞는 관광 프로그램까지 함께 제안합니다.",
        },
      ],
    },
    reviews: {
      titlePrefix: "실제 고객의",
      titleAccent: "메디컬 투어 후기",
      description: "47개국 고객들이 직접 전하는 솔직한 경험",
      items: [
        {
          image: "/고객 후기 프로필/beautiful-cheerful-woman-sitting-by-white-wall.jpg",
          name: "Zhang Wei",
          country: "중국",
          text: "입국 전 상담부터 병원 예약까지 빠르게 정리돼 처음 한국 의료투어를 진행하는데 큰 도움이 됐습니다.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-smiley-man-posing-outdoors.jpg",
          name: "Sato Sakura",
          country: "일본",
          text: "상담부터 병원 매칭, 회복 관리까지 흐름이 자연스러워 프리미엄 서비스를 받는 느낌이 강했습니다.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-asian-girl-city.jpg",
          name: "Mohammed Al-Farsi",
          country: "UAE",
          text: "의료 통역과 공항 픽업이 정확하게 연결돼 진료 일정이 전혀 흔들리지 않았습니다.",
        },
        {
          image: "/고객 후기 프로필/smiling-elderly-woman-city.jpg",
          name: "Elena Petrov",
          country: "러시아",
          text: "회복 기간 동안 숙소와 병원 이동 관리가 세심해서 가족 모두 편안하게 일정을 소화했습니다.",
        },
        {
          image: "/고객 후기 프로필/young-man-middle-eastern-young-man-traditional-clothing.jpg",
          name: "Sarah Johnson",
          country: "미국",
          text: "짧은 체류 일정이었는데도 필요한 검진과 시술을 효율적으로 받을 수 있도록 세팅해줬습니다.",
        },
        {
          image: "/고객 후기 프로필/beautiful-cheerful-woman-sitting-by-white-wall.jpg",
          name: "Amina Yusuf",
          country: "나이지리아",
          text: "사후 관리까지 포함된 시스템이라 귀국 후에도 경과를 꾸준히 확인받을 수 있었습니다.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-smiley-man-posing-outdoors.jpg",
          name: "Lucas Martin",
          country: "프랑스",
          text: "병원 선택 기준과 담당 의료진 설명이 명확해서 의사결정이 매우 빨라졌습니다.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-asian-girl-city.jpg",
          name: "Nguyen Linh",
          country: "베트남",
          text: "도착부터 귀국까지 하나의 채널로 소통되니 여행과 치료를 동시에 준비해도 부담이 적었습니다.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "자주 묻는 질문",
      items: [
        {
          question: "UB MEDI는 어떤 서비스를 제공하나요?",
          answer:
            "UB MEDI는 외국인 환자를 위한 의료관광 토탈 케어 서비스를 제공합니다. 입국 전 온라인 상담부터 병원 예약, 공항 픽업, 전담 통역, 프리미엄 숙소 연결, 귀국 후 사후 관리까지 전 과정을 함께합니다. 별도의 준비 없이 UB MEDI 하나로 한국 의료 여정을 완성할 수 있습니다.",
        },
        {
          question: "서비스 이용 가능 국가가 어디인가요?",
          answer:
            "현재 몽골과 중국을 중심으로 서비스를 운영하고 있으며, 순차적으로 서비스 국가를 확대할 예정입니다. 해당 국가 외 거주자도 상담은 가능하오니 문의 주시기 바랍니다.",
        },
        {
          question: "주요 진료 및 서비스 분야는 무엇인가요?",
          answer:
            "중증 치료·수술(암, 심장, 뇌·신경, 척추), 건강검진(일반·종합·특화), 성형외과(눈·코·윤곽·지방흡입), 안과(라식·라섹·백내장·망막) 등을 주요 분야로 다루고 있습니다. 서울아산병원·세브란스병원·삼성서울병원 등 국내 6대 대형병원 및 강남 주요 전문 클리닉과 공식 제휴를 맺고 있습니다.",
        },
        {
          question: "예약 및 전체 일정 소요 기간이 궁금합니다.",
          answer:
            "상담 신청 후 보통 1~3일 이내 담당 코디네이터가 연락드립니다. 진료과 및 병원에 따라 다르나, 일반적으로 상담 신청부터 방한 일정 확정까지 약 1~2주 소요됩니다. 긴급 진료가 필요한 경우 신속 배정이 가능하오니 별도 문의 주시기 바랍니다.",
        },
        {
          question: "의료 서비스 이용 비용은 어떻게 되나요?",
          answer: "서비스 비용은 진료 분야, 병원, 체류 일정에 따라 달라집니다. 상담 신청 후 담당 코디네이터가 개인 상황에 맞는 맞춤 견적을 안내해드립니다.",
        },
        {
          question: "통역 서비스는 어떻게 제공되나요?",
          answer:
            "전담 통역사가 진료 상담부터 수술 동의, 검사 결과 설명까지 전 과정에 동행합니다. 몽골어·중국어 전문 통역사가 배정되며, 의료 전문 용어까지 정확하게 전달합니다.",
        },
        {
          question: "숙소 및 픽업 서비스는 어떻게 운영되나요?",
          answer:
            "공항 도착 시 전담 직원이 픽업하여 숙소까지 안내합니다. 숙소는 병원 접근성과 편의를 고려한 프리미엄 호텔 및 레지던스를 연결해드리며, 체류 기간 동안 이동이 필요한 경우에도 차량 지원이 가능합니다.",
        },
        {
          question: "체류 중 긴급 상황 발생 시 어떻게 대응하나요?",
          answer:
            "전담 코디네이터가 체류 기간 동안 신속하게 대응합니다. 갑작스러운 증상 악화, 추가 진료 필요, 일정 변경 등 다양한 상황에 맞춰 지원하며, 필요 시 응급 병원 연결 및 동행 서비스를 제공합니다.",
        },
        {
          question: "귀국 후 사후 관리는 어떻게 이루어지나요?",
          answer:
            "귀국 후에도 담당 코디네이터를 통해 지속적인 사후 관리를 받으실 수 있습니다. 경과 확인, 추가 진료 필요 여부 안내, 재방한 일정 조율까지 본국에서도 불편함 없이 관리받으실 수 있도록 지원합니다.",
        },
      ],
    },
    contact: {
      titleLine1: "한국에서의 프리미엄 의료 여정",
      titleLine2: "지금 시작하세요",
      introLine1: "신청서를 작성해주시면 24시간 이내에 전담 코디네이터가",
      introLine2: "품격 있는 맞춤형 의료 컨설팅을 제공합니다.",
      points: [
        "무료 맞춤형 의료 플랜 컨설팅",
        "전담 의료 전문 코디네이터 1:1 배정",
        "안심할 수 있는 완벽한 정보 보안, 사후 케어까지",
      ],
      formTitle: "상담 신청서 작성",
      formNote: "작성 후 24시간 이내 전담 코디네이터가 연락드립니다.",
      nameLabel: "성함",
      namePlaceholder: "이름을 입력해주세요",
      nationLabel: "국적",
      nationPlaceholder: "거주 국가를 입력해주세요",
      emailLabel: "이메일 (Email)",
      emailPlaceholder: "이메일 주소를 입력해주세요",
      messengerLabel: "메신저 (WhatsApp/WeChat/Line 등)",
      messengerPlaceholder: "메신저 종류와 ID를 입력해주세요",
      interestLabel: "관심 분야",
      interestPlaceholder: "희망하시는 의료 분야를 선택해주세요",
      visitLabel: "희망 방문 시기",
      visitYear: ["2026년", "2027년"],
      visitMonth: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      visitDay: ["1일", "5일", "10일", "15일", "20일", "25일"],
      inquiryLabel: "추가 문의 사항",
      inquiryPlaceholder: "궁금한 점이나 특별한 요청사항을 자유롭게 작성해주세요",
      submit: "지금 바로 무료 상담 신청 →",
    },
    footer: {
      tagline: "You, Better Medical",
      quote: '"당신을 위한, 더 나은 의료 경험"',
      contactTitle: "Contact Us",
      contactPrimary: ["연중무휴 24시간 상담", "온라인 상담 가능", "전화: +82-10-8811-9761", "info@ubmedi.com"],
      contactMeta: [
        "주소: 서울특별시 금천구 가산동 319-8 에이스한솔타워 11층 1107호",
        "상호: 주식회사 유비메디 (UBMEDI CO., LTD)",
        "사업자 등록번호: 466-87-00555",
      ],
      businessTitle: "서비스 및 지원",
      businessLinks: ["소개", "치료 분야", "이용 안내", "이용 후기", "고객센터"],
      newsletterTitle: "Subscribe & Newsletter",
      newsletterPlaceholder: "Email address",
      newsletterButton: "Submit Now",
      socialLinks: [
        { label: "Facebook", href: "https://m.me/1166142713249729", icon: "/footer/facebook.svg" },
        { label: "Instagram", href: "https://www.instagram.com/ubmedi/", icon: "/footer/instagram.svg" },
        { label: "Phone", href: "tel:+821088119761", icon: "/footer/phone.svg" },
      ],
      copyright: "COPYRIGHT © 2014 UB MED INC. ALL RIGHTS RESERVED.",
    },
  },
  en: {
    localeLabel: "ENG",
    nav: {
      intro: "About",
      specialties: "Treatments",
      guide: "Guide",
      reviews: "Reviews",
      support: "Support",
    },
    header: {
      available: "24/7 Consultation",
      whatsapp: "WhatsApp",
    },
    introSection: {
      tagline: "You, Better Medical UB MEDI",
      titleLine1: "For You,",
      titleLine2: "A Better Premium Medical Companion",
      descriptionLine1: "UB MEDI is a one-stop Korean medical tourism platform for international patients,",
      descriptionLine2: "integrating complex medical schedules into one accountable operation.",
      features: [
        { number: "01", title: "Medical Service", text: "Verified hospitals and specialists connected through consultation" },
        { number: "02", title: "Dedicated Interpreter", text: "1:1 interpreter support accompanying the entire journey" },
        { number: "03", title: "Pickup Service", text: "Private transportation from airport to hospital and accommodation" },
        { number: "04", title: "Premium Stay", text: "Recovery-optimized premium accommodations" },
        { number: "05", title: "Concierge", text: "VIP concierge from reservation to return home" },
      ],
    },
    timeline: {
      title: "Leadership Journey and the Growth of UB MEDI",
      subtitle: "Experience builds trust, and trust builds long-term care",
      items: [
        { period: "Jul 2005", lines: ["Joined LG Group construction division through open recruitment (CEO)"] },
        { period: "2006 - 2008", lines: ["Worked on the Pyeongchang Alpensia development for the Winter Olympics (finance leadership)"] },
        { period: "2010 - 2011", lines: ["Worked on the Abu Dhabi UAE project (finance leadership)"] },
        { period: "2011 - 2013", lines: ["Worked in Bangladesh as Branch Manager"] },
        { period: "2013 - 2016", lines: ["Worked in Turkey as Financial Manager"] },
        { period: "Nov 2016", lines: ["Received Minister of Land award", "Recognized for tax reduction contribution for Korean companies in Turkey"] },
        { period: "2017", lines: ["Founded UB MEDI, specializing in attracting international patients", "Worked in UAE as Business Manager"] },
        { period: "2019", lines: ["Signed partnership with NHIS Ilsan Hospital", "Selected as an excellent partner by Asan Medical Center", "Received Seoul National University Hospital attraction award"] },
        { period: "2022", lines: ["Launched Hotel Grace brand development and entrusted operations"] },
        { period: "2024", lines: ["Founded STAY-G", "Entrusted Seattle Hotel near Incheon Airport", "Successfully sold after entrusted operation", "Entrusted Cheongpyeong Onestay Hotel"] },
        { period: "2025", lines: ["Selected again as excellent Asan Medical Center partner", "Registered as official partner with six major hospitals", "Expanded Gangnam plastic surgery and dermatology partner network"] },
        { period: "2026", lines: ["Three-time cumulative excellent partner selection", "CEO Lee Si-hyung appointed to lead integrated medical tourism care", "Expanded Mongolia and China marketing channels", "Introduced ERP for operational efficiency", "Completed one-stop partnership for interpretation, pickup, concierge, and stays"] },
      ],
    },
    awards: {
      title: "Awards and Partnership Credentials",
      subtitle: "UB MEDI’s reliability is validated by leading Korean medical institutions.",
      cards: [
        {
          images: [{ src: "/awards/snuh-award-2022.png", alt: "Seoul National University Hospital award" }],
          year: "2019",
          title: "Seoul National University Hospital",
          subtitle: "Outstanding Patient Attraction Award",
        },
        {
          images: [
            { src: "/awards/amc-award-2019.jpg", alt: "2019 Asan Medical Center excellence certificate" },
            { src: "/awards/amc-award-2025.jpg", alt: "2025 Asan Medical Center excellence certificate" },
            { src: "/awards/amc-award-2026.jpg", alt: "2026 Asan Medical Center excellence certificate" },
          ],
          year: "2019 · 2025 · 2026",
          title: "Asan Medical Center",
          subtitle: "Selected as an Excellent Partner 3 Times",
        },
      ],
      partnerGroup: {
        logos: [
          { label: "Asan Medical Center", logo: "/파트너사로고/서울아산병원.svg" },
          { label: "Severance Hospital", logo: "/파트너사로고/세브란스병원.svg" },
          { label: "Samsung Medical Center", logo: "/파트너사로고/삼성서울병원.svg" },
          { label: "Korea University Medicine", logo: "/파트너사로고/고려대학교의료원.svg" },
          { label: "Seoul National University Hospital", logo: "/파트너사로고/서울대학교병원.svg" },
          { label: "The Catholic University of Korea St. Mary's Hospital", logo: "/파트너사로고/성모병원.svg" },
        ],
        year: "2025",
        title: "Six Major General Hospitals",
        subtitle: "Foreign Patient Attraction Partnership Agreements",
      },
    },
    hero: {
      badge: "PREMIUM MEDICAL CONCIERGE",
      titleTop: "One Decision Completes Your",
      titleAccent: "Premium Tailored Medical Tour",
      descriptionLine1: "World-class specialists and a dedicated 1:1 concierge",
      descriptionLine2: "design your journey from arrival to return.",
      cta: "Apply for Free Consultation",
      partnerTitle: "Medical Tour Partners",
    },
    partners: [
      { label: "Severance Hospital", logo: "/파트너사로고/세브란스병원.svg" },
      { label: "Seoul Asan Hospital", logo: "/파트너사로고/서울아산병원.svg" },
      { label: "St. Mary's Hospital", logo: "/파트너사로고/성모병원.svg" },
      { label: "Samsung Medical Center", logo: "/파트너사로고/삼성서울병원.svg" },
      { label: "Korea University Medical Center", logo: "/파트너사로고/고려대학교의료원.svg" },
      { label: "Seoul National University Hospital", logo: "/파트너사로고/서울대학교병원.svg" },
      { label: "Ilsan Hospital", logo: "/파트너사로고/일산병원.svg" },
    ],
    specialty: {
      titlePrefix: "From Symptoms to Procedures,",
      titleAccent: "We Connect the Right Care",
      titleSuffix: "for Your Goal",
      description: "Top medical teams and verified partner hospitals guide your treatment journey.",
      searchPlaceholder: "e.g. LASIK, back pain, cavity, plastic surgery",
      selectTitle: "Treatment Guide",
      prev: "Previous",
      next: "Next",
      items: [
        {
          image: "/specialty-surgery.jpg",
          title: "Major Treatment & Surgery",
          summary: "From cancer, heart, neurology, and spinal care to advanced surgeries, we connect world-class treatment teams.",
          tags: ["Oncology", "Cardio", "Neuro", "Spine"],
        },
        {
          image: "/건강검진.jpg",
          title: "Health Screening",
          summary: "From basic checks to premium exams, cancer screening, and women’s care, we match the right program.",
          tags: ["Basic", "Premium", "Specialty"],
        },
        {
          image: "/피부과.jpg",
          title: "Plastic Surgery",
          summary: "From eyes and nose to contouring, fat grafting, and breast procedures, we connect leading Korean surgeons.",
          tags: ["Eyes", "Nose", "Contour"],
        },
        {
          image: "/specialty-ophthalmology.jpg",
          title: "Ophthalmology",
          summary: "From LASIK and LASEK to cataracts, glaucoma, and retinal care, we provide precise diagnostics and tailored treatment.",
          tags: ["LASIK", "Cataract", "Glaucoma"],
        },
        {
          image: "/정형외과.jpg",
          title: "Orthopedics",
          summary: "We connect orthopedic care for joints, spine, sports injuries, and rehabilitation focused on movement recovery.",
          tags: ["Knee", "Spine", "Rehab"],
        },
        {
          image: "/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png",
          title: "Dentistry",
          summary: "From cavity care to clear aligners, implants, and laminates, we support comprehensive oral treatment.",
          tags: ["Implants", "Aligners", "Cosmetic"],
        },
      ],
    },
    comparison: {
      line1: "More than 20 specialty departments and over 100 medical procedures",
      line2: "can be experienced through UB MEDI.",
      ubMediTitle: "UB MEDI",
      genericTitle: "General Platform",
      ubMediItems: ["Airport Pickup & Transfer", "Medical Interpreter", "Hotel & Tour Link", "Aftercare", "24/7 Coordinator"],
      genericItems: ["Individual Transfer", "General Interpreter", "Hospital Link Only", "No Aftercare", "Business Hours Only"],
    },
    process: {
      titleTop: "From Arrival to Return",
      titleAccent: "Premium Medical Tour",
      description: "The premium medical journey experienced by clients from around the world",
      badge: "A complete 5-step management service from pre-arrival planning to post-return aftercare",
      items: [
        {
          icon: "/step/STEP1.svg",
          step: "STEP01",
          title: "1:1 Tailored Medical Consulting",
          text: "A dedicated coordinator designs a personalized medical journey with 24-hour close support.",
        },
        {
          icon: "/step/STEP2.svg",
          step: "STEP02",
          title: "Medical Tour Reservation",
          text: "From top university hospital booking to visa, accommodation, and flights, everything is arranged in one flow.",
        },
        {
          icon: "/step/STEP3.svg",
          step: "STEP03",
          title: "Arrival & Premium Escort",
          text: "From airport pickup to hospital visits, your dedicated coordinator accompanies you closely.",
        },
        {
          icon: "/step/STEP4.svg",
          step: "STEP04",
          title: "Premium Recovery & Wellness",
          text: "Exclusive wellness programs and private recovery solutions are provided for your healing phase.",
        },
        {
          icon: "/step/STEP5.svg",
          step: "STEP05",
          title: "Return & Aftercare",
          text: "We accompany you through departure and continue checking your condition afterward with follow-up support.",
        },
      ],
    },
    benefits: {
      titleLine1: "What Makes",
      titleAccent: "UB MEDI Different",
      summaryLine1: "Airport pickup, hospital transfers, medical interpretation, recovery stays, and aftercare",
      summaryLine2: "solve every inconvenience an international patient may face in Korea through one platform.",
      items: [
        {
          icon: "/SVG/아트보드 6.svg",
          title: "Medical Interpreters On Site",
          text: "Not just general interpreters. Dedicated medical interpreters join you directly at the point of care.",
        },
        {
          icon: "/SVG/아트보드 7.svg",
          title: "Hospitals Experienced with Foreign Patients",
          text: "We connect only with hospitals that have strong international patient experience and global care standards.",
        },
        {
          icon: "/SVG/아트보드 5.svg",
          title: "24/7 Dedicated Coordinator",
          text: "The same coordinator stays with you from the first consultation through aftercare after you return home.",
        },
        {
          icon: "/SVG/아트보드 4.svg",
          title: "Tailored Stay & Korea Tour",
          text: "We recommend accommodation based on recovery needs and propose suitable local tour options as well.",
        },
      ],
    },
    reviews: {
      titlePrefix: "Real Client",
      titleAccent: "Medical Tour Reviews",
      description: "Honest experiences shared directly by clients from 47 countries",
      items: [
        {
          image: "/고객 후기 프로필/beautiful-cheerful-woman-sitting-by-white-wall.jpg",
          name: "Zhang Wei",
          country: "China",
          text: "From pre-arrival consultation to hospital booking, everything was handled quickly and made my first medical trip to Korea easy.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-smiley-man-posing-outdoors.jpg",
          name: "Sato Sakura",
          country: "Japan",
          text: "The whole flow from consultation to hospital matching and recovery care felt truly premium and seamless.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-asian-girl-city.jpg",
          name: "Mohammed Al-Farsi",
          country: "UAE",
          text: "Medical interpretation and airport pickup were perfectly connected, so none of my treatment schedule was disrupted.",
        },
        {
          image: "/고객 후기 프로필/smiling-elderly-woman-city.jpg",
          name: "Elena Petrov",
          country: "Russia",
          text: "Accommodation and hospital transportation during recovery were arranged so carefully that my family felt comfortable too.",
        },
        {
          image: "/고객 후기 프로필/young-man-middle-eastern-young-man-traditional-clothing.jpg",
          name: "Sarah Johnson",
          country: "USA",
          text: "Even with a short stay, they arranged everything so I could complete my check-up and procedure efficiently.",
        },
        {
          image: "/고객 후기 프로필/beautiful-cheerful-woman-sitting-by-white-wall.jpg",
          name: "Amina Yusuf",
          country: "Nigeria",
          text: "Because aftercare was included, I was able to continue checking my progress even after returning home.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-smiley-man-posing-outdoors.jpg",
          name: "Lucas Martin",
          country: "France",
          text: "The criteria for hospital selection and the explanation of the attending doctor made decision-making much faster.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-asian-girl-city.jpg",
          name: "Nguyen Linh",
          country: "Vietnam",
          text: "Having one communication channel from arrival to return made it much easier to prepare both travel and treatment.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Frequently Asked Questions",
      items: [
        {
          question: "What services does UB MEDI provide?",
          answer:
            "UB MEDI provides total medical tourism care for international patients. From online consultation before arrival to hospital booking, airport pickup, dedicated medical interpretation, premium accommodation coordination, and aftercare after returning home, we support the entire journey. You can complete your Korean medical journey through UB MEDI without preparing each step separately.",
        },
        {
          question: "Which countries can use the service?",
          answer:
            "We are currently operating mainly for clients from Mongolia and China, and we plan to expand to more countries in sequence. If you live in another country, consultation is still available, so please feel free to contact us.",
        },
        {
          question: "What are the main treatment and procedure categories?",
          answer:
            "Our key fields include major treatment and surgery such as oncology, cardiology, neurology, and spine care; health screening programs from general to premium and specialty exams; plastic surgery including eyes, nose, contouring, and liposuction; and ophthalmology including LASIK, LASEK, cataracts, and retinal care. We officially partner with six major Korean hospitals including Asan Medical Center, Severance Hospital, and Samsung Medical Center, as well as key specialist clinics in Gangnam.",
        },
        {
          question: "How long does reservation and the overall schedule usually take?",
          answer:
            "In most cases, your assigned coordinator contacts you within 1 to 3 days after you submit an inquiry. Depending on the department and hospital, it usually takes about 1 to 2 weeks from consultation request to confirmation of your Korea visit schedule. If urgent treatment is needed, fast-track coordination can also be arranged upon request.",
        },
        {
          question: "How much does the medical service cost?",
          answer: "The cost varies depending on the treatment field, hospital, and length of stay. After you apply for consultation, your dedicated coordinator will provide a customized estimate based on your situation.",
        },
        {
          question: "How is the interpretation service provided?",
          answer:
            "A dedicated interpreter accompanies you throughout the entire process, from medical consultation and surgical consent to explanation of test results. Mongolian and Chinese medical interpreters are assigned, and they accurately communicate even specialized medical terminology.",
        },
        {
          question: "How are accommodation and pickup services operated?",
          answer:
            "When you arrive at the airport, a dedicated staff member picks you up and guides you to your accommodation. We connect you with premium hotels and residences selected for hospital access and convenience, and vehicle support can also be provided when transportation is needed during your stay.",
        },
        {
          question: "How do you respond if an emergency occurs during the stay?",
          answer:
            "Your dedicated coordinator responds quickly throughout your stay. We support a wide range of situations such as sudden worsening of symptoms, additional treatment needs, or schedule changes, and if necessary we provide emergency hospital linkage and accompaniment.",
        },
        {
          question: "How is aftercare provided after returning home?",
          answer:
            "Even after you return home, you can continue receiving follow-up care through your dedicated coordinator. We support progress checks, guidance on whether additional treatment is needed, and coordination for future visits so that you can continue managing your care comfortably from your home country.",
        },
      ],
    },
    contact: {
      titleLine1: "Start Your Premium Medical Journey",
      titleLine2: "in Korea Today",
      introLine1: "Once you submit the form, a dedicated coordinator will respond within 24 hours",
      introLine2: "with a refined and personalized medical consultation.",
      points: [
        "Free personalized medical plan consulting",
        "Dedicated 1:1 medical coordinator assignment",
        "Reliable information security and aftercare support",
      ],
      formTitle: "Consultation Request Form",
      formNote: "A dedicated coordinator will contact you within 24 hours after submission.",
      nameLabel: "Full Name",
      namePlaceholder: "Please enter your name",
      nationLabel: "Nationality",
      nationPlaceholder: "Please enter your country of residence",
      emailLabel: "Email",
      emailPlaceholder: "Please enter your email address",
      messengerLabel: "Messenger (WhatsApp/WeChat/Line etc.)",
      messengerPlaceholder: "Please enter your messenger type and ID",
      interestLabel: "Field of Interest",
      interestPlaceholder: "Please select your desired medical field",
      visitLabel: "Preferred Visit Date",
      visitYear: ["2026", "2027"],
      visitMonth: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      visitDay: ["1", "5", "10", "15", "20", "25"],
      inquiryLabel: "Additional Inquiry",
      inquiryPlaceholder: "Please write any questions or special requests freely",
      submit: "Apply for Free Consultation Now →",
    },
    footer: {
      tagline: "You, Better Medical",
      quote: '"A better medical experience made for you"',
      contactTitle: "Contact Us",
      contactPrimary: ["24/7 year-round consultation", "Online consultation available", "Tel: +82-10-8811-9761", "info@ubmedi.com"],
      contactMeta: [
        "Address: 11F 1107, Ace Hansol Tower, 319-8 Gasan-dong, Geumcheon-gu, Seoul",
        "Company: UBMEDI CO., LTD",
        "Business Registration No.: 466-87-00555",
      ],
      businessTitle: "Services & Support",
      businessLinks: ["About", "Treatments", "Guide", "Reviews", "Support"],
      newsletterTitle: "Subscribe & Newsletter",
      newsletterPlaceholder: "Email address",
      newsletterButton: "Submit Now",
      socialLinks: [
        { label: "Facebook", href: "https://m.me/1166142713249729", icon: "/footer/facebook.svg" },
        { label: "Instagram", href: "https://www.instagram.com/ubmedi/", icon: "/footer/instagram.svg" },
        { label: "Phone", href: "tel:+821088119761", icon: "/footer/phone.svg" },
      ],
      copyright: "COPYRIGHT © 2014 UB MED INC. ALL RIGHTS RESERVED.",
    },
  },
  mn: {
    localeLabel: "MNG",
    nav: {
      intro: "Танилцуулга",
      specialties: "Эмчилгээ",
      guide: "Үйлчилгээ",
      reviews: "Сэтгэгдэл",
      support: "Тусламж",
    },
    header: {
      available: "24 цагийн зөвлөгөө",
      whatsapp: "WhatsApp",
    },
    introSection: {
      tagline: "You, Better Medical UB MEDI",
      titleLine1: "Таны төлөө,",
      titleLine2: "Илүү сайн премиум эмнэлгийн хамтрагч",
      descriptionLine1: "UB MEDI нь гадаад өвчтөнүүдэд зориулсан Солонгосын эмнэлгийн аяллын one-stop платформ бөгөөд",
      descriptionLine2: "олон шаттай эмчилгээний хуваарийг нэг хариуцсан системд нэгтгэдэг.",
      features: [
        { number: "01", title: "Эмнэлгийн үйлчилгээ", text: "Зөвлөгөөнд үндэслэн баталгаажсан эмнэлэг, эмчтэй холбох" },
        { number: "02", title: "Хувийн орчуулагч", text: "Бүх шатанд хамт явах 1:1 орчуулгын дэмжлэг" },
        { number: "03", title: "Угтах үйлчилгээ", text: "Нисэх буудлаас эмнэлэг, байр хүртэл тусгай унаа" },
        { number: "04", title: "Премиум байр", text: "Сэргээн засахад тохирсон премиум байр" },
        { number: "05", title: "Консьерж", text: "Захиалгаас эхлээд эх орондоо буцах хүртэл VIP үйлчилгээ" },
      ],
    },
    timeline: {
      title: "Төлөөлөгчийн замнал ба UB MEDI-ийн өсөлт",
      subtitle: "Туршлага итгэлийг бий болгож, итгэл хамтын аяллыг бүтээнэ",
      items: [
        { period: "2005 оны 07 сар", lines: ["LG группийн барилгын салбарт нээлттэй сонгон шалгаруулалтаар ажилд орсон"] },
        { period: "2006 - 2008", lines: ["Өвлийн олимпийн Alpensia төслийн санхүү, удирдлагын ажил"] },
        { period: "2010 - 2011", lines: ["UAE Абу Дабигийн төсөлд санхүүгийн чиглэлээр ажилласан"] },
        { period: "2011 - 2013", lines: ["Бангладеш дахь салбарын удирдлагын ажил"] },
        { period: "2013 - 2016", lines: ["Турк дэх Financial Manager үүрэг"] },
        { period: "2016 оны 11 сар", lines: ["Газрын яамны сайдын шагнал", "Турк дахь Солонгос компаниудын татварын үр ашгийг нэмэгдүүлсэн"] },
        { period: "2017", lines: ["Гадаад өвчтөн татах чиглэлийн UB MEDI-г байгуулсан", "UAE-д Business Manager үүрэг гүйцэтгэсэн"] },
        { period: "2019", lines: ["Үндэсний эрүүл мэндийн даатгалын Илсан эмнэлэгтэй түншлэл", "Сөүл Асан эмнэлгийн шилдэг түнш", "Сөүл Үндэсний Их Сургуулийн эмнэлгийн шагнал"] },
        { period: "2022", lines: ["Hotel Grace брэнд хөгжүүлэлт ба entrusted operation хэрэгжүүлсэн"] },
        { period: "2024", lines: ["STAY-G компанийг байгуулсан", "Инчоны нисэх буудлын Seattle Hotel entrusted operation", "Ашигтай борлуулалтын амжилт", "Cheongpyeong Onestay entrusted operation"] },
        { period: "2025", lines: ["Сөүл Асан эмнэлгийн шилдэг түншээр дахин шалгарсан", "6 том эмнэлгийн албан ёсны хамтын ажиллагаа", "Ганнамын мэс засал, арьсны эмнэлгийн түншлэл өргөжив"] },
        { period: "2026", lines: ["Шилдэг түншээр 3 дахь удаагаа шалгарсан", "Нэгдсэн эмнэлгийн аяллын асаргааг удирдах шинэ CEO томилогдсон", "Монгол, Хятадын маркетинг өргөжсөн", "ERP систем нэвтрүүлсэн", "Орчуулга, тосолт, консьерж, байрны нэг цэгийн үйлчилгээ бүрдсэн"] },
      ],
    },
    awards: {
      title: "Шагнал ба түншлэлийн баталгаа",
      subtitle: "Солонгосын тэргүүлэх эмнэлгүүдийн сонгосон түнш гэдгийг албан ёсоор нотолно.",
      cards: [
        {
          images: [{ src: "/awards/snuh-award-2022.png", alt: "Seoul National University Hospital award" }],
          year: "2019",
          title: "Сөүл Үндэсний Их Сургуулийн Эмнэлэг",
          subtitle: "Шилдэг өвчтөн таталтын шагнал",
        },
        {
          images: [
            { src: "/awards/amc-award-2019.jpg", alt: "2019 Asan Medical Center certificate" },
            { src: "/awards/amc-award-2025.jpg", alt: "2025 Asan Medical Center certificate" },
            { src: "/awards/amc-award-2026.jpg", alt: "2026 Asan Medical Center certificate" },
          ],
          year: "2019 · 2025 · 2026",
          title: "Сөүл Асан Эмнэлэг",
          subtitle: "Шилдэг түншээр 3 удаа шалгарсан",
        },
      ],
      partnerGroup: {
        logos: [
          { label: "Сөүл Асан Эмнэлэг", logo: "/파트너사로고/서울아산병원.svg" },
          { label: "Северанс Эмнэлэг", logo: "/파트너사로고/세브란스병원.svg" },
          { label: "Самсунг Сөүл Эмнэлэг", logo: "/파트너사로고/삼성서울병원.svg" },
          { label: "Кореа Их Сургуулийн Эмнэлэг", logo: "/파트너사로고/고려대학교의료원.svg" },
          { label: "Сөүлийн Үндэсний Их Сургуулийн Эмнэлэг", logo: "/파트너사로고/서울대학교병원.svg" },
          { label: "Католик Их Сургуулийн Гэгээн Марийн Эмнэлэг", logo: "/파트너사로고/성모병원.svg" },
        ],
        year: "2025",
        title: "6 том нэгдсэн эмнэлэг",
        subtitle: "Гадаад өвчтөн татах хамтын ажиллагааны гэрээ",
      },
    },
    hero: {
      badge: "PREMIUM MEDICAL CONCIERGE",
      titleTop: "Нэг сонголтоор бүрдэх",
      titleAccent: "Премиум захиалгат эмнэлгийн аялал",
      descriptionLine1: "Дэлхийн түвшний эмч нар болон 1:1 зориулсан консьерж",
      descriptionLine2: "ирэхээс буцах хүртэл таны бүх аяллыг төлөвлөнө.",
      cta: "Үнэгүй зөвлөгөө авах",
      partnerTitle: "Эмнэлгийн аяллын түншүүд",
    },
    partners: [
      { label: "Северанс эмнэлэг", logo: "/파트너사로고/세브란스병원.svg" },
      { label: "Сөүл Асан эмнэлэг", logo: "/파트너사로고/서울아산병원.svg" },
      { label: "Сонмо эмнэлэг", logo: "/파트너사로고/성모병원.svg" },
      { label: "Самсунг Сөүл эмнэлэг", logo: "/파트너사로고/삼성서울병원.svg" },
      { label: "Кореа их сургуулийн эмнэлэг", logo: "/파트너사로고/고려대학교의료원.svg" },
      { label: "Сөүл үндэсний их сургуулийн эмнэлэг", logo: "/파트너사로고/서울대학교병원.svg" },
      { label: "Илсан эмнэлэг", logo: "/파트너사로고/일산병원.svg" },
    ],
    specialty: {
      titlePrefix: "Шинж тэмдгээс мэс ажилбар хүртэл,",
      titleAccent: "зорилгод тохирсон эмчилгээг",
      titleSuffix: "шууд холбоно",
      description: "Шилдэг эмч, баталгаатай түнш эмнэлгүүд таны эмчилгээний аяллыг хамт удирдана.",
      searchPlaceholder: "ж: LASIK, нурууны өвдөлт, шүд цоорол, гоо сайхан",
      selectTitle: "Эмчилгээний чиглэл",
      prev: "Өмнөх",
      next: "Дараах",
      items: [
        {
          image: "/specialty-surgery.jpg",
          title: "Хүнд эмчилгээ · Мэс засал",
          summary: "Хавдар, зүрх, мэдрэл, нуруу зэрэг хүнд өвчний эмчилгээ, мэс заслыг дэлхийн түвшний багтай холбоно.",
          tags: ["Хавдар", "Зүрх", "Мэдрэл", "Нуруу"],
        },
        {
          image: "/건강검진.jpg",
          title: "Эрүүл мэндийн үзлэг",
          summary: "Энгийн үзлэгээс эхлээд премиум иж бүрэн шинжилгээ, хавдрын болон эмэгтэйчүүдийн үзлэгийг зорилгод тань тохируулна.",
          tags: ["Энгийн", "Премиум", "Тусгай"],
        },
        {
          image: "/피부과.jpg",
          title: "Гоо заслын мэс засал",
          summary: "Нүд, хамар, нүүрний хэлбэрээс эхлээд өөх шилжүүлэг, цээжний мэс засал хүртэл шилдэг эмч нартай холбоно.",
          tags: ["Нүд", "Хамар", "Хэлбэр"],
        },
        {
          image: "/specialty-ophthalmology.jpg",
          title: "Нүд",
          summary: "LASIK, LASEK-аас эхлээд болор, глауком, торлогийн оношилгоо, эмчилгээг нарийн төлөвлөнө.",
          tags: ["LASIK", "Болор", "Глауком"],
        },
        {
          image: "/정형외과.jpg",
          title: "Яс, үе",
          summary: "Үе мөч, нуруу, спортын гэмтэл, сэргээн засах эмчилгээг хөдөлгөөн сэргээх зорилгоор холбоно.",
          tags: ["Өвдөг", "Нуруу", "Сэргээн засах"],
        },
        {
          image: "/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png",
          title: "Шүд",
          summary: "Шүдний цоорол эмчлэхээс эхлээд ил тод шүд тэгшлэгч, имплант, гоо сайхны эмчилгээг иж бүрнээр дэмжинэ.",
          tags: ["Имплант", "Тэгшлэгч", "Гоо сайхан"],
        },
      ],
    },
    comparison: {
      line1: "20 гаруй мэргэжлийн тасаг, 100 гаруй эмчилгээ үйлчилгээ",
      line2: "UB MEDI-гаар дамжин хэрэгжих боломжтой.",
      ubMediTitle: "UB MEDI",
      genericTitle: "Ердийн платформ",
      ubMediItems: ["Онгоцны буудлын тосолт", "Эмнэлгийн орчуулагч", "Зочид буудал ба аялал", "Дараах хяналт", "24/7 зохицуулагч"],
      genericItems: ["Хувийн унаа", "Ердийн орчуулга", "Зөвхөн эмнэлэг холбох", "Дараах хяналтгүй", "Ажлын цагаар л"],
    },
    process: {
      titleTop: "Ирэхээс буцах хүртэл",
      titleAccent: "Премиум эмнэлгийн аялал",
      description: "Дэлхийн олон орны үйлчлүүлэгчдийн туршсан UB MEDI-ийн аялал",
      badge: "Ирэхээс өмнөх төлөвлөлтөөс буцсаны дараах хяналт хүртэлх 5 шатлалт бүрэн үйлчилгээ",
      items: [
        {
          icon: "/step/STEP1.svg",
          step: "STEP01",
          title: "1:1 хувийн зөвлөгөө",
          text: "Хариуцсан зохицуулагч 24 цагийн турш ойр дэмжлэг үзүүлж таны эмнэлгийн аяллыг төлөвлөнө.",
        },
        {
          icon: "/step/STEP2.svg",
          step: "STEP02",
          title: "Эмнэлгийн аяллын захиалга",
          text: "Их сургуулийн эмнэлгийн цаг, виз, байр, нислэгийг нэг урсгалаар шийднэ.",
        },
        {
          icon: "/step/STEP3.svg",
          step: "STEP03",
          title: "Ирэлт ба дээд зэрэглэлийн угталт",
          text: "Нисэх буудлын тосолтоос эхлээд эмнэлэг хүртэл зохицуулагч тань 1:1 дагалдана.",
        },
        {
          icon: "/step/STEP4.svg",
          step: "STEP04",
          title: "Сэргэлт ба wellness",
          text: "Таны нөхөн сэргээлтэд зориулсан тусгай wellness болон премиум шийдлүүдийг санал болгоно.",
        },
        {
          icon: "/step/STEP5.svg",
          step: "STEP05",
          title: "Буцах ба дараах хяналт",
          text: "Буцах хүртэл тань дагалдан, дараа нь биеийн байдлыг хянаж зөвлөгөөг үргэлжлүүлнэ.",
        },
      ],
    },
    benefits: {
      titleLine1: "Энэ бүх аяллыг боломжтой болгодог",
      titleAccent: "UB MEDI-ийн онцлог",
      summaryLine1: "Онгоцны буудлын тосолт, эмнэлэг хүргэх, мэргэжлийн орчуулга, сэргэлтийн байр, дараах хяналт",
      summaryLine2: "гадаад өвчтөн Солонгост тулгарч болох бүх хүндрэлээ нэг платформоор шийднэ.",
      items: [
        {
          icon: "/SVG/아트보드 6.svg",
          title: "Эмнэлгийн мэргэжлийн орчуулга",
          text: "Ердийн орчуулагч биш, эмнэлгийн нэр томьёонд мэргэшсэн орчуулагч таныг биечлэн дагалдана.",
        },
        {
          icon: "/SVG/아트보드 7.svg",
          title: "Гадаад өвчтөн хүлээж авч байсан эмнэлгүүд",
          text: "Олон улсын өвчтөнтэй ажиллаж байсан туршлагатай, шаардлага хангадаг эмнэлгүүдийг л сонгодог.",
        },
        {
          icon: "/SVG/아트보드 5.svg",
          title: "24 цагийн зохицуулагч",
          text: "Анхны зөвлөгөөнөөс эхлээд буцсаны дараах хяналт хүртэл нэг зохицуулагч тантай хамт байна.",
        },
        {
          icon: "/SVG/아트보드 4.svg",
          title: "Захиалгат байр ба аялал",
          text: "Сэргэлтийн хугацаанд тохирсон байр болон тохирох аяллын хөтөлбөрүүдийг санал болгоно.",
        },
      ],
    },
    reviews: {
      titlePrefix: "Бодит хэрэглэгчдийн",
      titleAccent: "эмнэлгийн аяллын сэтгэгдэл",
      description: "47 улсын үйлчлүүлэгчдийн шууд хуваалцсан үнэнч туршлага",
      items: [
        {
          image: "/고객 후기 프로필/beautiful-cheerful-woman-sitting-by-white-wall.jpg",
          name: "Zhang Wei",
          country: "Хятад",
          text: "Ирэхээс өмнөх зөвлөгөө болон эмнэлгийн цагийг маш хурдан зохион байгуулсан нь миний анхны аяллыг амар болгосон.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-smiley-man-posing-outdoors.jpg",
          name: "Sato Sakura",
          country: "Япон",
          text: "Зөвлөгөө, эмнэлгийн сонголт, сэргэлтийн менежмент гээд бүх урсгал үнэхээр дээд зэрэглэлийн байсан.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-asian-girl-city.jpg",
          name: "Mohammed Al-Farsi",
          country: "UAE",
          text: "Эмнэлгийн орчуулга болон нисэх буудлын тосолт төгс холбогдсон тул эмчилгээний хуваарь огт алдагдаагүй.",
        },
        {
          image: "/고객 후기 프로필/smiling-elderly-woman-city.jpg",
          name: "Elena Petrov",
          country: "Орос",
          text: "Сэргэлтийн хугацаанд байр болон эмнэлэг хүргэх зохион байгуулалт маш сайн байсан тул гэр бүл маань тайван байлаа.",
        },
        {
          image: "/고객 후기 프로필/young-man-middle-eastern-young-man-traditional-clothing.jpg",
          name: "Sarah Johnson",
          country: "АНУ",
          text: "Богино хугацаанд ч шаардлагатай үзлэг, эмчилгээг үр ашигтайгаар хийх боломжтой болгож өгсөн.",
        },
        {
          image: "/고객 후기 프로필/beautiful-cheerful-woman-sitting-by-white-wall.jpg",
          name: "Amina Yusuf",
          country: "Нигери",
          text: "Дараах хяналт багтсан тул нутаг буцсаны дараа ч эрүүл мэндийн байдлаа тогтмол хянаж чадсан.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-smiley-man-posing-outdoors.jpg",
          name: "Lucas Martin",
          country: "Франц",
          text: "Эмнэлэг сонгох шалгуур болон эмчийн тайлбар маш тодорхой байсан нь шийдвэр гаргалтыг хурдтай болгосон.",
        },
        {
          image: "/고객 후기 프로필/medium-shot-asian-girl-city.jpg",
          name: "Nguyen Linh",
          country: "Вьетнам",
          text: "Ирснээс буцах хүртэл нэг сувгаар харилцсан тул аялал болон эмчилгээг хамт төлөвлөхөд дарамт бага байсан.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Түгээмэл асуултууд",
      items: [
        {
          question: "UB MEDI ямар үйлчилгээ үзүүлдэг вэ?",
          answer:
            "UB MEDI нь гадаад өвчтөнүүдэд зориулсан эмнэлгийн аяллын иж бүрэн тусламжийг үзүүлдэг. Солонгост ирэхээс өмнөх онлайн зөвлөгөө, эмнэлгийн цаг захиалга, нисэх буудлын тосолт, хариуцсан орчуулагч, дээд зэрэглэлийн байр, эх орондоо буцсаны дараах хяналт хүртэл бүх үе шатыг хамтран зохион байгуулдаг. Тус тусад нь бэлтгэл хийхгүйгээр UB MEDI-аар дамжуулан Солонгос дахь эмчилгээний аяллаа бүрэн шийдэх боломжтой.",
        },
        {
          question: "Ямар улсын иргэд үйлчилгээ ашиглаж болох вэ?",
          answer:
            "Одоогоор Монгол болон Хятадын үйлчлүүлэгчдэд төвлөрөн үйлчилгээ үзүүлж байгаа бөгөөд цаашид үйлчилгээний орнуудыг шат дараатайгаар нэмэгдүүлэхээр төлөвлөж байна. Эдгээрээс өөр улсад амьдардаг байсан ч зөвлөгөө авах боломжтой тул бидэнтэй холбогдоно уу.",
        },
        {
          question: "Гол эмчилгээ, үйлчилгээний төрлүүд юу вэ?",
          answer:
            "Манай үндсэн чиглэлд хорт хавдар, зүрх, тархи-мэдрэл, нурууны хүнд эмчилгээ ба мэс засал; ерөнхий, иж бүрэн, нарийн мэргэжлийн эрүүл мэндийн үзлэг; нүд, хамар, нүүрний хэлбэр, өөх соруулах гоо заслын мэс засал; мөн LASIK, LASEK, катаракт, торлогийн эмчилгээ зэрэг нүдний салбар багтдаг. Мөн Асан эмнэлэг, Северанс, Самсунг Сөүл зэрэг Солонгосын 6 том эмнэлэг болон Ганнамын гол мэргэжлийн клиникүүдтэй албан ёсны түншлэлтэй.",
        },
        {
          question: "Захиалга болон нийт хуваарьт ерөнхийдөө хэр хугацаа ордог вэ?",
          answer:
            "Ихэнх тохиолдолд зөвлөгөөний хүсэлт илгээснээс хойш 1-3 хоногийн дотор таны хариуцсан зохицуулагч холбогдоно. Эмчилгээний тасаг болон эмнэлгээс шалтгаалан зөвлөгөө өгөхөөс Солонгост ирэх хуваарь батлагдах хүртэл ихэвчлэн 1-2 долоо хоног шаардлагатай. Яаралтай үзлэг, эмчилгээ хэрэгтэй бол хурдан зохицуулалт хийх боломжтой.",
        },
        {
          question: "Эмнэлгийн үйлчилгээний үнэ хэрхэн тооцогдох вэ?",
          answer: "Зардал нь эмчилгээний төрөл, эмнэлэг, оршин суух хугацаанаас хамаарч өөр өөр байна. Зөвлөгөө авах хүсэлт илгээсний дараа таны хариуцсан зохицуулагч нөхцөл байдалд тохирсон үнийн саналыг гаргаж өгнө.",
        },
        {
          question: "Орчуулгын үйлчилгээ хэрхэн үзүүлэгддэг вэ?",
          answer:
            "Хариуцсан орчуулагч нь эмчийн зөвлөгөө, хагалгааны зөвшөөрөл, шинжилгээний хариу тайлбарлах зэрэг бүх үе шатанд хамт явна. Монгол, Хятад хэлний эмнэлгийн мэргэжлийн орчуулагч томилогдож, эмнэлгийн нарийн нэр томьёог ч үнэн зөв дамжуулна.",
        },
        {
          question: "Байр болон тосох үйлчилгээ хэрхэн зохион байгуулагддаг вэ?",
          answer:
            "Нисэх буудалд ирэхэд хариуцсан ажилтан тосож аваад байр хүртэл хүргэж өгнө. Эмнэлэгт ойр, тав тухтай байдлыг харгалзан дээд зэрэглэлийн зочид буудал болон резиденсийг санал болгодог бөгөөд оршин суух хугацаанд шаардлагатай тохиолдолд тээврийн хэрэгслийн дэмжлэг үзүүлнэ.",
        },
        {
          question: "Оршин суух хугацаанд яаралтай нөхцөл байдал үүсвэл яаж ажиллах вэ?",
          answer:
            "Таны хариуцсан зохицуулагч оршин суух хугацаанд түргэн шуурхай хариу үзүүлнэ. Шинж тэмдэг огцом дордох, нэмэлт үзлэг хэрэг болох, хуваарь өөрчлөгдөх зэрэг олон нөхцөлд дэмжлэг үзүүлж, шаардлагатай бол яаралтай эмнэлэгтэй холбож хамт явна.",
        },
        {
          question: "Эх орондоо буцсаны дараах хяналт хэрхэн явагдах вэ?",
          answer:
            "Буцсаны дараа ч таны хариуцсан зохицуулагчаар дамжуулан тогтмол дараах хяналт авах боломжтой. Биеийн байдлын явц шалгах, нэмэлт эмчилгээ хэрэгтэй эсэхийг зөвлөх, дахин ирэх хуваарь зохицуулах зэрэгт дэмжлэг үзүүлж, эх орондоо байсан ч эмчилгээгээ үргэлжлүүлэн тухтай удирдах боломжийг бүрдүүлнэ.",
        },
      ],
    },
    contact: {
      titleLine1: "Солонгос дахь премиум",
      titleLine2: "эмнэлгийн аяллаа өнөөдөр эхлүүлээрэй",
      introLine1: "Формыг бөглөвөл 24 цагийн дотор таны хариуцсан зохицуулагч",
      introLine2: "таньтай холбогдон хувийн эмнэлгийн зөвлөгөө өгнө.",
      points: [
        "Үнэгүй захиалгат эмчилгээний төлөвлөгөө",
        "1:1 эмнэлгийн зохицуулагч томилно",
        "Найдвартай мэдээллийн хамгаалалт, дараах хяналт",
      ],
      formTitle: "Зөвлөгөө авах хүсэлт",
      formNote: "Илгээснээс хойш 24 цагийн дотор зохицуулагч таньтай холбогдоно.",
      nameLabel: "Нэр",
      namePlaceholder: "Нэрээ оруулна уу",
      nationLabel: "Иргэншил",
      nationPlaceholder: "Оршин суугаа улсаа оруулна уу",
      emailLabel: "Имэйл",
      emailPlaceholder: "Имэйл хаягаа оруулна уу",
      messengerLabel: "Мессенжер (WhatsApp/WeChat/Line гэх мэт)",
      messengerPlaceholder: "Мессенжерийн төрөл болон ID-гаа оруулна уу",
      interestLabel: "Сонирхож буй салбар",
      interestPlaceholder: "Хүсэж буй эмнэлгийн салбараа сонгоно уу",
      visitLabel: "Очих хүссэн хугацаа",
      visitYear: ["2026 он", "2027 он"],
      visitMonth: ["1 сар", "2 сар", "3 сар", "4 сар", "5 сар", "6 сар", "7 сар", "8 сар", "9 сар", "10 сар", "11 сар", "12 сар"],
      visitDay: ["1 өдөр", "5 өдөр", "10 өдөр", "15 өдөр", "20 өдөр", "25 өдөр"],
      inquiryLabel: "Нэмэлт асуулт",
      inquiryPlaceholder: "Асуух зүйл болон тусгай хүсэлтээ чөлөөтэй бичнэ үү",
      submit: "Яг одоо үнэгүй зөвлөгөө авах →",
    },
    footer: {
      tagline: "You, Better Medical",
      quote: '"Танд зориулсан илүү сайн эмнэлгийн туршлага"',
      contactTitle: "Contact Us",
      contactPrimary: ["Жилийн турш 24 цагийн зөвлөгөө", "Онлайн зөвлөгөө авах боломжтой", "Утас: +82-10-8811-9761", "info@ubmedi.com"],
      contactMeta: [
        "Хаяг: Сөүл хот, Гымчон дүүрэг, Гасан-дон 319-8 Ace Hansol Tower 11F 1107",
        "Компанийн нэр: UBMEDI CO., LTD",
        "Бизнесийн бүртгэлийн дугаар: 466-87-00555",
      ],
      businessTitle: "Үйлчилгээ ба тусламж",
      businessLinks: ["Танилцуулга", "Эмчилгээ", "Үйлчилгээ", "Сэтгэгдэл", "Тусламж"],
      newsletterTitle: "Subscribe & Newsletter",
      newsletterPlaceholder: "Email address",
      newsletterButton: "Submit Now",
      socialLinks: [
        { label: "Facebook", href: "https://m.me/1166142713249729", icon: "/footer/facebook.svg" },
        { label: "Instagram", href: "https://www.instagram.com/ubmedi/", icon: "/footer/instagram.svg" },
        { label: "Phone", href: "tel:+821088119761", icon: "/footer/phone.svg" },
      ],
      copyright: "COPYRIGHT © 2014 UB MED INC. ALL RIGHTS RESERVED.",
    },
  },
};

function getStars() {
  return "★★★★★";
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);
  const [specialtyPage, setSpecialtyPage] = useState(0);
  const [contactSubmitState, setContactSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [contactForm, setContactForm] = useState({
    name: "",
    nation: "",
    email: "",
    messenger: "",
    interest: "",
    visitYear: "2026년",
    visitMonth: "1월",
    visitDay: "1일",
    inquiry: "",
  });
  const copy = copies[locale];
  useEffect(() => {
    setLocale(detectPreferredLocale());
  }, []);

  useEffect(() => {
    setContactForm((prev) => ({
      ...prev,
      visitYear: copies[locale].contact.visitYear[0] ?? "",
      visitMonth: copies[locale].contact.visitMonth[0] ?? "",
      visitDay: copies[locale].contact.visitDay[0] ?? "",
    }));
    setContactSubmitState("idle");
  }, [locale]);
  const specialtyPageStarts = copy.specialty.items.length > 4 ? [0, copy.specialty.items.length - 4] : [0];
  const currentSpecialtyPage = Math.min(specialtyPage, specialtyPageStarts.length - 1);
  const visibleSpecialties = copy.specialty.items.slice(
    specialtyPageStarts[currentSpecialtyPage],
    specialtyPageStarts[currentSpecialtyPage] + 4,
  );
  const handleContactFieldChange = (field: keyof typeof contactForm, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
    if (contactSubmitState !== "idle") {
      setContactSubmitState("idle");
    }
  };
  const contactSubmitLabel =
    contactSubmitState === "submitting"
      ? locale === "ko"
        ? "전송 중..."
        : locale === "en"
          ? "Sending..."
          : "Илгээж байна..."
      : copy.contact.submit;
  const contactSubmitMessage =
    contactSubmitState === "success"
      ? locale === "ko"
        ? "상담 신청이 전송되었습니다. 확인 후 연락드리겠습니다."
        : locale === "en"
          ? "Your inquiry has been sent. We will contact you after review."
          : "Таны хүсэлт илгээгдлээ. Шалгаад эргэн холбогдоно."
      : contactSubmitState === "error"
        ? locale === "ko"
          ? "메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요."
          : locale === "en"
            ? "Failed to send the email. Please try again later."
            : "Имэйл илгээж чадсангүй. Түр хүлээгээд дахин оролдоно уу."
        : "";
  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSubmitState("submitting");

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

      setContactSubmitState("success");
      setContactForm({
        name: "",
        nation: "",
        email: "",
        messenger: "",
        interest: "",
        visitYear: copy.contact.visitYear[0] ?? "",
        visitMonth: copy.contact.visitMonth[0] ?? "",
        visitDay: copy.contact.visitDay[0] ?? "",
        inquiry: "",
      });
    } catch {
      setContactSubmitState("error");
    }
  };

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="UB MEDI home">
            <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={138} height={34} priority />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#intro">{copy.nav.intro}</a>
            <a href="#specialties">{copy.nav.specialties}</a>
            <a href="#process">{copy.nav.guide}</a>
            <a href="#reviews">{copy.nav.reviews}</a>
            <a href="#contact">{copy.nav.support}</a>
          </nav>

          <div className="header-utils" aria-label="Language and contact information">
            <div className={`lang-switcher ${isLocaleOpen ? "is-open" : ""}`} aria-label="Language switcher">
              <button
                className="lang-chip"
                type="button"
                aria-haspopup="menu"
                aria-expanded={isLocaleOpen}
                onClick={() => setIsLocaleOpen((prev) => !prev)}
              >
                <span className="lang-chip-dot" aria-hidden>
                  🌐
                </span>
                <span>{copy.localeLabel}</span>
                <span className="lang-chip-caret" aria-hidden>
                  ▾
                </span>
              </button>
              <div className="lang-menu" role="menu">
                {(["ko", "en", "mn"] as Locale[]).map((item) => (
                  <button
                    key={item}
                    className={`lang-menu-item ${locale === item ? "is-active" : ""}`}
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setLocale(item);
                      setIsLocaleOpen(false);
                    }}
                  >
                    {copies[item].localeLabel}
                  </button>
                ))}
              </div>
            </div>
            <a className="header-phone" href="tel:+82050714657060" aria-label="Call UB MEDI">
              +82-0507-1465-7060
            </a>
            <div className="header-messengers" aria-label="Messenger links">
              {headerMessengers.map((item) => (
                <a
                  key={item.label}
                  className="header-messenger"
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={item.icon} alt={item.label} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="hero-section" id="top">
        <Image className="hero-bg" src="/히어로 섹션 이미지.png" alt="UB MEDI hero background" fill priority sizes="100vw" />
        <div className="hero-overlay" />

        <div className="container hero-content">
          <span className="hero-badge">{copy.hero.badge}</span>
          <h1>
            {copy.hero.titleTop}
            <br />
            <span>{copy.hero.titleAccent}</span>
          </h1>
          <p className="hero-copy">
            {copy.hero.descriptionLine1}
            <br />
            {copy.hero.descriptionLine2}
          </p>
          <a className="primary-button hero-button" href="#contact">
            {copy.hero.cta}
          </a>
        </div>

      </section>

      <section className="hero-partners">
        <div className="container">
          <div className="partners-title">
            <span>{copy.hero.partnerTitle}</span>
          </div>
          <div className="partners-marquee">
            <div className="partners-track">
              {[...copy.partners, ...copy.partners].map((partner, index) => (
                <div className="partner-item" key={`${partner.label}-${index}`}>
                  <div className="partner-logo-wrap">
                    <Image src={partner.logo} alt={partner.label} fill className="partner-logo" sizes="132px" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section" id="intro">
        <div className="intro-backdrop">
          <Image
            className="intro-map"
            src="/intro/intro-map.png"
            alt="Global medical network map"
            fill
            sizes="100vw"
          />
        </div>
        <div className="container intro-inner">
          <div className="intro-visual intro-visual-left">
            <Image src="/intro/intro-consulting.png" alt="UB MEDI consultation" fill sizes="180px" />
          </div>

          <div className="intro-center">
            <div className="intro-logo-block">
              <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={214} height={86} />
              <p>
                {copy.introSection.tagline.replace(" UB MEDI", "")}{" "}
                <span className="intro-tagline-accent">UB MEDI</span>
              </p>
            </div>

            <div className="intro-copy">
              <h2>
                {copy.introSection.titleLine1}
                <br />
                {locale === "ko" ? (
                  <>
                    더 나은 <span className="intro-title-gold">프리미엄</span>{" "}
                    <span className="intro-title-teal">의료의 동행</span>
                  </>
                ) : (
                  <span className="intro-title-teal">{copy.introSection.titleLine2}</span>
                )}
              </h2>
              <p>
                {copy.introSection.descriptionLine1}
                <br />
                {copy.introSection.descriptionLine2}
              </p>

              <div className="intro-feature-list">
                {copy.introSection.features.map((item) => (
                  <div className="intro-feature-card" key={item.number}>
                    <span className="intro-feature-number">{item.number}</span>
                    <span className="intro-feature-title">{item.title}</span>
                    <span className="intro-feature-divider" aria-hidden>
                      |
                    </span>
                    <span className="intro-feature-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="intro-visual intro-visual-right">
            <Image src="/intro/intro-care.jpg" alt="Premium medical care" fill sizes="180px" />
          </div>
        </div>
      </section>

      <section className="section timeline-section" aria-labelledby="timeline-title">
        <div className="container narrow timeline-wrap">
          <div className="timeline-heading">
            <h2 id="timeline-title">{copy.timeline.title}</h2>
            <p>{copy.timeline.subtitle}</p>
          </div>

          <div className="timeline-list">
            {copy.timeline.items.map((item) => (
              <article className="timeline-item" key={`${copy.localeLabel}-${item.period}`}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-marker" aria-hidden>
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  {item.lines.map((line, index) => (
                    <p key={`${item.period}-${index}`}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section awards-section" aria-labelledby="awards-title">
        <div className="container awards-wrap">
          <div className="awards-heading">
            <h2 id="awards-title">{copy.awards.title}</h2>
            <p>{copy.awards.subtitle}</p>
          </div>

          <div className="awards-grid">
            {copy.awards.cards.map((card) => (
              <article className="award-card" key={`${copy.localeLabel}-${card.title}`}>
                <div className={`award-media-group ${card.images.length > 1 ? "is-cluster" : "is-single"}`}>
                  {card.images.length > 1 ? (
                    <>
                      <div className="award-media-row">
                        {card.images.slice(0, 2).map((image) => (
                          <div className="award-media multi" key={image.src}>
                            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 50vw, 220px" />
                          </div>
                        ))}
                      </div>
                      <div className="award-media solo">
                        <Image src={card.images[2].src} alt={card.images[2].alt} fill sizes="(max-width: 900px) 50vw, 220px" />
                      </div>
                    </>
                  ) : (
                    <div className="award-media tall">
                      <Image src={card.images[0].src} alt={card.images[0].alt} fill sizes="(max-width: 900px) 60vw, 240px" />
                    </div>
                  )}
                </div>

                <div className="award-copy">
                  <p className="award-year">{card.year}</p>
                  <h3>{card.title}</h3>
                  <p className="award-subtitle">{card.subtitle}</p>
                </div>
              </article>
            ))}

            <article className="award-card award-card-logos">
              <div className="award-logo-stack">
                {copy.awards.partnerGroup.logos.map((logo) => (
                  <div className="award-logo-item" key={`${copy.localeLabel}-${logo.label}`}>
                    <div className="award-logo-wrap">
                      <Image src={logo.logo} alt={logo.label} fill className="award-logo" sizes="240px" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="award-copy">
                <p className="award-year">{copy.awards.partnerGroup.year}</p>
                <h3>{copy.awards.partnerGroup.title}</h3>
                <p className="award-subtitle">{copy.awards.partnerGroup.subtitle}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section specialty-section" id="specialties">
        <div className="container">
          <div className="specialty-heading">
            <h2>
              {copy.specialty.titlePrefix}
              <br />
              <span>{copy.specialty.titleAccent}</span> {copy.specialty.titleSuffix}
            </h2>
            <p>{copy.specialty.description}</p>
          </div>

          <div className="specialty-list-heading">{copy.specialty.selectTitle}</div>

          <div className="specialty-carousel">
            <button
              className="carousel-arrow is-left"
              type="button"
              aria-label={copy.specialty.prev}
              onClick={() => setSpecialtyPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentSpecialtyPage === 0}
            >
              ‹
            </button>
            <div className="card-grid specialty-grid">
              {visibleSpecialties.map((item) => (
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
            <button
              className="carousel-arrow is-right"
              type="button"
              aria-label={copy.specialty.next}
              onClick={() => setSpecialtyPage((prev) => Math.min(prev + 1, specialtyPageStarts.length - 1))}
              disabled={currentSpecialtyPage === specialtyPageStarts.length - 1}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container narrow comparison-wrap">
          <div className="comparison-copy">
            <p>{copy.comparison.line1}</p>
            <p>{copy.comparison.line2}</p>
          </div>
          <div className="comparison-grid">
            <div className="comparison-box is-primary">
              <div className="comparison-title is-primary-title">{copy.comparison.ubMediTitle}</div>
              <div className="comparison-list">
                {copy.comparison.ubMediItems.map((item) => (
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
              <div className="comparison-title">{copy.comparison.genericTitle}</div>
              <div className="comparison-list">
                {copy.comparison.genericItems.map((item) => (
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
              {copy.process.titleTop}
              <br />
              <span>{copy.process.titleAccent}</span>
            </h2>
            <p>{copy.process.description}</p>
          </div>

          <div className="process-timeline">
            <div className="timeline-line" aria-hidden />
            <div className="timeline-points">
              {copy.process.items.map((step, index) => (
                <span className="timeline-point" key={step.title}>
                  0{index + 1}
                </span>
              ))}
            </div>
          </div>

          <div className="process-grid">
            {copy.process.items.map((step) => (
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

          <div className="process-badge">{copy.process.badge}</div>
        </div>
      </section>

      <section className="section benefit-section" id="benefits">
        <div className="container benefit-wrap">
          <div className="benefit-heading">
            <h2>
              {copy.benefits.titleLine1}
              <br />
              <span>{copy.benefits.titleAccent}</span>
            </h2>
          </div>

          <div className="care-visual">
            <Image src="/원스톱 케어.svg" alt="UB MEDI one-stop care" width={582} height={576} />
          </div>

          <div className="benefit-summary">
            {copy.benefits.summaryLine1}
            <br />
            {copy.benefits.summaryLine2}
          </div>

          <div className="benefit-grid">
            {copy.benefits.items.map((item) => (
              <article className="benefit-item" key={item.title}>
                <Image src={item.icon} alt="" width={34} height={34} aria-hidden />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section review-section" id="reviews">
        <div className="container review-wrap">
          <div className="review-heading">
            <h2>
              {copy.reviews.titlePrefix} <span>{copy.reviews.titleAccent}</span>
            </h2>
            <p>{copy.reviews.description}</p>
          </div>
          <div className="review-marquee">
            <div className="review-track">
              {[...copy.reviews.items, ...copy.reviews.items].map((review, index) => (
                <article className="review-card" key={`${review.name}-${index}`}>
                  <div className="review-card-head">
                    <div className="review-avatar-frame">
                      <Image className="review-avatar" src={review.image} alt={review.name} width={36} height={36} />
                    </div>
                    <div className="review-meta">
                      <h3>{review.name}</h3>
                      <span>{review.country}</span>
                    </div>
                  </div>
                  <div className="review-stars" aria-label="five stars">
                    {getStars()}
                  </div>
                  <p>{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-wrap">
          <div className="faq-heading">
            <h2>{copy.faq.title}</h2>
            <p>{copy.faq.subtitle}</p>
          </div>
          <div className="faq-list">
            {copy.faq.items.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <Image className="contact-bg" src="/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png" alt="" fill sizes="100vw" />
        <div className="contact-overlay" />
        <div className="container contact-grid">
          <div className="contact-copy">
            <h2>
              {copy.contact.titleLine1}
              <br />
              {copy.contact.titleLine2}
            </h2>
            <p className="contact-intro">
              {copy.contact.introLine1}
              <br />
              {copy.contact.introLine2}
            </p>
            <ul className="contact-points">
              {copy.contact.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <h3>{copy.contact.formTitle}</h3>
            <p className="contact-form-note">{copy.contact.formNote}</p>

            <div className="form-grid">
              <label>
                {copy.contact.nameLabel}
                <input
                  type="text"
                  placeholder={copy.contact.namePlaceholder}
                  value={contactForm.name}
                  onChange={(event) => handleContactFieldChange("name", event.target.value)}
                />
              </label>
              <label>
                {copy.contact.nationLabel}
                <input
                  type="text"
                  placeholder={copy.contact.nationPlaceholder}
                  value={contactForm.nation}
                  onChange={(event) => handleContactFieldChange("nation", event.target.value)}
                />
              </label>
            </div>

            <label>
              {copy.contact.emailLabel}
              <input
                type="email"
                placeholder={copy.contact.emailPlaceholder}
                value={contactForm.email}
                onChange={(event) => handleContactFieldChange("email", event.target.value)}
              />
            </label>

            <label>
              {copy.contact.messengerLabel}
              <input
                type="text"
                placeholder={copy.contact.messengerPlaceholder}
                value={contactForm.messenger}
                onChange={(event) => handleContactFieldChange("messenger", event.target.value)}
              />
            </label>

            <label>
              {copy.contact.interestLabel}
              <input
                type="text"
                placeholder={copy.contact.interestPlaceholder}
                value={contactForm.interest}
                onChange={(event) => handleContactFieldChange("interest", event.target.value)}
              />
            </label>

            <label>
              {copy.contact.visitLabel}
              <div className="visit-grid">
                <select value={contactForm.visitYear} onChange={(event) => handleContactFieldChange("visitYear", event.target.value)}>
                  {copy.contact.visitYear.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select value={contactForm.visitMonth} onChange={(event) => handleContactFieldChange("visitMonth", event.target.value)}>
                  {copy.contact.visitMonth.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select value={contactForm.visitDay} onChange={(event) => handleContactFieldChange("visitDay", event.target.value)}>
                  {copy.contact.visitDay.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            <label>
              {copy.contact.inquiryLabel}
              <textarea
                rows={5}
                placeholder={copy.contact.inquiryPlaceholder}
                value={contactForm.inquiry}
                onChange={(event) => handleContactFieldChange("inquiry", event.target.value)}
              />
            </label>

            <button className="primary-button form-button" type="submit" disabled={contactSubmitState === "submitting"}>
              {contactSubmitLabel}
            </button>
            {contactSubmitMessage ? (
              <p className={`contact-submit-message is-${contactSubmitState}`}>{contactSubmitMessage}</p>
            ) : null}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/footer/footer-logo-white.svg" alt="UB MEDI" width={180} height={46} />
            <div className="footer-brand-copy">
              <p className="footer-tagline">{copy.footer.tagline}</p>
              <p>{copy.footer.quote}</p>
            </div>
            <div className="footer-socials" aria-label="Social links">
              {copy.footer.socialLinks.map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
                  <Image src={item.icon} alt={item.label} width={18} height={18} />
                </a>
              ))}
            </div>
            <p className="footer-copyright">{copy.footer.copyright}</p>
          </div>
          <div className="footer-column">
            <h3>{copy.footer.contactTitle}</h3>
            <div className="footer-contact-primary">
              {copy.footer.contactPrimary.map((line, index) => (
                <p key={`${copy.localeLabel}-contact-primary-${index}`}>{line}</p>
              ))}
            </div>
            <div className="footer-contact-meta">
              {copy.footer.contactMeta.map((line, index) => (
                <p key={`${copy.localeLabel}-contact-meta-${index}`}>{line}</p>
              ))}
            </div>
            <div className="footer-meta-links">
              <a href="#">개인정보처리방침</a>
              <a href="#">이메일무단수집거부</a>
            </div>
          </div>
          <div className="footer-column footer-links">
            <h3>{copy.footer.businessTitle}</h3>
            {copy.footer.businessLinks.map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </div>
          <div className="footer-column footer-newsletter">
            <h3>{copy.footer.newsletterTitle}</h3>
            <div className="newsletter-row">
              <input type="email" placeholder={copy.footer.newsletterPlaceholder} />
              <button type="button">{copy.footer.newsletterButton}</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
