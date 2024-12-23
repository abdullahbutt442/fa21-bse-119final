import { Button, Text } from 'react-native';
import { useWindowDimensions } from 'react-native';

const MyComponent = () => {
  const { width } = useWindowDimensions();
  
  return (
    <Button mode="contained" style={{ width: width > 500 ? '50%' : '100%' }}>
      <Text>Click Me</Text>
    </Button>
  );
};
