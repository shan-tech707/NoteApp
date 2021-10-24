import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation';
import {Provider as StoreProvider} from 'react-redux';
import Store from './src/reducer/Store';

export default function App() {
  return (
    <StoreProvider store={Store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}
