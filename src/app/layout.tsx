import type { Metadata } from "next";
import "./globals.css";

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  title: "유비메디 UB MEDI | You, Better Medical",
  description:
    "유비메디(UB MEDI)는 글로벌 환자를 위한 대한민국 프리미엄 메디컬 컨시어지입니다. 서울 주요 대학병원 진료 예약부터 통역, 숙박, 이동까지 원스톱으로 지원합니다.",
  openGraph: {
    title: "유비메디 UB MEDI | You, Better Medical",
    description:
      "글로벌 환자를 위한 대한민국 프리미엄 메디컬 컨시어지. 병원 예약부터 통역, 숙박까지 유비메디와 함께하세요.",
    images: [
      {
        url: "/ubmedi-social-card.png",
        width: 1200,
        height: 630,
        alt: "유비메디 UB MEDI | You, Better Medical",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "유비메디 UB MEDI | You, Better Medical",
    description:
      "글로벌 환자를 위한 대한민국 프리미엄 메디컬 컨시어지. 병원 예약부터 통역, 숙박까지 유비메디와 함께하세요.",
    images: ["/ubmedi-social-card.png"],
  },
  icons: {
    icon: "/ubmedi-icon.png",
    apple: "/ubmedi-icon.png",
    shortcut: "/ubmedi-icon.png",
  },
  verification: {
    other: {
      "naver-site-verification": "a6be6a9d3401c79a23041b3fa795b4aa2769556b",
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
