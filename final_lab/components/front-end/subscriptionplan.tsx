import { View,Text,Button } from "react-native";

const SubscriptionScreen = () => {
  return (
    <View>
      <Text>Choose your plan:</Text>
      <Button onPress={() => handleSubscribe('monthly')}>Monthly Plan - $9.99</Button>
      <Button onPress={() => handleSubscribe('yearly')}>Yearly Plan - $99.99</Button>
    </View>
  );
};

const handleSubscribe = async (plan: string) => {
 
  await subscribeToPlan(plan);
};

function subscribeToPlan(plan: string) {
  throw new Error("Function not implemented.");
}

