import React, {Component, useState} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../Constraint/Color';
import Body from '../Component/cpnHome/Body';
import Header from '../Component/cpnHome/Header';
const HEADER_MAX_HEIGHT = 330;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
import {FloatingAction} from 'react-native-floating-action';

import {useSelector} from 'react-redux';

const actions = [
  {
    text: 'Tập luyện',
    // icon: require('./images/ic_accessibility_white.png'),
    name: 'Exc',
    position: 1,
  },
  {
    text: 'Bữa Phụ',
    // icon: require('./images/ic_language_white.png'),
    name: 'Other',
    position: 2,
  },
  {
    text: 'Bữa Tối',
    // icon: require('./images/ic_room_white.png'),
    name: 'Night',
    position: 3,
  },
  {
    text: 'Bữa Trưa',
    // icon: require('./images/ic_videocam_white.png'),
    name: 'Afternoon',
    position: 4,
  },
  {
    text: 'Bữa sáng',
    // icon: require('./images/ic_videocam_white.png'),
    name: 'Morning',
    position: 5,
  },
];
//sửa ở đây
const Home = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const {user} = useSelector(state => state.userReducer);
  console.log(user);

  return (
    <View style={styles.fill}>
      <ScrollView
        style={styles.fill}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          // {useNativeDriver: true},
        )}>
        <View style={styles.body}>
          <Body />
        </View>
      </ScrollView>
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <StatusBar translucent backgroundColor={COLORS.transparent} />

        <Header />
      </Animated.View>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
        }}
        // overlayColor={COLORS.primary}
        color={COLORS.primary}
        // textColor={COLORS.primary}
      />
    </View>
  );
};
export default Home;

//code cũ------------------

// export default class ScrollableHeader extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       scrollY: new Animated.Value(0),
//     };
//   }

//   render() {
//     const headerHeight = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE],
//       outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
//       extrapolate: 'clamp',
//     });
//     return (
//       <View style={styles.fill}>
//         <ScrollView
//           style={styles.fill}
//           scrollEventThrottle={16}
//           onScroll={Animated.event([
//             {nativeEvent: {contentOffset: {y: this.state.scrollY}}},
//           ])}>
//           <View style={styles.body}>
//             <Body />
//           </View>
//         </ScrollView>
//         <Animated.View style={[styles.header, {height: headerHeight}]}>
//           <StatusBar translucent backgroundColor={COLORS.transparent} />

//           <Header />
//         </Animated.View>
//         <FloatingAction
//           actions={actions}
//           onPressItem={name => {
//             console.log(`selected button: ${name}`);
//           }}
//           // overlayColor={COLORS.primary}
//           color={COLORS.primary}
//           // textColor={COLORS.primary}
//         />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: COLORS.primary,
    overflow: 'hidden',
  },

  body: {
    width: '100%',
    marginTop: HEADER_MAX_HEIGHT,
    marginBottom: 50,
  },
});
