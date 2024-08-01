import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { Link } from 'expo-router';
import PaymentSend from '@mirco-app/feature-payment-send';

export default function Send() {
  return (
    <View style={styles.container}>
      <PaymentSend />
      <Link href='/' />
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
