import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET,
  apiVersion: import.meta.env.VITE_API_VERSION,
  useCdn: true,
  token: import.meta.env.VITE_SANITY_READ_TOKEN || undefined,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
