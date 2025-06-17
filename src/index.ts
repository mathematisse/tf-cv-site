import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { loadPois, Poi } from './loadPois';
import { initPoiCard, showPoiCard } from './poiCard';

export function main() {
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
