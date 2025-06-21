import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { loadPois, Poi } from './loadPois';
import { initPoiCard, showPoiCard } from './poiCard';
import markerIcon from './assets/marker-icon.png';
import markerIcon2x from './assets/marker-icon-2x.png';
import markerShadow from './assets/marker-shadow.png';
import './style.css';

export async function main() {

  const Icon = L.icon({
    ...L.Icon.Default.prototype.options,
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  });
  const map = L.map('map', {
    center: [0, 0],
    zoom: 2,
  });

  initPoiCard();

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  const clusterGroup = L.markerClusterGroup();
  const pois: Poi[] = await loadPois();

  pois.forEach((poi) => {
    const marker = L.marker([poi.lat, poi.lng], {icon: Icon});
    marker.on('click', () => showPoiCard(poi));
    clusterGroup.addLayer(marker);
  });

  map.addLayer(clusterGroup);
}

main().catch((err) => console.error(err));
