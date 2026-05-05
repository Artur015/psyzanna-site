import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const resolvedSiteUrl = metadataBase?.toString().replace(/\/$/, "");

const siteName = "Жанна Кононенко";
const siteTitle =
  "Жанна Кононенко | Русскоязычный психолог онлайн, 30 минут бесплатно";
const siteDescription =
  "Русскоязычный психолог и сексолог Жанна Кононенко проводит онлайн-консультации. Первая сессия 30 минут бесплатно: индивидуальная терапия, работа с парами, отношения и близость.";

const websiteId = resolvedSiteUrl ? `${resolvedSiteUrl}/#website` : "#website";
const webpageId = resolvedSiteUrl ? `${resolvedSiteUrl}/#webpage` : "#webpage";
const personId = resolvedSiteUrl ? `${resolvedSiteUrl}/#person` : "#person";
const serviceId = resolvedSiteUrl ? `${resolvedSiteUrl}/#service` : "#service";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteName,
      description: siteDescription,
      inLanguage: "ru",
      publisher: {
        "@id": personId,
      },
      ...(resolvedSiteUrl
        ? {
            url: resolvedSiteUrl,
          }
        : {}),
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "ru",
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": serviceId,
      },
      mainEntity: {
        "@id": serviceId,
      },
      ...(resolvedSiteUrl
        ? {
            url: resolvedSiteUrl,
          }
        : {}),
    },
    {
      "@type": "Person",
      "@id": personId,
      name: siteName,
      jobTitle: "Психолог и сексолог",
      description:
        "Русскоязычный психолог и сексолог, специализирующийся на отношениях, близости, индивидуальной и парной терапии онлайн. Первая сессия 30 минут бесплатно.",
      email: "sanna.kononenko@gmail.com",
      knowsAbout: [
        "Психология",
        "Сексология",
        "Семейная терапия",
        "Консультации для пар",
        "Индивидуальная терапия",
      ],
      sameAs: [
        "https://www.facebook.com/share/1GUQUaWn9v/?mibextid=wwXIfr",
        "https://www.instagram.com/psy_zannakononenko?igsh=MTZobXJycDduNHhjZQ%3D%3D&utm_source=qr",
      ],
      ...(resolvedSiteUrl
        ? {
            url: resolvedSiteUrl,
            image: `${resolvedSiteUrl}/opengraph-image`,
          }
        : {}),
    },
    {
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: "Русскоязычный психолог и сексолог Жанна Кононенко",
      description: siteDescription,
      provider: {
        "@id": personId,
      },
      areaServed: "Europe",
      availableLanguage: ["ru"],
      serviceType: [
        "Индивидуальная терапия",
        "Консультации для пар",
        "Семейная терапия",
        "Сексология",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Первая сессия 30 минут",
          price: "0",
          priceCurrency: "EUR",
          category: "Первичная консультация",
        },
        {
          "@type": "Offer",
          name: "Индивидуальная сессия",
          price: "80",
          priceCurrency: "EUR",
          category: "Индивидуальная терапия",
        },
        {
          "@type": "Offer",
          name: "Парная / семейная терапия",
          price: "150",
          priceCurrency: "EUR",
          category: "Семейная терапия",
        },
      ],
      ...(resolvedSiteUrl
        ? {
            url: resolvedSiteUrl,
          }
        : {}),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase,
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "Жанна Кононенко",
    "психолог онлайн",
    "сексолог онлайн",
    "русскоязычный психолог",
    "русскоязычный психолог онлайн",
    "русскоязычный психолог в Европе",
    "психолог для русскоязычных",
    "семейный психолог",
    "консультации для пар",
    "индивидуальная терапия",
    "сексология",
    "психолог по отношениям",
    "семейная терапия онлайн",
    "первая консультация бесплатно",
    "первая сессия бесплатно",
    "психолог 30 минут бесплатно",
  ],
  alternates: metadataBase
    ? {
        canonical: "/",
      }
    : undefined,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName,
    title: siteTitle,
    description: siteDescription,
    ...(metadataBase
      ? {
          url: "/",
          images: [
            {
              url: "/opengraph-image",
              width: 1200,
              height: 630,
              alt: "Жанна Кононенко — русскоязычный психолог онлайн, первая сессия 30 минут бесплатно",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    ...(metadataBase
      ? {
          images: ["/opengraph-image"],
        }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "67O0S1zg9EHpjil88LntY9EGABCaA4b4nOQtlOmJWCc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
