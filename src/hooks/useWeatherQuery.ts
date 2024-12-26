import { useQuery } from '@tanstack/react-query';
import { getWeather, getForecast } from '../services/api';
import { WeatherData, ForecastData } from '../types/weather';

interface WeatherQueryResult {
  weather: WeatherData | null;
  forecast: ForecastData[];
  isLoading: boolean;
  error: Error | null;
}

export function useWeatherQuery(city: string): WeatherQueryResult {
  const { data: weather, isLoading: isLoadingWeather, error: weatherError } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeather(city),
    enabled: !!city,
  });

  const { data: forecast = [], isLoading: isLoadingForecast } = useQuery({
    queryKey: ['forecast', city],
    queryFn: () => getForecast(city),
    enabled: !!city,
  });

  return {
    weather: weather || null,
    forecast,
    isLoading: isLoadingWeather || isLoadingForecast,
    error: weatherError as Error | null,
  };
}