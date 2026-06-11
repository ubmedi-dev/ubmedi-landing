"use client";

import Image from "next/image";
import { useState } from "react";

type Locale = "ko" | "en" | "mn";

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
    contactLines: string[];
    businessTitle: string;
    businessLinks: string[];
    newsletterTitle: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    copyright: string;
  };
};

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
      titlePrefix: "목적별",
      titleAccent: "메디컬 분야",
      titleSuffix: "큐레이션",
      description: "증상이나 시술명을 입력하면 해당 진료과로 바로 이동합니다.",
      searchPlaceholder: "예) 라식, 허리통증, 충치, 성형 등",
      selectTitle: "진료과 선택",
      prev: "이전",
      next: "다음",
      items: [
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
          answer: "병원 예약, 의료 통역, 공항 픽업, 숙박 연계, 사후 관리까지 메디컬 투어 전 과정을 하나의 창구로 지원합니다.",
        },
        {
          question: "서비스 이용 가능 국가가 어디인가요?",
          answer: "국가 제한 없이 상담이 가능하며, 고객의 국적과 방문 목적에 맞춰 최적의 진료 일정을 제안합니다.",
        },
        {
          question: "주요 진료 및 시술 분야는 무엇인가요?",
          answer: "건강검진, 성형외과, 피부과, 치과, 정형외과를 포함한 다양한 전문 진료과와 의료 시술을 연결합니다.",
        },
        {
          question: "예약 및 진행 일정은 어느 정도 걸리나요?",
          answer: "상담 내용에 따라 다르지만, 일반적으로 24시간 이내 1차 안내를 드리고 이후 병원 확정과 방문 일정이 순차적으로 조율됩니다.",
        },
        {
          question: "체류 중 긴급 상황 발생 시 어떻게 대응하나요?",
          answer: "전담 코디네이터가 24시간 연락 가능한 채널을 운영하며, 필요 시 병원과 즉시 연결해 긴급 상황을 지원합니다.",
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
      contactLines: [
        "연중무휴 24시간 상담",
        "WhatsApp, 카카오톡 상담",
        "전화: +82-0507-1465-7060",
        "kevin7060@naver.com",
        "주소:",
        "상호: UB MEDI(유비 메디)",
        "사업자 등록번호:",
      ],
      businessTitle: "서비스 및 지원",
      businessLinks: ["소개", "치료 분야", "이용 안내", "이용 후기", "고객센터"],
      newsletterTitle: "Subscribe & Newsletter",
      newsletterPlaceholder: "Email address",
      newsletterButton: "Submit Now",
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
      titlePrefix: "Purpose-Based",
      titleAccent: "Medical Specialty",
      titleSuffix: "Curation",
      description: "Enter a symptom or procedure and move directly to the right specialty.",
      searchPlaceholder: "e.g. LASIK, back pain, cavity, plastic surgery",
      selectTitle: "Choose a Department",
      prev: "Previous",
      next: "Next",
      items: [
        {
          image: "/건강검진.jpg",
          title: "Health Screening",
          summary: "From basic checks to premium exams, cancer screening, and women’s care, we match the right program.",
          tags: ["Bloodwork", "Imaging", "Ultrasound"],
        },
        {
          image: "/피부과.jpg",
          title: "Plastic Surgery",
          summary: "From eyes, nose, and contouring to liposuction and reconstructive surgery, we connect leading Korean surgeons.",
          tags: ["Eyes", "Nose", "Contour"],
        },
        {
          image: "/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png",
          title: "Dentistry",
          summary: "From cavity care to clear aligners, implants, and laminates, we support comprehensive oral treatment.",
          tags: ["Implants", "Aligners", "Cosmetic"],
        },
        {
          image: "/정형외과.jpg",
          title: "Orthopedics",
          summary: "Advanced diagnostics and treatment planning help manage musculoskeletal risks before they worsen.",
          tags: ["Knee Pain", "Spine", "Rehab"],
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
          icon: "/SVG/아트보드 2.svg",
          step: "STEP01",
          title: "1:1 Tailored Medical Consulting",
          text: "A dedicated coordinator designs a personalized medical journey with 24-hour close support.",
        },
        {
          icon: "/SVG/아트보드 3.svg",
          step: "STEP02",
          title: "Medical Tour Reservation",
          text: "From top university hospital booking to visa, accommodation, and flights, everything is arranged in one flow.",
        },
        {
          icon: "/SVG/아트보드 4.svg",
          step: "STEP03",
          title: "Arrival & Premium Escort",
          text: "From airport pickup to hospital visits, your dedicated coordinator accompanies you closely.",
        },
        {
          icon: "/SVG/아트보드 8.svg",
          step: "STEP04",
          title: "Premium Recovery & Wellness",
          text: "Exclusive wellness programs and private recovery solutions are provided for your healing phase.",
        },
        {
          icon: "/SVG/아트보드 9.svg",
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
          answer: "We support the full medical tour journey, including hospital booking, medical interpretation, airport pickup, accommodation linkage, and aftercare.",
        },
        {
          question: "Which countries can use the service?",
          answer: "Consultation is available regardless of nationality, and we suggest the most suitable medical schedule based on each client’s country and purpose.",
        },
        {
          question: "What are the main treatment and procedure categories?",
          answer: "We connect a wide range of specialties including health screening, plastic surgery, dermatology, dentistry, and orthopedics.",
        },
        {
          question: "How long does reservation and scheduling take?",
          answer: "Timing depends on the case, but in general we provide an initial response within 24 hours and then coordinate hospitals and visits step by step.",
        },
        {
          question: "How do you respond in an emergency during the stay?",
          answer: "A dedicated coordinator remains reachable through a 24/7 channel and can connect you to hospitals immediately when needed.",
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
      contactLines: [
        "24/7 year-round consultation",
        "WhatsApp and KakaoTalk support",
        "Tel: +82-0507-1465-7060",
        "kevin7060@naver.com",
        "Address:",
        "Business: UB MEDI",
        "Business Registration No.:",
      ],
      businessTitle: "Services & Support",
      businessLinks: ["About", "Treatments", "Guide", "Reviews", "Support"],
      newsletterTitle: "Subscribe & Newsletter",
      newsletterPlaceholder: "Email address",
      newsletterButton: "Submit Now",
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
      titlePrefix: "Зорилгод суурилсан",
      titleAccent: "эмнэлгийн салбарын",
      titleSuffix: "сонголт",
      description: "Шинж тэмдэг эсвэл үйлчилгээний нэрээ оруулбал тохирох тасаг руу шууд шилжинэ.",
      searchPlaceholder: "ж: LASIK, нурууны өвдөлт, шүд цоорол, гоо сайхан",
      selectTitle: "Тасгаа сонгоно уу",
      prev: "Өмнөх",
      next: "Дараах",
      items: [
        {
          image: "/건강검진.jpg",
          title: "Эрүүл мэндийн үзлэг",
          summary: "Энгийн үзлэгээс эхлээд премиум иж бүрэн шинжилгээ, хавдрын болон эмэгтэйчүүдийн үзлэгийг зорилгод тань тохируулна.",
          tags: ["Цус", "Дүрс", "Хэт авиа"],
        },
        {
          image: "/피부과.jpg",
          title: "Гоо заслын мэс засал",
          summary: "Нүд, хамар, нүүрний хэлбэрээс эхлээд өөх соруулах, нөхөн сэргээх мэс засал хүртэл Солонгосын шилдэг эмч нартай холбодог.",
          tags: ["Нүд", "Хамар", "Хэлбэр"],
        },
        {
          image: "/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png",
          title: "Шүд",
          summary: "Шүдний цоорол эмчлэхээс эхлээд ил тод шүд тэгшлэгч, имплант, гоо сайхны эмчилгээг иж бүрнээр дэмжинэ.",
          tags: ["Имплант", "Тэгшлэгч", "Гоо сайхан"],
        },
        {
          image: "/정형외과.jpg",
          title: "Яс, үе",
          summary: "Орчин үеийн нарийн оношилгоо, эмчилгээний төлөвлөгөөгөөр булчин, ясны эрсдэлийг эрт удирдана.",
          tags: ["Өвдөг", "Нуруу", "Сэргээн засах"],
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
          icon: "/SVG/아트보드 2.svg",
          step: "STEP01",
          title: "1:1 хувийн зөвлөгөө",
          text: "Хариуцсан зохицуулагч 24 цагийн турш ойр дэмжлэг үзүүлж таны эмнэлгийн аяллыг төлөвлөнө.",
        },
        {
          icon: "/SVG/아트보드 3.svg",
          step: "STEP02",
          title: "Эмнэлгийн аяллын захиалга",
          text: "Их сургуулийн эмнэлгийн цаг, виз, байр, нислэгийг нэг урсгалаар шийднэ.",
        },
        {
          icon: "/SVG/아트보드 4.svg",
          step: "STEP03",
          title: "Ирэлт ба дээд зэрэглэлийн угталт",
          text: "Нисэх буудлын тосолтоос эхлээд эмнэлэг хүртэл зохицуулагч тань 1:1 дагалдана.",
        },
        {
          icon: "/SVG/아트보드 8.svg",
          step: "STEP04",
          title: "Сэргэлт ба wellness",
          text: "Таны нөхөн сэргээлтэд зориулсан тусгай wellness болон премиум шийдлүүдийг санал болгоно.",
        },
        {
          icon: "/SVG/아트보드 9.svg",
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
          answer: "Эмнэлгийн цаг, орчуулга, нисэх буудлын тосолт, байр, дараах хяналт зэрэг бүх үе шатыг нэг цонхоор дэмждэг.",
        },
        {
          question: "Ямар улсын иргэд үйлчилгээ ашиглаж болох вэ?",
          answer: "Үндэстэн харгалзахгүй зөвлөгөө авах боломжтой бөгөөд зорилгод тохирсон эмчилгээний хуваарийг санал болгоно.",
        },
        {
          question: "Гол эмчилгээ, үйлчилгээний төрлүүд юу вэ?",
          answer: "Эрүүл мэндийн үзлэг, гоо заслын мэс засал, арьс, шүд, яс үе зэрэг олон чиглэлийн эмчилгээтэй холбодог.",
        },
        {
          question: "Захиалга болон хуваарь зохион байгуулахад хэр хугацаа ордог вэ?",
          answer: "Тохиолдлоос шалтгаална. Ерөнхийдөө 24 цагийн дотор эхний хариуг өгч, дараа нь эмнэлэг болон цагийг үе шаттай баталгаажуулна.",
        },
        {
          question: "Түргэн тусламж шаардлагатай үед яах вэ?",
          answer: "24 цагийн холбооны сувагтай зохицуулагч ажиллаж, шаардлагатай үед эмнэлэгтэй шууд холбож өгдөг.",
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
      contactLines: [
        "24 цагийн турш зөвлөгөө",
        "WhatsApp болон KakaoTalk зөвлөгөө",
        "Утас: +82-0507-1465-7060",
        "kevin7060@naver.com",
        "Хаяг:",
        "Байгууллага: UB MEDI",
        "Регистрийн дугаар:",
      ],
      businessTitle: "Үйлчилгээ ба тусламж",
      businessLinks: ["Танилцуулга", "Эмчилгээ", "Үйлчилгээ", "Сэтгэгдэл", "Тусламж"],
      newsletterTitle: "Subscribe & Newsletter",
      newsletterPlaceholder: "Email address",
      newsletterButton: "Submit Now",
      copyright: "COPYRIGHT © 2014 UB MED INC. ALL RIGHTS RESERVED.",
    },
  },
};

function getStars() {
  return "★★★★★";
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ko");
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);
  const copy = copies[locale];

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="UB MEDI home">
            <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={138} height={34} priority />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#top">{copy.nav.intro}</a>
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
            <span className="header-accent">{copy.header.available}</span>
            <span className="header-phone">+82-0507-1465-7060</span>
            <a className="header-whatsapp" href="#contact">
              {copy.header.whatsapp}
            </a>
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

      <section className="section specialty-section" id="specialties">
        <div className="container">
          <div className="specialty-heading">
            <h2>
              {copy.specialty.titlePrefix} <span>{copy.specialty.titleAccent}</span> {copy.specialty.titleSuffix}
            </h2>
            <p>{copy.specialty.description}</p>
          </div>

          <div className="search-shell specialty-search" aria-label="Search box">
            <div className="search-prompt">
              <span className="search-plus" aria-hidden>
                ✦
              </span>
              <span>{copy.specialty.searchPlaceholder}</span>
            </div>
            <button type="button" aria-label="Search" className="search-button">
              ⌕
            </button>
          </div>

          <div className="specialty-list-heading">{copy.specialty.selectTitle}</div>

          <div className="specialty-carousel">
            <button className="carousel-arrow is-left" type="button" aria-label={copy.specialty.prev}>
              ‹
            </button>
            <div className="card-grid specialty-grid">
              {copy.specialty.items.map((item) => (
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
            <button className="carousel-arrow is-right" type="button" aria-label={copy.specialty.next}>
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

          <form className="contact-form">
            <h3>{copy.contact.formTitle}</h3>
            <p className="contact-form-note">{copy.contact.formNote}</p>

            <div className="form-grid">
              <label>
                {copy.contact.nameLabel}
                <input type="text" placeholder={copy.contact.namePlaceholder} />
              </label>
              <label>
                {copy.contact.nationLabel}
                <input type="text" placeholder={copy.contact.nationPlaceholder} />
              </label>
            </div>

            <label>
              {copy.contact.emailLabel}
              <input type="email" placeholder={copy.contact.emailPlaceholder} />
            </label>

            <label>
              {copy.contact.messengerLabel}
              <input type="text" placeholder={copy.contact.messengerPlaceholder} />
            </label>

            <label>
              {copy.contact.interestLabel}
              <input type="text" placeholder={copy.contact.interestPlaceholder} />
            </label>

            <label>
              {copy.contact.visitLabel}
              <div className="visit-grid">
                <select defaultValue={copy.contact.visitYear[0]}>
                  {copy.contact.visitYear.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select defaultValue={copy.contact.visitMonth[7] ?? copy.contact.visitMonth[0]}>
                  {copy.contact.visitMonth.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select defaultValue={copy.contact.visitDay[0]}>
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
              <textarea rows={5} placeholder={copy.contact.inquiryPlaceholder} />
            </label>

            <button className="primary-button form-button" type="submit">
              {copy.contact.submit}
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={154} height={40} />
            <div className="footer-brand-copy">
              <p className="footer-tagline">{copy.footer.tagline}</p>
              <p>{copy.footer.quote}</p>
            </div>
            <div className="footer-socials" aria-label="Social links">
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
            <p className="footer-copyright">{copy.footer.copyright}</p>
          </div>
          <div className="footer-column">
            <h3>{copy.footer.contactTitle}</h3>
            <p>{copy.footer.contactLines[0]}</p>
            <p>{copy.footer.contactLines[1]}</p>
            <p className="footer-spacer" />
            <p>{copy.footer.contactLines[2]}</p>
            <p>{copy.footer.contactLines[3]}</p>
            <p className="footer-spacer" />
            <p>{copy.footer.contactLines[4]}</p>
            <p>{copy.footer.contactLines[5]}</p>
            <p>{copy.footer.contactLines[6]}</p>
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
