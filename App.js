import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Text>大家好 我是客語系大一的林暉祐</Text>
      <Text>也能叫我ㄏ或是暉</Text>
      <Text> 程式很菜 努力中 希望能多幫幫我這隻菜雞 </Text>
      <Text>請多多指教</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"orange",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
