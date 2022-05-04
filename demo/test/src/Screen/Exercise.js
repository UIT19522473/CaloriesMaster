import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const Exercise = () => {
  return (
    <View style={styles.center}>
      <Text>This is the exercise</Text>
      <Button title="Go to About Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'pink',
  },
});

export default Exercise;
