import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';
import H2Heading from './components/H2Heading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'burlywood'
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'start',
    margin: 4
  },
  textStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8
  }
});

const App = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <H2Heading
        textContent="React Native Form Radio Button Example"
      />
      <H2Header
        textContent="Select your country of residence:"
      />
      <View style={styles.radioButton}>
        <RadioButton.Android
          value="England"
          status={selectedValue === 'England' ?
            'checked' : 'unchecked'}
          onPress={() => setSelectedValue('England')}
          color="#007BFF"
        />
        <Text style={styles.textStyle}>
          England
        </Text>
      </View>

      <View style={styles.radioButton}>
        <RadioButton.Android
          value="Scotland"
          status={selectedValue === 'Scotland' ?
            'checked' : 'unchecked'}
          onPress={() => setSelectedValue('Scotland')}
          color="#007BFF"
        />
        <Text style={styles.textStyle}>
          Scotland
        </Text>
      </View>

      <View style={styles.radioButton}>
        <RadioButton.Android
          value="option3"
          status={selectedValue === 'option3' ?
            'checked' : 'unchecked'}
          onPress={() => setSelectedValue('option3')}
          color="#007BFF"
        />
        <Text style={styles.textStyle}>
          Wales
        </Text>
      </View>

      <View style={styles.radioButton}>
        <RadioButton.Android
          value="Northern Ireland"
          status={selectedValue === 'Northern Ireland' ?
            'checked' : 'unchecked'}
          onPress={() => setSelectedValue('Northern Ireland')}
          color="#007BFF"
        />
        <Text style={styles.textStyle}>
          Northern Ireland
        </Text>
      </View>

    </SafeAreaView>
  );
};

export default App;
