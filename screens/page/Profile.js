import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext';


export default function Profile() {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext); 

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Yes',
          onPress: () => {
            setUser(null); // Xóa thông tin user trong context
            navigation.navigate('Login'); 
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {user ? (
        <>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Username:</Text>
            <Text style={styles.value}>{user.username}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>User ID:</Text>
            <Text style={styles.value}>{user.userId}</Text>
          </View>
        </>
      ) : (
        <Text style={styles.message}>No user information available</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.primary,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 18,
    color: '#555',
  },
  message: {
    fontSize: 16,
    color: '#999',
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
