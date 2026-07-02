import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UB MEDI | 프리미엄 맞춤 메디컬 투어",
  description: "한국 프리미엄 메디컬 투어를 위한 UB MEDI 랜딩 페이지",
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
