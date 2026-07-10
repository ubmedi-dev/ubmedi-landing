"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { messengerLinks, navItems } from "@/app/site-content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link className="brand-mark" href="/" aria-label="UB MEDI home">
          <Image src="/UB MEDI LOGO.svg" alt="UB MEDI" width={124} height={28} priority />
        </Link>

        <nav className="header-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <span className="header-badge">KOR</span>
          <a className="header-phone" href="tel:+821033907060">
            +82 10-3390-7060
          </a>
          <div className="header-messengers" aria-label="Messenger links">
            {messengerLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                <Image src={item.icon} alt={item.label} width={18} height={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
