import * as yaml from 'js-yaml';
import poiData from './pois.yaml?raw';

export interface Poi {
  name: string;
  lat: number;
  lng: number;
  description?: string;
  image?: string;
  details?: string;
}

export function loadPois(): Poi[] {
  return yaml.load(poiData) as Poi[];
}
