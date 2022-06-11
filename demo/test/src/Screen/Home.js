// import React, {Component, useRef} from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   View,
//   Text,
//   Animated,
// } from 'react-native';
// import COLORS from '../Constraint/Color';
// import {ScrollView} from 'react-native-gesture-handler';
// import Header from '../Component/cpnHome/Header';
// import Body from '../Component/cpnHome/Body';
// // import Animated from 'react-native-reanimated';

// const HEADER_HEIGHT = 330;

// const HEADER_MAX_HEIGHT = 1000;
// const HEADER_MIN_HEIGHT = 50;

// const Home = () => {
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
//       <StatusBar translucent backgroundColor={COLORS.transparent} />
//       <Animated.View style={[styles.header, {height: 330}]}>
//         <Header />
//       </Animated.View>
//       <Animated.ScrollView
//         // scrollEventThrottle={16}
//         // onScroll={Animated.event(
//         //   [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
//         //   {useNativeDriver: true},
//         // )}
//         style={styles.body}>
//         <Body heightHeader={HEADER_HEIGHT} />
//       </Animated.ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: COLORS.primary,

//     width: '100%',
//     position: 'absolute',
//     // zIndex: 1000,
//     // elevation: 1000,
//     left: 0,
//     right: 0,
//     top: 0,
//     overflow: 'hidden',
//   },
//   body: {
//     width: '100%',
//     marginTop: 330,
//   },
// });

// export default Home;

import React, {Component} from 'react';
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

export default class ScrollableHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.fill}>
        <ScrollView
          style={styles.fill}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.state.scrollY}}},
          ])}>
          <View style={styles.body}>
            <Body />
          </View>
        </ScrollView>

        <Animated.View style={[styles.header, {height: headerHeight}]}>
          <StatusBar translucent backgroundColor={COLORS.transparent} />

          <Header />
        </Animated.View>
      </View>
    );
  }
}

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
  },
});
