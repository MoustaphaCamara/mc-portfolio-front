import { createClient } from "@sanity/client";
import * as imageUrl from "@sanity/image-url";
const imageUrlBuilder = imageUrl;

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_REACT_APP_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_REACT_APP_SANITY_API_VERSION,
  useCdn: true,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);