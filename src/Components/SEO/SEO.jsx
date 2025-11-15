import { Helmet } from 'react-helmet-async';

function SEO({ 
  title, 
  description, 
  keywords, 
  image = '/image.svg',
  url,
  type = 'website',
  noindex = false
}) {
  const siteUrl = 'https://www.manpasand.us';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const defaultTitle = 'Manpasand Inc. - Indian Entertainment & Event Management';
  const defaultDescription = 'USA-based event management organization promoting Indian culture through stage performances, music events, and artist tours since 1999.';
  const defaultKeywords = 'Indian entertainment, event management, Indian culture, stage performances, music events, Gujarati artists, Indian artists USA, Manpasand, cultural events';

  const seoTitle = title ? `${title} | Manpasand Inc.` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Manpasand Inc." />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Manpasand Inc.",
          "url": siteUrl,
          "logo": `${siteUrl}/image.svg`,
          "description": "USA-based event management organization promoting Indian culture through stage performances and music events since 1999.",
          "foundingDate": "1999",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "sameAs": []
        })}
      </script>
    </Helmet>
  );
}

export default SEO;

