/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  StatusBar,
  Text,
  ToolbarAndroid,
  View
} from 'react-native';

import ActionButton from 'react-native-action-button';

class ReactNativeSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#4267b2"
        />
        <ToolbarAndroid
      		title="Sample React Native App"
          titleColor="#ffffff"
          navIcon={require("./icons/ic_dehaze_white_24dp.png")}
      		style={styles.toolbar}
        />
        <Text style={styles.welcome}>
          Welcome to React Native
        </Text>

        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => { console.log("hi")}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  toolbar: {
    backgroundColor: '#607d8b',
    height: 56,
  },
  floatingIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 10,
    right: 10,
  }
});

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
