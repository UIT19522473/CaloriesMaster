import {StackActions, useNavigation} from '@react-navigation/native';

const navigation = useNavigation();
navigation.navigate('ControlWater');
navigation.dispatch(StackActions.pop());

//redux
// cap nhat du lieu
import {useDispatch} from 'react-redux';
import {userLogin} from '../Redux/actions/userAction';
const dispatch = useDispatch();
const login = name => dispatch(userLogin(name));

//laays du lieu
import {useSelector} from 'react-redux';
const {user} = useSelector(state => state.userReducer);
console.log(user);

//add firebase
set(ref(database, 'users/demo1/Home/' + Key + '/Calories'), {
  CanNap: sumCalo,
  Carbs: 0,
  ChatBeo: 0,
  ChatDam: 0,
  DaNap: 0,
  TieuHao: 0,
});

set(push(ref(database, 'users')), {
  idName: id,
  passW: pass,
});

//change TextInput
<TextInput
  style={{borderBottomWidth: 1, width: 160}}
  placeholder="Số phút/ngày"
  value={props.phut}
  onChangeText={text => props.setPhut(text)}
/>;
