import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import COLORS from '../../../Constraint/Color';
import Icon from 'react-native-vector-icons/Ionicons';

// export default class FoodCard extends Component {
//     render() {
//         return (
//             <View style={styles.container}>

//                 <View>
//                     <Text style={styles.titleCard}> {this.props.foodTitle} </Text>
//                     <Text style={styles.textCard}> {this.props.rationValue + " " + this.props.rationUnit + " - " + this.props.foodCal + " calo"} </Text>
//                 </View>

//                 <View style={styles.iconContainer}>
//                     <TouchableOpacity style={styles.roundAddIcon}>
//                         <Icon name='add-sharp' size={23} color={'grey'}/>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }
// }
const FoodCard = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleCard}> {props.foodTitle} </Text>
        <Text style={styles.textCard}>
          {props.rationValue +
            ' ' +
            props.rationUnit +
            ' - ' +
            props.foodCal +
            ' calo'}
        </Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.roundAddIcon}>
          <Icon name="add-sharp" size={23} color={'grey'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: '15%',
    width: '98%',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'space-between',
  },

  textCard: {
    fontSize: 17,
    color: COLORS.black,
  },

  titleCard: {
    fontWeight: 'bold',
    fontSize: 17,
    color: COLORS.black,
  },

  roundAddIcon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    alignSelf: 'flex-end',
  },

  iconContainer: {
    marginRight: '7%',
  },
});
