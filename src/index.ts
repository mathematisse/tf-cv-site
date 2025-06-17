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

export function main() {
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    // Ensure Leaflet uses the exact URLs provided above instead of
    // prefixing them with the default image path detected from
    // leaflet.css. Setting `imagePath` to an empty string avoids
    // requests for files under `node_modules/leaflet/dist/images`. 
    imagePath: '',
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
  const pois: Poi[] = loadPois();

  pois.forEach((poi) => {
    const marker = L.marker([poi.lat, poi.lng]);
    marker.on('click', () => showPoiCard(poi));
    clusterGroup.addLayer(marker);
  });

  map.addLayer(clusterGroup);
}

main();
