export default function JsonLd({ pageTitle, slug }: { pageTitle: string, slug: string }) {

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://YOUR_VERCEL_URL';
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    url: `${siteUrl}/landing/${slug}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: pageTitle, item: `${siteUrl}/landing/${slug}` }
      ]
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}