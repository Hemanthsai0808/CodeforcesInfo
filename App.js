import { StatusBar,Image } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Contests from './screens/Contests';
import Profile from './screens/Profile';
import Rating from './screens/Rating';
import AboutMe from './screens/AboutMe'

import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
import Resourses from './screens/Resourses';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function StartScreen() {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate('AboutMe');
  }
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="ios-person"
            size={20}
            color={tintColor}
            onPress={expensePressHandler}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="Contests"
        component={Contests}
        options={{
          title: 'Codeforces Contests',
          headerTitleAlign:'center',
          headerTitleStyle: {
            color : GlobalStyles.colors.accent500,
          },
          tabBarLabel: 'Contest',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerTitleAlign:'center',
          headerTitleStyle: {
            color : GlobalStyles.colors.accent500,
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-image" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Resourses"
        component={Resourses}
        options={{
          title: 'Resourses',
          tabBarLabel: 'Resourses',
          headerTitleAlign:'center',
          headerTitleStyle: {
            color : GlobalStyles.colors.accent500,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-cloud-download" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Rating"
            component={Rating}
            options={{
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="AboutMe"
            component={AboutMe}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
