import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import PedidosScreen from './src/screens/pedidos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Motoboy' }}
        />
        <Stack.Screen
          name="PedidosScreen"
          component={PedidosScreen}
          options={{ title: 'Entregas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}