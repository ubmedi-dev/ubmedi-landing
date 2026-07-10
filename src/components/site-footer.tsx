import Image from "next/image";
import Link from "next/link";
import { contactSummary, footerLinks } from "@/app/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/footer/footer-logo-white.svg" alt="UB MEDI" width={154} height={38} />
          <p>You, Better Medical</p>
          <strong>해외 환자를 위한 프리미엄 메디컬 컨시어지</strong>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Image src="/footer/facebook.svg" alt="Facebook" width={18} height={18} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Image src="/footer/instagram.svg" alt="Instagram" width={18} height={18} />
            </a>
            <a href="https://wa.me/821033907060" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Image src="/messenger/whatsapp.svg" alt="WhatsApp" width={18} height={18} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>24시간 상담 접수</p>
          <p>메일과 메신저 문의 가능</p>
          <p>{contactSummary.phone}</p>
          <p>{contactSummary.email}</p>
          <p>{contactSummary.address}</p>
        </div>

        <div className="footer-column">
          <h3>서비스</h3>
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h3>Subscribe & Newsletter</h3>
          <div className="footer-newsletter">
            <input type="email" placeholder="Email address" />
            <button type="button">Submit Now</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
