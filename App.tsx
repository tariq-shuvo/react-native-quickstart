import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import {Provider as PaperProvider,} from 'react-native-paper'
import AddStudentScreen from './src/screens/AddStudentScreen';
import StartScreen from './src/screens/StartScreen';
import StudentListScreen from './src/screens/StudentListScreen';
import UpdateStudentScreen from './src/screens/UpdateStudentScreen';
import UserListScreen from './src/screens/UserListScreen';
import UserLoginScreen from './src/screens/UserLoginScreen';
import UserRegisterScreen from './src/screens/UserRegisterScreen';

const Stack = createStackNavigator()

// Redux Initialization
import {Provider} from 'react-redux'
import store from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Start App'>
            <Stack.Screen name='Start App' component={StartScreen} options={{
              headerShown: false
            }}/>
            <Stack.Screen name='Login' component={UserLoginScreen} />
            <Stack.Screen name='User List' component={UserListScreen} />
            <Stack.Screen name='User Create' component={UserRegisterScreen} />
            <Stack.Screen name='Student Create' component={AddStudentScreen} />
            <Stack.Screen name='Student List' component={StudentListScreen} />
            <Stack.Screen name='Student Update' component={UpdateStudentScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
