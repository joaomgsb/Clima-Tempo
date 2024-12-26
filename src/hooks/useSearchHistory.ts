import { useState, useEffect } from 'react';

const HISTORY_KEY = 'weatherSearchHistory';
const MAX_HISTORY_ITEMS = 5;

export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem(HISTORY_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addToHistory = (city: string) => {
    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item !== city);
      return [city, ...filtered].slice(0, MAX_HISTORY_ITEMS);
    });
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return { searchHistory, addToHistory, clearHistory };
}