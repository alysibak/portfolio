import "./globals.css";
import "./theme-globals.css";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/components/ThemeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollProgress from "@/components/ScrollProgress";
import SkipLink from "@/components/SkipLink";
import AnimatedBackground from "@/components/AnimatedBackground";
import {
  generateMetadata as generateSEOMetadata,
  getPersonStructuredData,
  getWebsiteStructuredData,
  getFAQStructuredData,
  getOrganizationStructuredData,
  getProfilePageStructuredData
} from "@/lib/seo";

export const metadata = generateSEOMetadata({});

export default function RootLayout({ children }) {
  const personData = getPersonStructuredData();
  const websiteData = getWebsiteStructuredData();
  const faqData = getFAQStructuredData();
  const organizationData = getOrganizationStructuredData();
  const profileData = getProfilePageStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileData),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className="antialiased animated-gradient-bg dark:animated-gradient-bg-dark overflow-x-hidden"
        suppressHydrationWarning
      >
        <AnimatedBackground />
        <SkipLink />
        <ScrollProgress />
        <ErrorBoundary>
          <ThemeProvider>
            <main id="main-content" className="relative z-10">
              {children}
            </main>
            <Analytics />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
