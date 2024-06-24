import { StyleSheet, View } from 'react-native';
import { Insert } from './banco/Insert';
import { AllContacts } from './banco/AllContacts';
import { Remove } from './banco/Delete';
import { Update } from './banco/Update';

export default function App() {

  return (
    <View style={styles.container}>
      <Insert/>
      <AllContacts/>
      <Remove/>
      <Update/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});