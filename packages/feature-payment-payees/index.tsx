import { StyleSheet, Text, View } from 'react-native';

export default function PaymentPayees() {
  return (
    <View>
      <Text style={styles.title}>Payment Payees</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
