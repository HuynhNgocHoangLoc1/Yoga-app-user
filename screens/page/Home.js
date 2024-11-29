import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { listenCourses } from '../../respositories/firebase';
import colors from '../../constants/colors'; 

export default function Home() {
  const [courses, setCourses] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    listenCourses((data) => {
      // console.log('Fetched courses:', data); 
      setCourses(data || []);
    });

    return () => {};
  }, []);

  // Chia courses thành nhóm mỗi nhóm có 2 phần tử, đảo ngược mảng trước khi nhóm
  const groupCourses = (data) => {
    const reversedData = [...data].reverse();
    const grouped = [];
    for (let i = 0; i < reversedData.length; i += 2) {
      grouped.push(reversedData.slice(i, i + 2));
    }
    return grouped;
  };

  const groupedCourses = groupCourses(courses);

  const handleMorePress = (courseId) => {
    navigation.navigate('ClassInformation', { courseId });
  };

  if (!courses.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Courses</Text>
        <Text style={styles.emptyText}>No courses available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Courses</Text>
      </View>
      <FlatList
        data={groupedCourses}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {item.map((course) => (
              <View key={course.id} style={styles.itemContainer}>
                <View style={styles.column}>
                <Text style={styles.itemTitle}>{course.name}</Text>
                {/* <Text style={styles.itemText}>{course.duration} mins</Text> */}
                </View>
                {/* <Text style={styles.itemText}>Description: {course.description}</Text> */}
                {/* <Text style={styles.itemText}>Type: {course.type}</Text>
                <Text style={styles.itemText}>Day: {course.dayOfWeek}</Text>
                <Text style={styles.itemText}>Time: {course.time}</Text> */}
                {/* <Text style={styles.itemText}>Capacity: {course.capacity}</Text> */}
                <Text style={styles.priceText}>Price: ${course.price}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleMorePress(course.id)}
                >
                  <Text style={styles.buttonText}>More</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.2, 
    borderColor: 'black', 
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    flex: 1, // Đẩy text vào giữa container
  },
  itemText: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  row: {
    justifyContent: 'flex-start',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    textAlign: 'right', // Căn phải
  },
  column: {
    marginTop: 12,
  },
});

