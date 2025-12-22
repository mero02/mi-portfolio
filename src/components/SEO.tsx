import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  page?: 'home' | 'about' | 'skills' | 'projects' | 'contact';
  project?: {
    title: string;
    description: string;
    image?: string;
    technologies?: string[];
  };
}

const SEO = ({ page = 'home', project }: SEOProps) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Get SEO data based on current page and language
  const getSEOData = () => {
    const baseUrl = 'https://mauro-sanpedro.com';
    const currentUrl = `${baseUrl}${window.location.pathname}`;
    
    // Base SEO data
    let seoData = {
      title: t('seo.home.title'),
      description: t('seo.home.description'),
      keywords: t('seo.home.keywords'),
      url: currentUrl,
      image: '/images/profile.png',
      locale: language === 'es' ? 'es_AR' : 'en_US',
      language: language === 'es' ? 'Spanish' : 'English',
      type: 'website',
      siteName: language === 'es' ? 'Portfolio Mauro San Pedro' : 'Mauro San Pedro Portfolio',
      author: 'Mauro G. San Pedro'
    };
    
    // Override with page-specific data
    if (page && page !== 'home') {
      const pageSEO = t(`seo.${page}`, { defaultValue: {} }) as any;
      if (pageSEO && typeof pageSEO === 'object') {
        seoData = {
          ...seoData,
          title: pageSEO.title || seoData.title,
          description: pageSEO.description || seoData.description,
          keywords: pageSEO.keywords || seoData.keywords
        };
      }
    }
    
    // Override with project-specific data if provided
    if (project) {
      seoData = {
        ...seoData,
        title: `${project.title} | ${seoData.title}`,
        description: project.description,
        keywords: project.technologies?.join(', ') || seoData.keywords,
        image: project.image || seoData.image,
        type: 'article'
      };
    }
    
    return seoData;
  };
  
  const seo = getSEOData();
  const fullTitle = seo.title.includes('Mauro') ? seo.title : `${seo.title} | Mauro G. San Pedro`;
  
  // Dynamic structured data
  const getStructuredData = () => {
    const baseData: any = {
      "@context": "https://schema.org",
      "@type": project ? "CreativeWork" : "Person",
      "name": project ? project.title : "Mauro G. San Pedro",
      "jobTitle": language === 'es' 
        ? "Analista de Sistemas y Desarrollador Full Stack" 
        : "Systems Analyst and Full Stack Developer",
      "description": seo.description,
      "url": seo.url,
      "image": seo.image,
      "sameAs": [
        "https://github.com/mero02",
        "https://www.linkedin.com/in/mauro-san-pedro/",
        "mailto:mauro.g.sanpedro@gmail.com"
      ],
      "knowsAbout": [
        "React",
        "TypeScript",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Docker",
        language === 'es' ? "Desarrollo Full Stack" : "Full Stack Development"
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
      },
      "inLanguage": seo.language
    };
    
    // Add project-specific structured data
    if (project) {
      baseData["creator"] = {
        "@type": "Person",
        "name": "Mauro G. San Pedro"
      };
      baseData["programmingLanguage"] = project.technologies;
    }
    
    return baseData;
  };
  
  const structuredData = getStructuredData();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={seo.language} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:site_name" content={seo.siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={fullTitle} />
      
      {/* LinkedIn */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/portfolio.svg" />
      <link rel="icon" type="image/png" href="/images/profile.png" />
      <link rel="apple-touch-icon" href="/images/profile.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Helmet>
  );
};

export default SEO;