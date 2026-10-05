import type { Metadata } from "next";

export const siteConfig = {
  name: "MOHTARM SAAD",
  fullName: "Muhammad Saad",
  title: "MOHTARM SAAD | Computer Engineering, Edge AI & Systems",
  description:
    "Applied Computer Vision, Edge AI, and Systems Engineering. Senior Computer Engineering undergraduate at NUTECH Islamabad.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mohtarmsaad.com",
  ogImage: "/profile.jpg",
  author: "Muhammad Saad",
  links: {
    github: "https://github.com/Im-Saad08",
    email: "imsaad.work@gmail.com",
  },
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonicalUrl,
  type = "website",
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  type?: "website" | "article";
} = {}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;

  return {
    title: metaTitle,
    description,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl || siteConfig.url,
    },
    openGraph: {
      title: metaTitle,
      description,
      url: canonicalUrl || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description,
      images: [image],
      creator: "@Im_Saad08",
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
  };
}
