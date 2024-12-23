import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import RegistrationScreen from 'RegistrationScreen';
import ProductListScreen from 'ProductlistScreen';
import ProductDetailScreen from 'ProductDetailScreen';
import CartScreen from 'CartScreen';
import OrderTrackingScreen from 'OrderTrackingScreen';
import RatingsScreen from 'RatingsScreen';
import ARScreen from '../advanced feature/augmented realtiy';
import GeoLocationScreen from '../advanced feature/geo-location';
import ChatScreen from '../advanced feature/chatscreen';
import DynamicPricing from '../advanced feature/dynamic';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Registration">
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} />
      <Stack.Screen name="Ratings" component={RatingsScreen} />
      <Stack.Screen name="ARScreen" component={ARScreen} />
      <Stack.Screen name="GeoLocationScreen" component={GeoLocationScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="RecommendationsScreen" component={RecommendationsScreen} />
      <Stack.Screen name="DynamicPricing" getComponent={DynamicPricing} />

    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
