import React from 'react';
import Mapbox from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IDetails } from '../../models/details/details.model';
import { useDetailViewContext } from '../../../views/DetailView/DetailView.Context';

export interface IDetailsCardMapProps {
  details?: IDetails;
}

export const DetailsCardMap: React.FC<IDetailsCardMapProps> = ({ details }) => {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const mapRef = React.useRef<Mapbox.Map>();
  const mapMarkerRef = React.useRef<Mapbox.Marker>();

  const initialized = Boolean(
    rootRef.current && mapRef.current && mapMarkerRef.current
  );

  const initialize = () => {
    if (rootRef.current && !mapRef.current) {
      let center: [number, number] = [0, 0];
      if (details?.latitude && details?.longitude) {
        center = [details.longitude, details.latitude];
      }
      mapRef.current = new Mapbox.Map({
        center,
        zoom: 8,
        accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY,
        container: rootRef.current,
        style: 'mapbox://styles/mapbox/streets-v11'
      });
      mapMarkerRef.current = new Mapbox.Marker({
        color: '#69a2ff'
      })
        .setLngLat(center)
        .addTo(mapRef.current);
    } else {
      alert('here');
    }
  };

  const destroy = () => mapRef.current?.remove();

  React.useEffect(() => {
    if (details) {
      if (!initialized) {
        initialize();
      } else {
        const center: [number, number] = [details.longitude, details.latitude];
        mapRef.current?.setCenter(center);
        mapMarkerRef.current?.setLngLat(center);
      }
    }
  }, [details]);

  React.useEffect(() => {
    return () => {
      if (initialized) {
        destroy();
      }
    };
  }, []);

  return (
    <div>
      <div style={{ height: 320 }} ref={rootRef} />
    </div>
  );
};
