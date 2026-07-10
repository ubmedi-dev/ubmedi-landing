import { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main className="landing-shell">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
