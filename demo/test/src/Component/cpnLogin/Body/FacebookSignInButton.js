import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import facebook_icon from '../../../Icon/facebook_icon.png';

// export default class FacebookSignInButton extends Component {
//   render() {
//     return (
//     <TouchableOpacity onPress={this.props.onPress} style={styles.button} backgroundColor={this.props.backgroundColor}>
//         <View>
//             <ImageBackground source={facebook_icon} style={styles.icon}/>
//             <Text style={styles.buttonText} backgroundColor={this.props.backgroundColor}> {this.props.text} </Text>
//         </View>
//     </TouchableOpacity>
//     )
//   }
// }

const FacebookSignInButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.button}
      backgroundColor={props.backgroundColor}>
      <View>
        <ImageBackground source={facebook_icon} style={styles.icon} />
        <Text style={styles.buttonText} backgroundColor={props.backgroundColor}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FacebookSignInButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1976D2',
    width: '80%',
    // marginTop: 15
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 40,
    color: '#fff',
  },
  icon: {
    color: 'white',
    position: 'absolute',
    width: 25,
    height: 25,
    left: -7,
    top: -5,
  },
});
