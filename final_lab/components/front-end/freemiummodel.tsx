import React from "react";
import {View,Text,Button} from React-native
const ProfileScreen = ({ isPremiumUser }) => {
  return (
    <View>
      <Text>Welcome to your profile!</Text>
      {isPremiumUser ? (
        <Button>Access Premium Features</Button>
      ) : (
        <Text>Upgrade to Premium for more features!</Text>
      )}
    </View>
  );
};
