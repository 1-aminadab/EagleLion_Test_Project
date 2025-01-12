import React from 'react';
import { RootNavigator } from './presentation/navigation/root/root.navigator';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './application/stores/store';
import { Text, View } from 'react-native';
import { OnboardingScreen } from './presentation/screen/onboarding';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<OnboardingScreen>}
        persistor={persistor}
      >
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;