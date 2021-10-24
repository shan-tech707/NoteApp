import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  LogBox,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  FAB,
  List,
  Avatar,
  Card,
  IconButton,
  Colors,
} from 'react-native-paper';
import {Icon} from 'react-native-elements';
import Header from '../component/Header';
import {useSelector, useDispatch} from 'react-redux';
import {addnote, deletenote} from '../reducer/notesApp';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

function ViewNotes({navigation}) {
  // const [notes, setNotes] = useState([]);

  const notes = useSelector(state => state);
  const dispatch = useDispatch();

  const addNotes = note => {
    dispatch(addnote(note));
  };

  const deleteNote = id => {
    dispatch(deletenote(id));
  };

  // const addNotes = note => {
  //   note.id = notes.length + 1;
  //   setNotes([...notes, note]);
  // };

  return (
    <>
      <Header titleText="Simple Note Taking App" />
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any Notes</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({item}) => (
              <View style={styles.listView}>
                <Card.Title
                  title={item.note.noteTitle}
                  subtitle={item.note.noteDescription}
                  subtitleNumberOfLines={1}
                  titleStyle={styles.listTitle}
                  subtitleStyle={styles.listText}
                  left={props => (
                    <Avatar.Icon
                      {...props}
                      icon="text"
                      backgroundColor="black"
                      color="white"
                    />
                  )}
                  right={props => (
                    <View>
                      <IconButton
                        {...props}
                        icon="delete"
                        color={Colors.black}
                        onPress={() => deleteNote(item.id)}
                      />
                    </View>
                  )}
                />
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}

        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add a new Note"
          onPress={() => navigation.navigate('AddNotes', {addNote: addNotes})}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  fab: {
    backgroundColor: '#219653',
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
    color: 'black',
  },
  listText: {
    fontSize: 12,
    color: 'black',
  },
  listView: {
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 5,
    borderRadius: 15,
    borderColor: 'white',
  },
});

export default ViewNotes;
