import {ref, set, push, remove, onValue} from 'firebase/database';
import {connect, database} from '../FirebaseConfig';

export const removeValueTest = (value, index) => {
  const dltData = ref(database, value);
  // remove(dltData);
  console.log(remove(dltData));
};
