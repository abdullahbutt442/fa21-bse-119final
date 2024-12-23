import React from 'react';
import { View } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';

const ARScene = require('./ARScene'); // AR Scene definition

const ARScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ViroARSceneNavigator initialScene={{ scene: ARScene }} />
    </View>
  );
};

export default ARScreen;
