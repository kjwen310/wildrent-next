'use client';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from "./MapCluster"
import { Button } from '../ui/button'
import { SiteItem } from '@/types';

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

type MapProps = {
  siteList: SiteItem[];
  center?: number[];
  isModal?: boolean;
  onSiteClick?: (id: string) => void;
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({ siteList, center, isModal, onSiteClick }) => {
  const handleSiteClick = (id: string) => {
    if (!onSiteClick) return
    onSiteClick(id)
  }

  return (
      <MapContainer 
        center={center as L.LatLngExpression || [25.05046, 121.5303]} 
        zoom={13} 
        scrollWheelZoom={false}
        className={`${isModal ? "h-[400px]" : "h-[70vh]"}`}
      >
        <TileLayer
          url={url}
          attribution={attribution}
        />
        <MarkerClusterGroup>
          {
            siteList.map((item) => (
              <Marker
                key={item.name}
                position={[item.lat, item.lng]}
              >
                <Popup closeButton={true} autoPan={false}>
                  <h4>{item.name}</h4>
                  <p>{item.address}</p>
                  <Button type="button" size="sm" onClick={() => handleSiteClick(item.id)}>
                    確認選擇
                  </Button>
                </Popup>
              </Marker>
            ))
          }
        </MarkerClusterGroup>
        {center && (
          <Marker position={center as L.LatLngExpression} />
        )}
      </MapContainer>
  )
}

export default Map
