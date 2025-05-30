import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import RootNavigator from './navigation';
import { colors } from './theme/color';

const initialState = {};
const reducer = (state = initialState) => state;
const store = createStore(reducer);

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.tertiary
  },
});

export default App;
