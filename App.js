import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { VGSCardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';


export default function App() {

  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const storeCard = cardItem => {
    setCard([
      ...card,
      cardItem
    ]);
  }

  useEffect(() => {
    return () => {
      if (Platform.OS === 'ios') {
        CardIOUtilities.preload()
      }
    }
  }, []);

  const scanCardVGS = () => {
    setLoading(true)
    VGSCardIOModule
      .scanCard()
      .redactCard({
        vaultUrl: '<HTTPS link to the VGS Vault>',
        path: '/post',
        method: 'POST',
      })
      .then(card => {
        storeCard(card)
        setLoading(false)
      })
      .catch(() => {
        // the user cancelled
      })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {card.map((item, key) => (
        <Text key={key}>{item.cardNumber} - {item.expiryMonth} / {item.expiryYear}</Text>
      ))}
      <TouchableOpacity onPress={() => scanCardVGS()} style={{marginTop:30}}>
        <Text>{loading ? 'Loading...' : 'Scan card!'}</Text>
      </TouchableOpacity>
    </View>
  );
}