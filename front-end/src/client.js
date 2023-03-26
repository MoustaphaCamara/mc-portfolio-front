import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// https://www.sanity.io/docs/api-versioning

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-03-25",
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
