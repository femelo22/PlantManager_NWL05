import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../assets/watering.png';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Welcome() {

  const navigation = useNavigation();

  function handleStart () {
    navigation.navigate('UserIndentificationer');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image
          source={wateringImg}
          style={styles.image}
        //resizeMode="contain"
        />

        <Text style={styles.subtitle}>
            Não deixe suas plantinhas com sede, nós lembramos você!
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >

          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
          />

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {
    height: 300,
    width: 300
    //height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
    paddingHorizontal: 10
  },
  buttonIcon: {
    fontSize: 25,
    color: colors.white
  }
});