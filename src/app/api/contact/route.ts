import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  nation?: string;
  email?: string;
  messenger?: string;
  interest?: string;
  visitYear?: string;
  visitMonth?: string;
  visitDay?: string;
  inquiry?: string;
};

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

export async function POST(request: Request) {
  try {
    for (const key of requiredEnv) {
      if (!process.env[key]) {
        return NextResponse.json({ error: `Missing environment variable: ${key}` }, { status: 500 });
      }
    }

    const payload = (await request.json()) as ContactPayload;

    if (!payload.name || !payload.email || !payload.interest) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER || "no-reply@ubmedi.com";
    const visitDate = [payload.visitYear, payload.visitMonth, payload.visitDay].filter(Boolean).join(" ");
    const subject = `[UB MEDI 상담신청] ${payload.name}`;
    const text = [
      `성함: ${payload.name ?? ""}`,
      `국적: ${payload.nation ?? ""}`,
      `이메일: ${payload.email ?? ""}`,
      `메신저: ${payload.messenger ?? ""}`,
      `관심 분야: ${payload.interest ?? ""}`,
      `희망 방문 시기: ${visitDate}`,
      "",
      "[추가 문의 사항]",
      payload.inquiry ?? "",
    ].join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2626;">
        <h2 style="margin-bottom: 16px;">UB MEDI 상담 신청</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tbody>
            <tr><td style="padding: 8px 0; font-weight: 700; width: 160px;">성함</td><td style="padding: 8px 0;">${escapeHtml(payload.name ?? "")}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">국적</td><td style="padding: 8px 0;">${escapeHtml(payload.nation ?? "")}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">이메일</td><td style="padding: 8px 0;">${escapeHtml(payload.email ?? "")}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">메신저</td><td style="padding: 8px 0;">${escapeHtml(payload.messenger ?? "")}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">관심 분야</td><td style="padding: 8px 0;">${escapeHtml(payload.interest ?? "")}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">희망 방문 시기</td><td style="padding: 8px 0;">${escapeHtml(visitDate)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700; vertical-align: top;">추가 문의 사항</td><td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(payload.inquiry ?? "")}</td></tr>
          </tbody>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: "head@ubmedi.com",
      replyTo: payload.email || undefined,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ error: "Failed to send contact email" }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
