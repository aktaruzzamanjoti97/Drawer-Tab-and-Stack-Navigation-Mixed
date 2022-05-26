//import liraries
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {default as React} from 'react';
import {StyleSheet, View} from 'react-native';
import {Drawer} from './src/screens/Drawer';

const AppDrawer = createDrawerNavigator();

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
