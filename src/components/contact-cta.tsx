import { ReactNode } from "react";
import { ContactForm } from "@/components/contact-form";

type ContactCtaProps = {
  title: ReactNode;
  description: string;
  points: string[];
};

export function ContactCta({ title, description, points }: ContactCtaProps) {
  return (
    <section className="contact-section">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="section-tag is-light">CONTACT</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className="contact-points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
