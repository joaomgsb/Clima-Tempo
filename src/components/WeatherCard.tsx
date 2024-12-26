import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  data: WeatherData;
}

export function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-4 sm:mt-6 w-full">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{data.name}</h2>
        <div className="flex justify-center items-center mt-3">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <span className="text-4xl sm:text-5xl font-bold text-gray-800">
            {Math.round(data.main.temp)}°C
          </span>
        </div>
        <p className="text-lg sm:text-xl text-gray-600 capitalize mt-2">
          {data.weather[0].description}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        <div className="flex flex-col items-center">
          <Droplets className="text-blue-500 mb-1 sm:mb-2" size={20} />
          <span className="text-xs sm:text-sm text-gray-600">Umidade</span>
          <span className="font-bold text-sm sm:text-base text-gray-800">{data.main.humidity}%</span>
        </div>
        <div className="flex flex-col items-center">
          <Wind className="text-blue-500 mb-1 sm:mb-2" size={20} />
          <span className="text-xs sm:text-sm text-gray-600">Vento</span>
          <span className="font-bold text-sm sm:text-base text-gray-800">{data.wind.speed} km/h</span>
        </div>
        <div className="flex flex-col items-center">
          <Cloud className="text-blue-500 mb-1 sm:mb-2" size={20} />
          <span className="text-xs sm:text-sm text-gray-600">Sensação</span>
          <span className="font-bold text-sm sm:text-base text-gray-800">
            {Math.round(data.main.feels_like)}°C
          </span>
        </div>
      </div>
    </div>
  );
}