import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
  siteName?: string;
  author?: string;
}

const SEO = ({
  title = 'Mauro G. San Pedro - Analista de Sistemas y Desarrollador Full Stack',
  description = 'Portafolio profesional de Mauro G. San Pedro, Analista de Sistemas y Desarrollador Full Stack especializado en React, FastAPI, Python y tecnologías modernas.',
  keywords = 'desarrollador full stack, react, fastapi, python, typescript, analista sistemas, portfolio',
  image = '/images/profile.png',
  url = 'https://mauro-sanpedro.com',
  type = 'website',
  locale = 'es_AR',
  siteName = 'Portfolio Mauro San Pedro',
  author = 'Mauro G. San Pedro'
}: SEOProps) => {
  const fullTitle = title === 'Mauro G. San Pedro - Analista de Sistemas y Desarrollador Full Stack' 
    ? title 
    : `${title} | Mauro G. San Pedro`;

  // Structured data as string to avoid parsing issues
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mauro G. San Pedro",
    "jobTitle": "Analista de Sistemas y Desarrollador Full Stack",
    "description": description,
    "url": url,
    "image": image,
    "sameAs": [
      "https://github.com/mero02",
      "https://www.linkedin.com/in/mauro-san-pedro/",
      "mailto:mero2sp@gmail.com"
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Docker",
      "Full Stack Development"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universidad Nacional de la Patagonia San Juan Bosco"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chubut",
      "addressCountry": "AR"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Mauro G. San Pedro - Desarrollador Full Stack" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Mauro G. San Pedro - Desarrollador Full Stack" />
      
      {/* LinkedIn */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/portfolio.svg" />
      <link rel="icon" type="image/png" href="/images/profile.png" />
      <link rel="apple-touch-icon" href="/images/profile.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data - Person */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Helmet>
  );
};

export default SEO;