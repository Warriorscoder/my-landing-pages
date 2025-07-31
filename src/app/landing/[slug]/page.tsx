import { GraphQLClient } from 'graphql-request';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

const HeroBlock = dynamic(() => import('../../../components/HeroBlock'));
const TwoColumnRow = dynamic(() => import('../../../components/TwoColumnRow'));
const ImageGrid = dynamic(() => import('../../../components/ImageGrid'));
import JsonLd from '../../../components/JsonLd';

// --- Type Definitions ---
type Image = { url: string; width: number; height: number; };
type HeroBlockType = { sys: { id: string }, __typename: 'HeroBlock', heading?: string, subtitle?: string, cta?: string, backgroundImage?: Image };
type TwoColumnRowType = { sys: { id: string }, __typename: 'TwoColumnRow', heading?: string, subtitle?: string, cta?: string, image?: Image };
type ImageGridType = { sys: { id: string }, __typename: 'X2ImageGrid', imagesCollection?: { items: Image[] } };
type PageComponent = HeroBlockType | TwoColumnRowType | ImageGridType;

interface PageData {
  title: string;
  components: PageComponent[];
}

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
async function getPageData(slug: string): Promise<PageData | null> {
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

  interface LayoutConfigComponent {
    uiId: string;
    contentfulId: string;
    type: string;
  }

  const layoutResponse = await client.request<{
    landingPageCollection: {
      items: [{
        title: string,
        layoutConfig: { components: LayoutConfigComponent[] }
      }]
    }
  }>(layoutQuery, { slug });

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
          response = await client.request<{ heroBlock: HeroBlockType }>(HERO_BLOCK_QUERY, { id: componentConfig.contentfulId });
          return response.heroBlock;
        case 'Two Column Row':
          response = await client.request<{ twoColumnRow: TwoColumnRowType }>(TWO_COLUMN_ROW_QUERY, { id: componentConfig.contentfulId });
          return response.twoColumnRow;
        case '2x2 Image Grid':
          response = await client.request<{ x2ImageGrid: ImageGridType }>(X2_IMAGE_GRID_QUERY, { id: componentConfig.contentfulId });
          return response.x2ImageGrid;
        default:
          return null;
      }
    })
  );

  return {
    title: pageLayout.title,
    components: fetchedComponents.filter((c): c is PageComponent => c !== null),
  };
}

// --- generateMetadata function ---
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
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
export default async function LandingPage({ params }: { params: { slug: string } }) {
  const data = await getPageData(params.slug);
  
  if (!data || !data.components) {
    notFound();
  }

  const layoutConfig = (await getPageData(params.slug))?.components;

  if (!layoutConfig) {
    notFound();
  }

  const sortedComponents = layoutConfig.map((config) => {
    const componentData = data.components.find(data => data.sys.id === config.sys.id);
    return componentData;
  }).filter((c): c is PageComponent => c !== undefined);


  return (
    <>
      <JsonLd pageTitle={data.title} slug={params.slug} />
      <main>
        {sortedComponents.map((component, index) => {
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
