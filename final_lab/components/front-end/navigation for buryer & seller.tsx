import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BuyerHome from 'BuyerHome';
import SellerHome from 'SellerHome';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="BuyerHome" component={BuyerHome} />
      <Stack.Screen name="SellerHome" component={SellerHome} />
    </Stack.Navigator>
  </NavigationContainer>
);
