"use client";

import Image from "next/image";
import { useState } from "react";

type TreatmentCategory = {
  key: string;
  label: string;
  image: string;
  eyebrow: string;
  title: string;
  summary: string;
  departments: { title: string; items: string }[];
};

const categories: TreatmentCategory[] = [
  {
    key: "serious",
    label: "중증 치료·수술",
    image: "/specialty-surgery.jpg",
    eyebrow: "중증 치료 전문",
    title: "중증 치료·수술",
    summary: "암, 장기, 혈관, 신경계 질환까지 치료 목적에 맞는 상급병원과 전문 진료진을 연결합니다.",
    departments: [
      { title: "암 치료", items: "항암, 방사선, 수술 치료 중심 계획 수립" },
      { title: "간·췌담도", items: "간암, 담도질환, 췌장질환 수술 및 추적 관리" },
      { title: "갑상선·내분비", items: "갑상선암, 결절, 호르몬 질환 집중 진료" },
      { title: "혈액종양", items: "백혈병, 림프종, 골수이식 상담" },
      { title: "뇌신경", items: "뇌종양, 척추 종양, 신경외과 수술 연결" },
      { title: "심장·혈관", items: "중재 시술, 우회술, 회복 단계 지원" },
    ],
  },
  {
    key: "checkup",
    label: "건강검진",
    image: "/건강검진.jpg",
    eyebrow: "프리미엄 체크업",
    title: "건강검진",
    summary: "기본 검진부터 VIP 종합검진까지 체류 일정과 목적에 맞는 패키지를 제안합니다.",
    departments: [
      { title: "기본 검진", items: "혈액, 초음파, 흉부 촬영 등 기초 검사" },
      { title: "종합 검진", items: "CT, MRI, 내시경 포함 정밀 프로그램" },
      { title: "여성 검진", items: "유방, 자궁, 갑상선 중심 정밀 체크" },
      { title: "남성 검진", items: "전립선, 심혈관, 간 기능 집중 확인" },
      { title: "암 스크리닝", items: "주요 암 조기 발견을 위한 고급 검사" },
      { title: "사후 연계", items: "이상 소견 시 전문 진료 예약 연결" },
    ],
  },
  {
    key: "beauty",
    label: "피부과·성형",
    image: "/피부과.jpg",
    eyebrow: "뷰티 메디컬",
    title: "피부과·성형",
    summary: "시술부터 수술, 회복 단계 관리까지 한 번에 연결해 체류 중 일정을 효율적으로 운영합니다.",
    departments: [
      { title: "안면 성형", items: "눈, 코, 안면윤곽 중심 맞춤 상담" },
      { title: "리프팅", items: "실리프팅, 안면거상, 레이저 리프팅" },
      { title: "피부 레이저", items: "색소, 탄력, 흉터 개선 프로그램" },
      { title: "스킨부스터", items: "재생, 수분, 탄력 관리 집중 케어" },
      { title: "체형 관리", items: "지방흡입, 지방이식, 윤곽 개선" },
      { title: "회복 관리", items: "사후 진료와 체류 동선 조정" },
    ],
  },
  {
    key: "eye",
    label: "안과",
    image: "/specialty-ophthalmology.jpg",
    eyebrow: "정밀 시력 교정",
    title: "안과",
    summary: "시력교정부터 백내장, 망막 질환까지 검사와 수술 일정을 정밀하게 조율합니다.",
    departments: [
      { title: "시력 교정", items: "라식, 라섹, 스마일라식" },
      { title: "백내장", items: "정밀 검사와 인공수정체 수술 상담" },
      { title: "망막", items: "황반변성, 망막박리, 당뇨망막병증" },
      { title: "녹내장", items: "안압 검사와 수술 또는 약물 치료" },
      { title: "소아 안과", items: "사시, 약시, 성장기 시력 관리" },
      { title: "수술 후 관리", items: "회복 체크와 귀국 후 주의사항 안내" },
    ],
  },
  {
    key: "spine",
    label: "척추·관절",
    image: "/정형외과.jpg",
    eyebrow: "재활 중심 진료",
    title: "척추·관절",
    summary: "비수술적 치료부터 수술과 재활까지 이동 부담을 줄이는 일정으로 설계합니다.",
    departments: [
      { title: "척추", items: "디스크, 협착증, 척추 내시경 수술" },
      { title: "무릎", items: "인공관절, 반월상연골, 스포츠 손상" },
      { title: "어깨", items: "회전근개, 오십견, 관절경 수술" },
      { title: "고관절", items: "퇴행성 질환과 정밀 진단" },
      { title: "재활", items: "물리치료, 운동치료, 체형 분석" },
      { title: "통합 플랜", items: "진료와 재활 스케줄을 함께 운영" },
    ],
  },
  {
    key: "heart",
    label: "심장·혈관",
    image: "/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png",
    eyebrow: "심혈관 정밀 진단",
    title: "심장·혈관",
    summary: "심장 초음파, 심혈관 검사, 중재 시술과 수술 상담까지 상급병원 중심으로 연결합니다.",
    departments: [
      { title: "심장내과", items: "협심증, 부정맥, 심부전 진료" },
      { title: "정밀 검사", items: "심초음파, 관상동맥 CT, 혈관 검사" },
      { title: "중재 시술", items: "스텐트, 혈관 중재술 일정 조율" },
      { title: "수술", items: "우회술, 판막 수술 등 고난도 치료" },
      { title: "만성 관리", items: "고혈압, 고지혈증, 약물 관리" },
      { title: "사후 연계", items: "추적 검진과 온라인 후속 상담" },
    ],
  },
  {
    key: "dental",
    label: "치과",
    image: "/magnific__beigetoned-luxury-hospital-lobby-waiting-area-spac__11816.png",
    eyebrow: "정밀 구강 케어",
    title: "치과",
    summary: "임플란트, 심미치료, 교정까지 체류 일정에 맞춰 완성도 높은 구강 치료 플랜을 제안합니다.",
    departments: [
      { title: "임플란트", items: "전체 및 부분 임플란트, 뼈이식 상담" },
      { title: "교정", items: "투명교정과 부분교정 중심 상담" },
      { title: "심미 보철", items: "라미네이트, 올세라믹, 미백" },
      { title: "보존 치료", items: "충치, 신경치료, 크라운" },
      { title: "구강외과", items: "사랑니 발치와 턱관절 상담" },
      { title: "후속 관리", items: "방문 간격에 맞춘 추적 진료 안내" },
    ],
  },
];

export function TreatmentExplorer() {
  const [activeKey, setActiveKey] = useState(categories[0].key);
  const activeCategory = categories.find((item) => item.key === activeKey) ?? categories[0];

  return (
    <section className="section-block treatment-section">
      <div className="container">
        <div className="treatment-tabs" role="tablist" aria-label="치료 카테고리">
          {categories.map((item) => (
            <button
              key={item.key}
              className={item.key === activeCategory.key ? "is-active" : undefined}
              type="button"
              onClick={() => setActiveKey(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="treatment-layout">
          <article className="treatment-card">
            <div className="treatment-card-image">
              <Image src={activeCategory.image} alt={activeCategory.title} fill sizes="(max-width: 900px) 100vw, 32vw" />
            </div>
            <div className="treatment-card-copy">
              <p className="section-tag">{activeCategory.eyebrow}</p>
              <h2>{activeCategory.title}</h2>
              <p>{activeCategory.summary}</p>
              <a className="primary-cta" href="/support">
                상담 신청하기
              </a>
            </div>
          </article>

          <div className="treatment-departments">
            <p className="treatment-department-title">{activeCategory.label} 세부 진료안</p>
            <div className="treatment-department-grid">
              {activeCategory.departments.map((item) => (
                <article className="treatment-department" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.items}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
