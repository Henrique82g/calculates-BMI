import React, { useState } from 'react';
import { Text, View, TextInput,TouchableOpacity, FlatList } from 'react-native';

import styles from './stylesJs/styles';
export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const DATA = [
    {
      value: 'BMI less than 18.6',
      classification: 'You are underweight!',
      id: 1
    },
    {
      value: 'BMI greater than or equal to 18.6 and less than 24.9',
      classification: 'Ideal weight',
      id: 2
    }, 
    {
      value: 'BMI greater than or equal to 24.9 and less than 34.9',
      classification: 'Slightly overweight.',
      id: 3
    },
  ];

  function handleSubmit(){
    const alt = height / 100;
    const imc = weight / (alt * alt);

    if(imc < 18.6) {
      alert('You are underweight! ' + imc.toFixed(2));
    } else if(imc >= 18.6 && imc < 24.9) {
      alert('Ideal weight! ' + imc.toFixed(2));
    } else if(imc >= 24.9 && imc < 34.9) {
      alert('Slightly overweight.' + imc.toFixed(2));
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate your BMI</Text>

      <TextInput 
        style={styles.input}
        value={weight}
        onChangeText={(weight) => setWeight(weight)}
        placeholder={'Weight in (Kg)'}
        keyboardType="numeric"
      />

      <TextInput 
        style={styles.input}
        value={height}
        onChangeText={(height) => setHeight(height)}
        placeholder={'height in (cm)'}
        keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      
      <FlatList 
        style={styles.scales}
        data={ DATA }
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: item }) => (
          <View style={styles.scale}>
              <Text style={styles.value}>{item.value}</Text>
              <Text style={styles.classification}>{item.classification}</Text>
          </View>
        )}
      /> 
    </View>
  );
}
