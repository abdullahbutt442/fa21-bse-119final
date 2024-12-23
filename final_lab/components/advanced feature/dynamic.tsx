import React, { useState, useEffect, Text } from 'react';

const DynamicPricing: React.FC<{ basePrice: number }> = ({ basePrice }) => {
  const [price, setPrice] = useState(basePrice);

  useEffect(() => {
    fetch(`https://api.example.com/dynamic-price/${basePrice}`)
      .then((res) => res.json())
      .then((data) => setPrice(data.price))
      .catch((err) => console.error('Error fetching price', err));
  }, [basePrice]);

  return <Text>Price: ${price}</Text>;
};

export default DynamicPricing;
