import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const GeoLocationScreen: React.FC = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position: { coords: React.SetStateAction<null>; }) => setLocation(position.coords),
      (error: any) => console.error('Error fetching location', error)
    );
  }, []);

  return (
    <View>
      {location ? (
        <Text>Latitude: {location.Latitude}, Longitude: {location.longitude}</Text>
      ) : (
        <Text>Fetching Location...</Text>
      )}
    </View>
  );
};

export default GeoLocationScreen;
