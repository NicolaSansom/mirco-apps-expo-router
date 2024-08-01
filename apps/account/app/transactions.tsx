import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import AcccountTransactions from '@mirco-app/feature-account-transactions';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <AcccountTransactions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
