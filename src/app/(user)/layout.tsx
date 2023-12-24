import * as React from 'react';
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import AppHeader from "@/components/header/app.header";
import AppFooter from '@/components/footer/app.footer';
import NextAuthProvider from '@/lib/next.auth.provider';



export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NextAuthProvider>
            <AppHeader />
            {children}
            <AppFooter />
          </NextAuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
