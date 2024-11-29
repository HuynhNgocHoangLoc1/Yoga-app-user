// repositories/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import * as Crypto from 'expo-crypto';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqOa0quJ5_c0qCEAmk3zxDwICERaU4TkA",
  authDomain: "adminyoga-796e0.firebaseapp.com",
  databaseURL: "https://adminyoga-796e0-default-rtdb.firebaseio.com",
  projectId: "adminyoga-796e0",
  storageBucket: "adminyoga-796e0.firebasestorage.app",
  messagingSenderId: "210855395822",
  appId: "1:210855395822:web:4d6172360b77e3c8dfceff",
  measurementId: "G-61JFVTH9GE"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const listenClasses = (callback) => {
  const classesRef = ref(database, '/classes');
  onValue(classesRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const classesArray = Object.values(data);  
      callback(classesArray);  
    }
  });
};

export const listenCourses = (callback) => {
  const coursesRef = ref(database, '/courses');
  onValue(coursesRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const coursesArray = Object.values(data); 
      callback(coursesArray);  
    }
  });
};

export const getClassesByCourseId = (courseId, callback) => {
  const classesRef = ref(database, '/classes');
  onValue(classesRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const filteredClasses = Object.values(data).filter(classItem => classItem.courseId === courseId);
      callback(filteredClasses); 
    }
  });
};

export const validateUserLogin = async (username, password, callback) => {
  const usersRef = ref(database, '/users'); 
  onValue(usersRef, async (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const user = Object.values(data).find((user) => user.username === username);
      if (user) {
        const hashedPassword = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA256,
          password
        );

        if (user.password === hashedPassword) {
          callback(true, user); 
        } else {
          callback(false, null); 
        }
      } else {
        callback(false, null); 
      }
    } else {
      callback(false, null); 
    }
  });
};
