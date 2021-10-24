import React, {useState} from 'react';
import {StyleSheet, View, Button, LogBox} from 'react-native';
import {Text, FAB, IconButton, TextInput, Colors} from 'react-native-paper';

import Header from '../component/Header';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

function AddNotes({route, navigation}) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  function onSaveNote() {
    route.params.addNote({
      noteTitle: noteTitle,
      noteDescription: noteDescription,
    });
    navigation.goBack();
  }

  return (
    <>
      <Header titleText="Add a New Note" />
      <IconButton
        icon="close"
        size={25}
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />

      <View style={styles.container}>
        <TextInput
          label="Add Note Title here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Description"
          value={noteDescription}
          onChangeText={setNoteDescription}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={noteTitle == '' ? true : false}
          onPress={() => onSaveNote()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    position: 'absolute',
    margin: 20,
    right: 10,
    top: 10,
    backgroundColor: '#219653',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#219653',
  },

});

export default AddNotes;
