// Load POI data on demand so assets aren't bundled
// with the initial JavaScript payload.

export interface Poi {
  name: string;
  lat: number;
  lng: number;
  description?: string;
  image?: string;
  details?: string;
}

/**
 * Fetch and parse the POI YAML file asynchronously.
 */
export async function loadPois(): Promise<Poi[]> {
  // Use dynamic import so the file can be inlined by the bundler and also
  // fetched at runtime when needed.
  const data = (await import('./pois.yaml?raw')).default as string;
  let text = data;
  const yaml = await import('js-yaml');
  return yaml.load(text) as Poi[];
}
