import { GraphQLClient } from 'graphql-request';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

const HeroBlock = dynamic(() => import('../../../components/HeroBlock'));
const TwoColumnRow = dynamic(() => import('../../../components/TwoColumnRow'));
const ImageGrid = dynamic(() => import('../../../components/ImageGrid'));
import JsonLd from '../../../components/JsonLd';

// --- GraphQL Queries ---
const HERO_BLOCK_QUERY = `
  query GetHeroBlock($id: String!) {
    heroBlock(id: $id) {
      __typename
      sys { id }
      heading
      subtitle
      cta
      backgroundImage { url, width, height }
    }
  }
`;

const TWO_COLUMN_ROW_QUERY = `
  query GetTwoColumnRow($id: String!) {
    twoColumnRow(id: $id) {
      __typename
      sys { id }
      heading
      subtitle
      cta
      image { url, width, height }
    }
  }
`;

const X2_IMAGE_GRID_QUERY = `
  query GetX2ImageGrid($id: String!) {
    x2ImageGrid(id: $id) {
      __typename
      sys { id }
      imagesCollection {
        items {
          url
          width
          height
        }
      }
    }
  }
`;

// --- Data Fetching Function ---
async function getPageData(slug) {
  const client = new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    { headers: { Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}` } }
  );

  const layoutQuery = `
    query GetLandingPageLayout($slug: String!) {
      landingPageCollection(where: { slug: $slug }, limit: 1) {
        items {
          title
          layoutConfig
        }
      }
    }
  `;

  const layoutResponse = await client.request(layoutQuery, { slug });
  const pageLayout = layoutResponse.landingPageCollection.items[0];

  if (!pageLayout || !pageLayout.layoutConfig) {
    return null;
  }

  const componentsToFetch = pageLayout.layoutConfig.components;
  const fetchedComponents = await Promise.all(
    componentsToFetch.map(async (componentConfig) => {
      let response;
      switch (componentConfig.type) {
        case 'Hero Block':
          response = await client.request(HERO_BLOCK_QUERY, { id: componentConfig.contentfulId });
          return response.heroBlock;
        case 'Two Column Row':
          response = await client.request(TWO_COLUMN_ROW_QUERY, { id: componentConfig.contentfulId });
          return response.twoColumnRow;
        case '2x2 Image Grid':
          response = await client.request(X2_IMAGE_GRID_QUERY, { id: componentConfig.contentfulId });
          return response.x2ImageGrid;
        default:
          return null;
      }
    })
  );

  return {
    title: pageLayout.title,
    components: fetchedComponents.filter(c => c !== null),
  };
}

// --- generateMetadata function ---
export async function generateMetadata({ params }) {
  const data = await getPageData(params.slug);
  if (!data) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: data.title || 'Landing Page',
    description: `Landing page for ${data.title}`,
  };
}

// --- Page Component (Updated) ---
export default async function LandingPage({ params }) {
  const data = await getPageData(params.slug);
  
  if (!data || !data.components) {
    notFound();
  }
  
  return (
    <>
      <JsonLd pageTitle={data.title} slug={params.slug} />
      <main>
        {data.components.map((component, index) => {
          switch (component.__typename) {
            case 'HeroBlock':
              return <HeroBlock key={index} data={component} />;
            case 'TwoColumnRow':
              return <TwoColumnRow key={index} data={component} />;
            case 'X2ImageGrid':
              return <ImageGrid key={index} data={component} />;
            default:
              return null;
          }
        })}
      </main>
    </>
  );
}

// --- generateStaticParams function ---
export async function generateStaticParams() {
  return [{ slug: 'page-1' }, { slug: 'page-2' }];
}
