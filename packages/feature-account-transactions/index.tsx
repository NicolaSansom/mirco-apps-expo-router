import { StyleSheet, Text, View } from 'react-native';

export default function AcccountTransactions() {
  return (
    <View>
      <Text style={styles.title}>Account Transactions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
