import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET,
  apiVersion: import.meta.env.VITE_API_VERSION,
  useCdn: true,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);