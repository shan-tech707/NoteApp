import React,{useEffect} from 'react'
import {StyleSheet, View, Image, StatusBar, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export default function SplashScreen({navigation}) {

    useEffect(() => {
        const timer=setTimeout(() => {
            navigation.replace('ViewNotes');
        }, 3000);
    }, [])

    return (
      <View style={styles.container}>
        <Text>NoteApp Using Redux</Text>
        <ActivityIndicator style={styles.loader} size="large" color="black" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 150.15,
    width: 200,
    marginBottom: 30,
  },
  loader: {
    justifyContent: 'center',
    marginTop: 20,
  },
});
