import React from 'react';
import { RootNavigator } from './presentation/navigation/root/root.navigator';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './application/stores/store';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<View ><Text>Loading...</Text></View>}
        persistor={persistor}
      >
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;