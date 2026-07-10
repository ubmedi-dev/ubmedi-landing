import type { Metadata } from "next";
import "./globals.css";

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  title: "유비메디 UB MEDI | You, Better Medical",
  description:
    "유비메디는 해외 환자를 위한 프리미엄 메디컬 컨시어지입니다. 병원 제안, 예약, 통역, 체류 동선, 사후 관리까지 통합 지원합니다.",
  openGraph: {
    title: "유비메디 UB MEDI | You, Better Medical",
    description:
      "해외 환자를 위한 한국 의료 컨시어지. 병원 제안부터 통역, 픽업, 체류 동선과 사후 관리까지 유비메디가 함께합니다.",
    images: [
      {
        url: "/ubmedi-social-card.png",
        width: 1200,
        height: 630,
        alt: "유비메디 UB MEDI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "유비메디 UB MEDI | You, Better Medical",
    description:
      "해외 환자를 위한 한국 의료 컨시어지. 병원 제안부터 통역, 픽업, 체류 동선과 사후 관리까지 유비메디가 함께합니다.",
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
