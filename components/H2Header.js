import React from "react";
import {StyleSheet, Text} from 'react-native';

function H2Header(props) {

  const styles = StyleSheet.create({
    headingText: {
      fontSize: 25,
      alignItems: 'center',
      fontWeight: 'bold',
      margin: 4
    }
  });
  
  return (
    <Text style={styles.headingText}>
      {props.textContent}
    </Text>
  );
}

export default H2Header;