import { StackActions, useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
navigation.navigate('ControlWater');
navigation.dispatch(StackActions.pop());