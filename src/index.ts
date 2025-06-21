import { loadPois, Poi } from './loadPois';
import { initPoiCard, showPoiCard } from './poiCard';
import './style.css';

export async function main() {
  // Dynamically import map libraries and assets so initial page load is light
  const [{ default: L }, _mc] = await Promise.all([
    import('leaflet'),
    import('leaflet.markercluster'),
  ]);
  await Promise.all([
    import('leaflet/dist/leaflet.css'),
    import('leaflet.markercluster/dist/MarkerCluster.css'),
    import('leaflet.markercluster/dist/MarkerCluster.Default.css'),
  ]);

  const markerIcon = (await import('./assets/marker-icon.png')).default;
  const markerIcon2x = (await import('./assets/marker-icon-2x.png')).default;
  const markerShadow = (await import('./assets/marker-shadow.png')).default;

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
