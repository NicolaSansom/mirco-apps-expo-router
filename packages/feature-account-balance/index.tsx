import { StyleSheet, Text, View } from 'react-native';

export default function AcccountBalance() {
  return (
    <View>
      <Text style={styles.title}>Account Balance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
