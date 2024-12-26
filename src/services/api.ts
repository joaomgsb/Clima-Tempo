import axios from 'axios';
import { WeatherData, ForecastData, Coordinates } from '../types/weather';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`
    );
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados do clima');
  }
};

export const getForecast = async (city: string): Promise<ForecastData[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`
    );
    
    // Filtra para pegar apenas um registro por dia
    const dailyForecasts = response.data.list.reduce((acc: ForecastData[], curr: ForecastData) => {
      const date = new Date(curr.dt * 1000).toLocaleDateString();
      const existingDay = acc.find(item => 
        new Date(item.dt * 1000).toLocaleDateString() === date
      );
      
      if (!existingDay && acc.length < 5) {
        acc.push(curr);
      }
      
      return acc;
    }, []);

    return dailyForecasts;
  } catch (error) {
    throw new Error('Erro ao buscar previsão do tempo');
  }
};

export const getWeatherByCoords = async ({ lat, lon }: Coordinates): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=pt_br`
    );
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados do clima');
  }
};