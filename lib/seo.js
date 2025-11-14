export const siteConfig = {
  name: "Aly Sibak",
  title: "Aly Sibak - Full Stack Developer | React, TypeScript, AWS Expert",
  description: "3rd-year Computer Science Co-op student at University of Guelph with proven industry experience building AI-powered systems at P&P Optica. Specializing in React, TypeScript, Node.js, and AWS.",
  url: "https://alysibak.com",
  ogImage: "https://alysibak.com/og-image.jpg",
  links: {
    github: "https://github.com/alysibak",
    linkedin: "https://linkedin.com/in/aly-sibak-721b85252",
    email: "mailto:asibak@uoguelph.ca",
  },
  author: {
    name: "Aly Sibak",
    email: "asibak@uoguelph.ca",
    url: "https://alysibak.com",
  },
  keywords: [
    "Aly Sibak",
    "Full Stack Developer",
    "React Developer",
    "TypeScript Expert",
    "Next.js Developer",
    "AWS Cloud",
    "Web Development",
    "Software Engineer",
    "University of Guelph",
    "Computer Science Co-op",
    "P&P Optica",
    "Frontend Development",
    "Backend Development",
    "JavaScript",
    "Node.js",
    "Portfolio",
  ],
};

export const getPersonStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aly Sibak",
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.jpeg`,
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "P&P Optica",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Guelph",
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    email: "asibak@uoguelph.ca",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ontario",
      addressCountry: "Canada",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Next.js",
      "AWS",
      "Full Stack Development",
      "Web Development",
      "Software Engineering",
    ],
  };
};

export const getWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: "Aly Sibak",
    },
    inLanguage: "en-US",
  };
};

export const generateMetadata = ({ title, description, path = "", image }) => {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageUrl = `${siteConfig.url}${path}`;
  const pageImage = image || siteConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      "Aly Sibak",
      "Full Stack Developer",
      "React Developer",
      "TypeScript",
      "Next.js",
      "Web Development",
      "Software Engineer",
      "University of Guelph",
      "Computer Science",
      "AWS",
      "Node.js",
      "P&P Optica",
    ],
    authors: [{ name: "Aly Sibak", url: siteConfig.url }],
    creator: "Aly Sibak",
    publisher: "Aly Sibak",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: "@alysibak",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
};

// FAQ Schema for SEO
export const getFAQStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies does Aly Sibak specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aly Sibak specializes in React, TypeScript, JavaScript, Next.js, Node.js, NestJS, AWS, and full-stack web development. He has proven industry experience building AI-powered systems and hyperspectral imaging applications."
        }
      },
      {
        "@type": "Question",
        name: "Is Aly Sibak available for hire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Aly Sibak is actively seeking Summer 2026 Co-op positions in software development. He is a 3rd-year Computer Science student at the University of Guelph."
        }
      },
      {
        "@type": "Question",
        name: "What experience does Aly Sibak have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aly Sibak has professional experience as a Software Developer Co-op at P&P Optica, where he built AI-powered Smart Imaging Systems, developed version control tools, and delivered scalable solutions using TypeScript, React, Node.js, and AWS."
        }
      },
      {
        "@type": "Question",
        name: "How can I contact Aly Sibak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Aly Sibak via email at asibak@uoguelph.ca, through LinkedIn at linkedin.com/in/aly-sibak-721b85252, or on GitHub at github.com/alysibak."
        }
      }
    ]
  };
};

// Organization Schema
export const getOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aly Sibak Portfolio",
    url: siteConfig.url,
    logo: `${siteConfig.url}/profile.jpeg`,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "asibak@uoguelph.ca",
      contactType: "Professional Inquiry",
      areaServed: "CA",
      availableLanguage: "en"
    }
  };
};

// Breadcrumb Schema
export const getBreadcrumbStructuredData = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`
    }))
  };
};

// ProfilePage Schema
export const getProfilePageStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2025-01-01T00:00:00+00:00",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: "Aly Sibak",
      alternateName: "Aly",
      identifier: siteConfig.url,
      description: siteConfig.description,
      image: `${siteConfig.url}/profile.jpeg`,
      sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
      ]
    }
  };
};

// ItemList Schema for Projects
export const getProjectsStructuredData = (projects) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        author: {
          "@type": "Person",
          name: "Aly Sibak"
        },
        programmingLanguage: project.techStack,
        url: project.githubLink
      }
    }))
  };
};
