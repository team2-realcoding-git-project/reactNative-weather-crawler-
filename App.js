import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CityList from './CityList';
import WeatherDetailScreen from './WeatherDetailScreen'

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <CityList navigation={navigation}/>
    <StatusBar style="auto" />
  </View>
);

const DetailScreen = ({navigation, route}) => (
  <View style={styles.container}>
    <WeatherDetailScreen navigation={navigation} route={route}/>
    <StatusBar style="auto" />
  </View>
)

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Cities'}}
          />
          <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: 'Weather'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
//react js의 css와 유사하다.