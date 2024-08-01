import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
// import Payment from '@micro-app/payment';

export default function Payment() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
    </View>
  );
}

// export default function Payment() {
//   return <Payment />
// }

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
