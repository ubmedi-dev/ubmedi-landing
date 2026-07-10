"use client";

import { FormEvent, useState } from "react";

type ContactFormState = {
  name: string;
  nation: string;
  email: string;
  messenger: string;
  interest: string;
  visitYear: string;
  visitMonth: string;
  visitDay: string;
  inquiry: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const visitYears = ["연도", "2026", "2027", "2028"];
const visitMonths = ["월", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const visitDays = ["일", ...Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, "0"))];

const initialState: ContactFormState = {
  name: "",
  nation: "",
  email: "",
  messenger: "",
  interest: "",
  visitYear: visitYears[0],
  visitMonth: visitMonths[0],
  visitDay: visitDays[0],
  inquiry: "",
};

function getSubmitLabel(state: SubmitState) {
  if (state === "submitting") {
    return "전송 중...";
  }

  return "지금 바로 무료 상담 신청";
}

export function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState>(initialState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const handleFieldChange = (field: keyof ContactFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      setSubmitState("success");
      setMessage("상담 신청이 정상적으로 접수되었습니다. 확인 후 연락드리겠습니다.");
      setFormState(initialState);
    } catch (error) {
      console.error(error);
      setSubmitState("error");
      setMessage("메일 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <h3>상담 신청서 작성</h3>
      <p className="contact-form-note">아래 항목을 남겨주시면 24시간 이내에 연락드립니다.</p>

      <div className="contact-two-col">
        <label>
          이름
          <input
            type="text"
            placeholder="성함을 입력해 주세요"
            value={formState.name}
            onChange={(event) => handleFieldChange("name", event.target.value)}
          />
        </label>
        <label>
          국적
          <input
            type="text"
            placeholder="예: 중국"
            value={formState.nation}
            onChange={(event) => handleFieldChange("nation", event.target.value)}
          />
        </label>
      </div>

      <label>
        이메일
        <input
          type="email"
          placeholder="example@email.com"
          value={formState.email}
          onChange={(event) => handleFieldChange("email", event.target.value)}
        />
      </label>

      <label>
        메신저 ID 또는 연락 채널
        <input
          type="text"
          placeholder="WhatsApp, WeChat, Viber 등"
          value={formState.messenger}
          onChange={(event) => handleFieldChange("messenger", event.target.value)}
        />
      </label>

      <label>
        방문 희망 시기
        <div className="visit-grid">
          <select value={formState.visitYear} onChange={(event) => handleFieldChange("visitYear", event.target.value)}>
            {visitYears.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select value={formState.visitMonth} onChange={(event) => handleFieldChange("visitMonth", event.target.value)}>
            {visitMonths.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select value={formState.visitDay} onChange={(event) => handleFieldChange("visitDay", event.target.value)}>
            {visitDays.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </label>

      <label>
        관심 분야
        <input
          type="text"
          placeholder="치료 목적, 증상, 희망 병원 등을 적어 주세요"
          value={formState.interest}
          onChange={(event) => handleFieldChange("interest", event.target.value)}
        />
      </label>

      <label>
        추가 정보 및 문의사항
        <textarea
          rows={5}
          placeholder="현재 상태, 필요한 검사나 수술, 일정 관련 요청을 자유롭게 적어 주세요"
          value={formState.inquiry}
          onChange={(event) => handleFieldChange("inquiry", event.target.value)}
        />
      </label>

      <button className="contact-submit" type="submit" disabled={submitState === "submitting"}>
        {getSubmitLabel(submitState)}
      </button>

      {message ? <p className={`contact-feedback is-${submitState}`}>{message}</p> : null}
    </form>
  );
}
