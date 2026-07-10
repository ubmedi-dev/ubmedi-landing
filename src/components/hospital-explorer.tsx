"use client";

import Image from "next/image";
import { useState } from "react";
import { partnerHospitals } from "@/app/site-content";

type HospitalInfo = {
  key: string;
  label: string;
  logo: string;
  hero: string;
  title: string;
  paragraphs: string[];
  services: string[];
  quote: string;
};

const hospitals: HospitalInfo[] = [
  {
    key: "amc",
    label: "서울아산병원",
    logo: "/파트너사로고/서울아산병원.svg",
    hero: "https://icy-shadow-58134231.figma.site/_components/v2/0acc6271191cb5ae4d89c24389669d5925af4fcc/asan-medical-center-2.a4a06b81.jpg",
    title: "서울아산병원 국제진료센터",
    paragraphs: [
      "서울아산병원은 고난도 수술과 중증 질환 치료 역량이 강한 상급종합병원입니다.",
      "국제진료센터를 통해 외국인 환자를 위한 예약, 통역, 입퇴원 안내, 진료 일정 조율을 체계적으로 지원합니다.",
    ],
    services: [
      "중증 치료와 수술 환자를 위한 병원 제안 및 일정 설계",
      "영어, 중국어, 러시아어 등 다국어 통역 지원 연계",
      "입원과 보호자 동선을 포함한 체류 계획 조율",
      "검사 결과 설명과 후속 진료 예약 지원",
    ],
    quote: "고난도 치료가 필요한 환자에게 안정적인 국제진료 운영 체계를 제공하는 대표 파트너 병원입니다.",
  },
  {
    key: "sev",
    label: "세브란스병원",
    logo: "/파트너사로고/세브란스병원.svg",
    hero: "https://icy-shadow-58134231.figma.site/_components/v2/0acc6271191cb5ae4d89c24389669d5925af4fcc/severance-hospital-2.396be969.jpg",
    title: "세브란스병원 국제진료센터",
    paragraphs: [
      "세브란스병원은 복합 진료와 정밀 검진, 수술 후 회복 관리까지 폭넓은 경험을 갖춘 병원입니다.",
      "외국인 환자 전용 국제진료 프로세스를 바탕으로 예약, 검사, 입원, 추적 상담을 유연하게 조정합니다.",
    ],
    services: [
      "복합 질환과 장기 체류 환자를 위한 일정 통합 조율",
      "검진과 수술, 입원 일정을 연결한 운영 지원",
      "전담 코디네이터와 병원 행정 연계",
      "귀국 후 온라인 후속 상담 연결",
    ],
    quote: "여러 진료과를 동시에 검토해야 하는 환자에게 안정적인 선택지가 되는 병원입니다.",
  },
  {
    key: "smc",
    label: "삼성서울병원",
    logo: "/파트너사로고/삼성서울병원.svg",
    hero: "https://icy-shadow-58134231.figma.site/_components/v2/0acc6271191cb5ae4d89c24389669d5925af4fcc/samsung-medical-center.64849353.jpg",
    title: "삼성서울병원 국제진료팀",
    paragraphs: [
      "삼성서울병원은 정밀 진단과 중증 치료, 암 진료 분야에서 강점을 가진 병원입니다.",
      "환자의 검사 흐름과 입원, 수술, 회복 일정을 체계적으로 묶어 체류 부담을 줄일 수 있습니다.",
    ],
    services: [
      "정밀 검진과 암 치료 중심의 병원 제안",
      "검사와 수술 일정의 집중 배치",
      "보호자 동반 일정과 체류 조정",
      "사후 결과 전달과 재방문 상담 지원",
    ],
    quote: "정밀한 진단과 빠른 치료 결정이 필요한 경우 우선 검토하는 협력 병원입니다.",
  },
  {
    key: "ku",
    label: "고려대학교의료원",
    logo: "/파트너사로고/고려대학교의료원.svg",
    hero: "https://icy-shadow-58134231.figma.site/_components/v2/0acc6271191cb5ae4d89c24389669d5925af4fcc/korea-university-anam-hospital-2.10b5de99.jpg",
    title: "고려대학교의료원 국제진료센터",
    paragraphs: [
      "고려대학교의료원은 중증 질환 진료와 전문 의료진 협진 체계가 강점인 대학병원 네트워크입니다.",
      "검사부터 입원과 수술 일정까지 유연하게 연결할 수 있어 복합 케이스에 적합합니다.",
    ],
    services: [
      "복합 진료 케이스 대상 협진 라인 구성",
      "의무기록 검토 후 맞춤 진료과 연결",
      "통역과 행정 절차 동시 지원",
      "후속 진료와 추적 관리 연계",
    ],
    quote: "여러 전문 진료과 협진이 중요한 케이스에서 강점을 보이는 파트너입니다.",
  },
  {
    key: "snuh",
    label: "서울대학교병원",
    logo: "/파트너사로고/서울대학교병원.svg",
    hero: "https://icy-shadow-58134231.figma.site/_components/v2/0acc6271191cb5ae4d89c24389669d5925af4fcc/seoul-national-university-hospital.8ca4cbbe.jpg",
    title: "서울대학교병원 국제진료센터",
    paragraphs: [
      "서울대학교병원은 고난도 수술과 희귀 질환, 정밀 진단 분야에서 높은 신뢰를 받는 병원입니다.",
      "진료 예약과 체류 동선을 사전에 정리해 제한된 일정 안에서도 효율적인 방문이 가능하도록 돕습니다.",
    ],
    services: [
      "희귀 질환과 고난도 수술 케이스 중심 병원 연결",
      "검사, 외래, 입원 일정의 밀도 높은 구성",
      "환자와 보호자를 위한 통역 및 이동 지원",
      "의료 기록 정리와 후속 일정 조율",
    ],
    quote: "정밀 진단과 고난도 치료가 동시에 필요한 환자에게 우선 제안하는 병원 중 하나입니다.",
  },
  {
    key: "cmc",
    label: "가톨릭대학교 서울성모병원",
    logo: "/파트너사로고/성모병원.svg",
    hero: "https://icy-shadow-58134231.figma.site/_components/v2/0acc6271191cb5ae4d89c24389669d5925af4fcc/seoul-st-marys-hospital.3abac47c.jpeg",
    title: "서울성모병원 국제진료센터",
    paragraphs: [
      "서울성모병원은 암 치료와 이식, 중증 치료 분야에서 경쟁력을 갖춘 병원입니다.",
      "병원 내 프로세스와 체류 지원을 함께 맞춰야 하는 케이스에서 안정적인 운영 경험을 제공합니다.",
    ],
    services: [
      "암과 중증 치료 중심 병원 연계",
      "입원, 수술, 회복 일정 통합 관리",
      "전문 통역과 행정 절차 지원",
      "귀국 후 결과 확인 및 후속 관리 연결",
    ],
    quote: "집중 치료와 회복 관리가 모두 중요한 환자에게 적합한 파트너 병원입니다.",
  },
];

export function HospitalExplorer() {
  const [activeKey, setActiveKey] = useState(hospitals[0].key);
  const activeHospital = hospitals.find((item) => item.key === activeKey) ?? hospitals[0];

  return (
    <section className="section-block hospitals-section">
      <div className="container">
        <div className="hospital-tabs" role="tablist" aria-label="제휴 병원">
          {partnerHospitals.map((item) => (
            <button
              key={item.key}
              className={item.key === activeHospital.key ? "is-active" : undefined}
              type="button"
              onClick={() => setActiveKey(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hospital-logo-header">
          <Image src={activeHospital.logo} alt={activeHospital.label} width={280} height={72} />
        </div>

        <div className="hospital-feature-image">
          <img src={activeHospital.hero} alt={activeHospital.label} />
        </div>

        <div className="hospital-content">
          <h2>{activeHospital.title}</h2>
          {activeHospital.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="hospital-service-block">
          <h3>{activeHospital.label}이 제공하는 핵심 지원</h3>
          <ul>
            {activeHospital.services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <blockquote>{activeHospital.quote}</blockquote>
        </div>
      </div>
    </section>
  );
}
