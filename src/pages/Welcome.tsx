import React, { useState } from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export default function Welcome() {

  const [visible , setVisible] = useState(false);

  function handleVisibility(){
    setVisible(true);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} style={style.image} />

      <Text style={style.subtitle}>
        Não deixe suas plantinhas com sede, nós lembramos você!
      </Text>

      <Button title=">"/>

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  image: {
    width: 320,
    height: 300
  }
});