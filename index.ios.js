/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  StatusBarIOS,
  Text,
  View
} from 'react-native';

class ReactNativeSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarIOS
          backgroundColor="#4267b2"
        />
        <Text style={styles.welcome}>
          Hello React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
