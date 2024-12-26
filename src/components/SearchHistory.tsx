import React from 'react';
import { Clock, X } from 'lucide-react';

interface SearchHistoryProps {
  history: string[];
  onSelect: (city: string) => void;
  onClear: () => void;
}

export function SearchHistory({ history, onSelect, onClear }: SearchHistoryProps) {
  if (history.length === 0) return null;

  return (
    <div className="mt-3 sm:mt-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center text-white">
          <Clock size={14} className="mr-1.5" />
          <span className="text-xs sm:text-sm">Pesquisas recentes</span>
        </div>
        <button
          onClick={onClear}
          className="text-white/70 hover:text-white"
        >
          <X size={14} />
        </button>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {history.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            className="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs sm:text-sm text-white hover:bg-white/30 transition-colors"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}