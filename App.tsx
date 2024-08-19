import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthContextProvider } from './src/contexts/AuthContext';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './src/styles';
import Routes from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthContextProvider>
        <StatusBar style='light' backgroundColor='#0C0A1D' />
        <ThemeProvider theme={myTheme}>
          <Routes />
        </ThemeProvider>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}