import { PropsWithChildren, useContext } from 'react';
import { Theme } from '../lib/types';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    );
  }

  return context;
};

export default ThemeContextProvider;
