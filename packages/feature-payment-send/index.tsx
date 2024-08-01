import { StyleSheet, Text, View } from 'react-native';

export default function PaymentSent() {
  return (
    <View>
      <Text style={styles.title}>Payment Sent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
