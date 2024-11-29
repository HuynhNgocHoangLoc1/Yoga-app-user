import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getClassesByCourseId } from '../../respositories/firebase';
import { useNavigation } from '@react-navigation/native';

export default function ClassInformation({ route }) {
  const { courseId } = route.params; 
  const [classes, setClasses] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Lấy dữ liệu lớp học theo courseId
    getClassesByCourseId(courseId, setClasses);
  }, [courseId]);

  const handleMorePress = (classDetails) => {
    // Điều hướng đến màn hình ClassDetail và truyền thông tin lớp học
    navigation.navigate('ClassDetail', { classDetails });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Classes Infor</Text>
      <FlatList
        data={classes}
        keyExtractor={(item) => item.id.toString()} // Dùng ID của lớp học để làm key
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.teacherName}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleMorePress(item)} 
            >
              <Text style={styles.buttonText}>More</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.primary,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    width: '100%',
    borderWidth: 0.2, 
    borderColor: 'black', 
  },
  itemText: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.primary, 
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});
