import React from 'react';
import {
  RefreshControl, StyleSheet, Text, Button, SafeAreaView, ScrollView,
} from 'react-native';
import firebase from 'firebase';
import TimeController from './Time';

const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const firebaseConfig = {
  apiKey: 'AIzaSyD3BnkIPNp9dCqfhGrokC55ctWv9T5vkpc',
  authDomain: 'test-4e485.firebaseapp.com',
  projectId: 'test-4e485',
  storageBucket: 'test-4e485.appspot.com',
  messagingSenderId: '625238849613',
  appId: '1:625238849613:web:816ef774b13a3cc54e0404',
};
  // Firebase Configuration

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
      >
        <Text>Pull down to refresh</Text>
        <Button onPress={TimeController.getLastestTime} title="get lastest time" color="#FFBF09" />
        <Text>{'\n'}</Text>
        <Button onPress={TimeController.getAllTimes} title="get all time" color="#007aaa" />
        <Text>{'\n'}</Text>
        <Button onPress={TimeController.addCurrentTime} title="add current time" color="#00cc00" />
        <Text>{'\n'}</Text>
        <Button onPress={TimeController.deleteEarliestTime} title="delete earliest time" color="#cc0023" />
      </ScrollView>
    </SafeAreaView>
  );
}

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import First from './First';
// import Second from './Second';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer initialRouteName="Home">
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={First} />
//         <Stack.Screen name="Next" component={Second} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import React from 'react';
// import {
//   StyleSheet, Text, Button, View,
// } from 'react-native';
// import firebase from 'firebase';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const firebaseConfig = {
//  apiKey: "AIzaSyD3BnkIPNp9dCqfhGrokC55ctWv9T5vkpc",
//  authDomain: "test-4e485.firebaseapp.com",
//  projectId: "test-4e485",
//  storageBucket: "test-4e485.appspot.com",
//  messagingSenderId: "625238849613",
// appId: "1:625238849613:web:816ef774b13a3cc54e0404"
// };

// async function getFruit() {
//   const db = firebase.firestore();
//   const fruitRef = db.collection('fruit').doc('t0W797m6Ee8R8tQPlp47');
//   const doc = await fruitRef.get();
//   console.log(doc.data());
// }

// function addFruit() {
//   const db = firebase.firestore();
//   const fruitsRef = db.collection('fruit');
//   const fruit = {
//     name: 'grape',
//     price: '24',
//     onSale: false,
//   };
//   fruitsRef.add(fruit);
// }

// async function getAllFruits() {
//   const db = firebase.firestore();
//   const fruitsRef = db.collection('fruit');
//   const querySnapshot = await fruitsRef.get();
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, '=>', doc.data());
//   });
// }

// function deleteFruit() {
//   const db = firebase.firestore();
//   const fruitRef = db.collection('fruit').doc('ziaW4EOvGyZIsSplZoY7');
//   fruitRef.delete();
// }

// export default function App() {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   } else {
//     firebase.app();
//   }

//   return (
//     <View style={styles.container}>
//       <Button onPress={getFruit} title="get fruit" color="#007FFF" />
//       <Text>{'\n'}</Text>
//       <Button onPress={getAllFruits} title="get all fruits" color="#0000FF" />
//       <Text>{'\n'}</Text>
//       <Button onPress={addFruit} title="add fruit" color="#00FF00" />
//       <Text>{'\n'}</Text>
//       <Button onPress={deleteFruit} title="delete fruit" color="#FF0000" />
//       <Text>{'\n'}</Text>
//       {/* <Button onPress={switchFruitOnSale} title="switch on sale" color="#FFBF00" /> */}
//     </View>
//   );
// }
