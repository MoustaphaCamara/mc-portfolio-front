import {createClient, SanityClient} from "@sanity/client";
import * as imageUrl from "@sanity/image-url";
import {ImageUrlBuilder} from "@sanity/image-url/lib/types/builder";
const imageUrlBuilder = imageUrl;

export const client: SanityClient = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_REACT_APP_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_REACT_APP_SANITY_API_VERSION,
  useCdn: true,
});
const builder: ImageUrlBuilder = imageUrlBuilder(client);

export const urlFor = (source : string ) => builder.image(source).toString();
