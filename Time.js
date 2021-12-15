import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD3BnkIPNp9dCqfhGrokC55ctWv9T5vkpc',
  authDomain: 'test-4e485.firebaseapp.com',
  projectId: 'test-4e485',
  storageBucket: 'test-4e485.appspot.com',
  messagingSenderId: '625238849613',
  appId: '1:625238849613:web:816ef774b13a3cc54e0404',
};

function toDateString(time) {
  const date = time;
  const dateString = `${date.getFullYear().toString()}/${
    (date.getMonth() + 1).toString().padStart(2, '0')}/${
    date.getDate().toString().padStart(2, '0')}  ${
    date.getHours().toString().padStart(2, '0')}:${
    date.getMinutes().toString().padStart(2, '0')}:${
    date.getSeconds().toString().padStart(2, '0')}`;

  return dateString;
}

async function getLastestTime() {
  const db = firebase.firestore();
  const TimeSet = await db.collection('time').orderBy('update_time', 'desc').limit(1).get();

  let real = false;
  TimeSet.forEach((doc) => {
    if (doc.exists) {
      real = true;
    }
    console.log(doc.data().update_time);
  });
  if (!real) {
    console.log('Time queue is empty.');
    console.warn('Time queue is empty.');
  }
}

async function getAllTimes() {
  const db = firebase.firestore();
  const TimeSet = await db.collection('time').orderBy('update_time', 'desc').get();

  let real = false;
  TimeSet.forEach((doc) => {
    if (doc.exists) {
      real = true;
    }
    console.log(doc.data().update_time);
  });
  if (!real) {
    console.log('Time queue is empty.');
    console.warn('Time queue is empty.');
  }
}

function addCurrentTime() {
  const date = new Date();
  const dateString = toDateString(date);
  const db = firebase.firestore();
  const TimeSet = db.collection('time');
  const data = {
    update_time: dateString,
  };
  TimeSet.add(data);
  // console.log(dateString);
}

async function deleteEarliestTime() {
  const db = firebase.firestore();
  const TimeSet = await db.collection('time').orderBy('update_time').limit(1).get();

  let real = false;
  TimeSet.forEach((doc) => {
    if (doc.exists) {
      real = true;
    }
    db.collection('time').doc(doc.id).delete();
  });
  if (!real) {
    console.log('Time queue is empty.');
    console.warn('Time queue is empty.');
  }
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default {
  toDateString,
  addCurrentTime,
  getAllTimes,
  getLastestTime,
  deleteEarliestTime,
};
