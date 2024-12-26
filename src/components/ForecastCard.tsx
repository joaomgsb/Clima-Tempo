import React from 'react';
import { ForecastData } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastData[];
}

export function ForecastCard({ forecast }: ForecastCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-4 w-full">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Próximos dias</h3>
      <div className="grid grid-cols-5 gap-1 sm:gap-2">
        {forecast.map((day) => (
          <div key={day.dt} className="text-center">
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
              className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
            />
            <span className="text-base sm:text-lg font-bold text-gray-800">
              {Math.round(day.main.temp)}°C
            </span>
            <span className="text-[10px] sm:text-xs text-gray-600 block">
              {new Date(day.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short' })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}