import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthContextProvider } from './src/contexts/AuthContext';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styled';
import Routes from './src/routes';

export default function App() {
  return (
      <AuthContextProvider>
        <StatusBar style='light' backgroundColor='#0C0A1D' />
        <ThemeProvider theme={myTheme}>
          <Routes />
        </ThemeProvider>
      </AuthContextProvider>
  );
}