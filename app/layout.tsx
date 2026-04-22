import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const resolvedSiteUrl = metadataBase?.toString().replace(/\/$/, "");
const siteDescription =
  "Онлайн-консультации психолога и сексолога Жанны Кононенко. Индивидуальная терапия, работа с парами, вопросы отношений и близости.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": resolvedSiteUrl ? `${resolvedSiteUrl}/#website` : "#website",
      name: "Жанна Кононенко",
      inLanguage: "ru",
      description: siteDescription,
      ...(resolvedSiteUrl
        ? {
            url: resolvedSiteUrl,
          }
        : {}),
    },
    {
      "@type": "Person",
      "@id": resolvedSiteUrl ? `${resolvedSiteUrl}/#person` : "#person",
      name: "Жанна Кононенко",
      jobTitle: "Психолог и сексолог",
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
      "@id": resolvedSiteUrl ? `${resolvedSiteUrl}/#service` : "#service",
      name: "Психолог и сексолог Жанна Кононенко",
      description: siteDescription,
      provider: {
        "@id": resolvedSiteUrl ? `${resolvedSiteUrl}/#person` : "#person",
      },
      serviceType: [
        "Индивидуальная терапия",
        "Консультации для пар",
        "Семейная терапия",
        "Сексология",
      ],
      areaServed: "EU",
      availableLanguage: ["ru"],
      offers: [
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
  title: "Жанна Кононенко | Психолог и сексолог",
  description: siteDescription,
  keywords: [
    "Жанна Кононенко",
    "психолог",
    "сексолог",
    "семейный психолог",
    "консультации для пар",
    "индивидуальная терапия",
    "сексология",
    "психолог онлайн",
    "сексолог онлайн",
    "психолог онлайн Европа",
    "русскоязычный психолог",
    "русскоязычный психолог онлайн",
    "сексолог консультация онлайн",
    "семейная терапия",
  ],
  alternates: metadataBase
    ? {
        canonical: "/",
      }
    : undefined,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Жанна Кононенко",
    title: "Жанна Кононенко | Психолог и сексолог",
    description: siteDescription,
    ...(metadataBase
      ? {
          url: "/",
          images: [
            {
              url: "/opengraph-image",
              width: 1200,
              height: 630,
              alt: "Жанна Кононенко — психолог и сексолог",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Жанна Кононенко | Психолог и сексолог",
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
      </body>
    </html>
  );
}
