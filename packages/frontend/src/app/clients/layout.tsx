"use client";

import { Providers } from "@/common";
import { ToastsProvider } from "@/hooks";

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <ToastsProvider>
        <main>{children}</main>
      </ToastsProvider>
    </Providers>
  );
}