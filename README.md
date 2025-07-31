Dynamic Landing Page Builder
This is a full-stack project built with Next.js and Contentful that enables non-technical users to build and edit dynamic landing pages using a custom drag-and-drop interface.

The project consists of two parts:

A custom Contentful App that acts as a page builder.

A Next.js frontend that fetches and renders the page layout and content.

🚀 Technical Stack
Frontend: Next.js (App Router), TypeScript, React, Native CSS Modules

Headless CMS: Contentful

API: Contentful GraphQL API

Deployment: Vercel

📦 Setup Instructions
Follow these steps to get the project running locally.

1. Clone the repository:

git clone <your-repo-url>
cd <your-project-name>

2. Install dependencies:

npm install

3. Set up Contentful:

Create a new Contentful Space.

Import the content model: Use the contentful-cli to import the content model from a JSON file, or manually recreate the content types as described in the "Contentful Model Notes" section below.

Create a Contentful App: Follow the Contentful App Framework documentation to create your custom app.

Get your API keys: Navigate to Settings > API Keys in your Contentful space. Create a new key and copy the Space ID and Content Delivery API (CDA) Access Token.

4. Configure Environment Variables:

Create a file named .env.local in the project root and add your Contentful API keys:

# .env.local
CONTENTFUL_SPACE_ID="<your_space_id>"
CONTENTFUL_ACCESS_TOKEN="<your_cda_access_token>"

5. Run the development server:

npm run dev

The application will be available at http://localhost:3000.

📝 Contentful Model Notes
This project relies on a specific content model to function.

Landing page Content Type
This is the main entry point for a page.

Field Name

Type

Description

title

Short text

The title of the page for internal use.

slug

Short text

The URL slug for the page (e.g., page-1).

layoutConfig

JSON object

Stores the array of component IDs and types in their display order.

Component Content Types
These are the individual building blocks of the page. Each has a unique ID and fields for its content.

Hero Block:

heading (Short text)

subtitle (Short text)

cta (Short text)

backgroundImage (Media)

Two Column Row:

heading (Short text)

subtitle (Short text)

cta (Short text)

image (Media)

2x2 Image Grid:

imagesCollection (Media - multiple links)

🌐 Vercel Deployment
This project is configured for seamless deployment to Vercel.

Push your code to a GitHub repository.

Import the repository into Vercel.

Add the CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN environment variables to your Vercel project settings.

The application will automatically deploy on every push to the main branch.
