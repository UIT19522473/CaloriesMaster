import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import ExerciseCard from './ExerciseCard';

// export default class ExerciseList extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <ExerciseCard exerciseTitle='Leo cầu thang' caloValue='260' time='30' />
//       </View>
//     )
//   }
// }

const ExerciseList = props => {
  return (
    <View style={styles.container}>
      <ExerciseCard exerciseTitle="Leo cầu thang" caloValue="260" time="30" />
    </View>
  );
};

export default ExerciseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
});
