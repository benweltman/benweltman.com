import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ColorContextType {
  primaryColor: string; // Hex value
  setPrimaryColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

/**
 * Converts a Hex color string to HSL format string for CSS variables.
 * Example: #ff0000 -> "0 100% 50%"
 */
const hexToHsl = (hex: string) => {
  // Remove # if present
  hex = hex.replace('#', '');

  // Convert hex to RGB
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
    s = l < 0.5 ? d / (max + min) : d / (1 - max - min);
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [primaryColor, setPrimaryColorStored] = useLocalStorage<string>('primary', '#3eb18f'); // Updated default to #3eb18f

  useEffect(() => {
    const hslValue = hexToHsl(primaryColor);
    document.documentElement.style.setProperty('--primary', hslValue);
    // Also update --accent for components using the CSS variable directly
    document.documentElement.style.setProperty('--accent-dynamic', `hsl(${hslValue})`);
    document.documentElement.style.setProperty('--accent-bg-dynamic', `hsla(${hslValue}, 0.1)`);
    document.documentElement.style.setProperty('--accent-border-dynamic', `hsla(${hslValue}, 0.5)`);
  }, [primaryColor]);

  const setPrimaryColor = (color: string) => {
    setPrimaryColorStored(color);
  };

  return (
    <ColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};
