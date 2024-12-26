import React, { useState } from 'react';
import { Cloud, AlertCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { SearchHistory } from './components/SearchHistory';
import { getWeatherByCoords } from './services/api';
import { useGeolocation } from './hooks/useGeolocation';
import { useSearchHistory } from './hooks/useSearchHistory';
import { useWeatherQuery } from './hooks/useWeatherQuery';
import { AnimatedCard } from './components/AnimatedCard';

function App() {
  const [city, setCity] = useState('');
  const { coordinates, error: geoError } = useGeolocation();
  const { searchHistory, addToHistory, clearHistory } = useSearchHistory();
  const { weather, forecast, isLoading, error } = useWeatherQuery(city);

  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
    if (searchCity.trim()) {
      addToHistory(searchCity);
    }
  };

  React.useEffect(() => {
    if (coordinates) {
      getWeatherByCoords(coordinates)
        .then((data) => {
          setCity(data.name);
          addToHistory(data.name);
        })
        .catch(() => {});
    }
  }, [coordinates]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col items-center justify-start p-4 sm:p-8"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="backdrop-blur-sm bg-white/30 p-4 sm:p-8 rounded-2xl shadow-lg w-full max-w-md">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center mb-6 sm:mb-8"
        >
          <Cloud className="text-white mr-2" size={28} />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Clima Tempo</h1>
        </motion.div>

        <SearchBar onSearch={handleSearch} />
        
        <SearchHistory 
          history={searchHistory}
          onSelect={handleSearch}
          onClear={clearHistory}
        />

        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6"
          >
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          </motion.div>
        )}

        {error && (
          <AnimatedCard>
            <div className="flex items-center justify-center mt-4 text-red-100 bg-red-500/50 p-3 rounded-lg text-sm sm:text-base">
              <AlertCircle className="mr-2" size={20} />
              <span>{error.message}</span>
            </div>
          </AnimatedCard>
        )}

        {geoError && !error && (
          <AnimatedCard>
            <div className="flex items-center justify-center mt-4 text-yellow-100 bg-yellow-500/50 p-3 rounded-lg text-sm sm:text-base">
              <MapPin className="mr-2" size={20} />
              <span>{geoError}</span>
            </div>
          </AnimatedCard>
        )}

        {weather && (
          <AnimatedCard delay={0.2}>
            <WeatherCard data={weather} />
          </AnimatedCard>
        )}
        
        {forecast.length > 0 && (
          <AnimatedCard delay={0.4}>
            <ForecastCard forecast={forecast} />
          </AnimatedCard>
        )}
      </div>
    </motion.div>
  );
}

export default App;