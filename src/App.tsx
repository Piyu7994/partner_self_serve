import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import RootNavigator from './navigation';
import { colors } from './theme/color';

function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.tertiary
  },
});

export default App;
