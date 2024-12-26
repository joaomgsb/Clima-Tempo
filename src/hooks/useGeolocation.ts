import { useState, useEffect } from 'react';
import { Coordinates } from '../types/weather';

export function useGeolocation() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          setError('Não foi possível obter sua localização');
        }
      );
    } else {
      setError('Geolocalização não suportada pelo seu navegador');
    }
  }, []);

  return { coordinates, error };
}