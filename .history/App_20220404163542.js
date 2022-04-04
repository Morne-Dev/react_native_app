import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
        <Stack.Screen/>
        <Stack.Screen/>
      </StackNavigator>
    </NavigationContainer>
  );
}

export defaullt App;
