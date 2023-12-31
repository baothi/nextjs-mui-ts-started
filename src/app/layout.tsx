import * as React from 'react';
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import AppHeader from "@/components/header/app.header";
import AppFooter from '@/components/footer/app.footer';
import NextAuthProvider from '@/lib/next.auth.provider';
import { ToastProvider } from '@/utils/toast';
import { TrackContextProvider } from '@/lib/track.wrapper';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NextAuthProvider>
            <ToastProvider>
              <TrackContextProvider>
                {children}
              </TrackContextProvider>
            </ToastProvider>
          </NextAuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
