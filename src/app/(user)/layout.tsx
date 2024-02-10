import * as React from 'react';
import AppHeader from "@/components/header/app.header";
import AppFooter from '@/components/footer/app.footer';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'nguyễn bảo thi like page',
  description: 'nguyễn bảo thi like page nè cu',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
        {children}
        <div style={{ marginBottom: '100px' }}></div>
      <AppFooter />
    </>
  );
}
