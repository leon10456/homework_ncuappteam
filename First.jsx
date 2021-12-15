import React, { useState } from 'react';
import {
  Button, Text, View, SafeAreaView,
} from 'react-native';
import styles from './Styles';

function First({ navigation }) {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText(titleText === "Bird's Nest" ? "Bird's Nest [pressed]" : "Bird's Nest");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {'\n'}
          {titleText}
          {'\n'}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('下一頁')}
        />
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}
        >
          <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
          <View style={{ backgroundColor: 'green', flex: 0.5 }} />
          <Text>嗨嗨!</Text>
        </View>
        <View
          style={{
            height: 200,
            padding: 20,
          }}
        >
          <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
          <View style={{ backgroundColor: 'red', flex: 0.5 }} />
          <Text>妳好!</Text>
        </View>
      </View>
    </SafeAreaView>

  );
}

export default First;
