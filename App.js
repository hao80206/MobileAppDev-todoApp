import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

    const todo_list = ['Do mini Quiz 1','Watch lecture 1', 'Write report' ];

  return (
    <View style={styles.container}>
        {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.title}>My Todo List</Text>
      </View>

      <Text style={styles.separator}></Text>

      <View style={styles.listContainer}>
        {todo_list.map((todo, index) => (
          <View key={index} style={styles.todoItem}>
            <Text style={styles.todoText}>{todo}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.separator}></Text>

      {/*Footer for button*/}
      <View style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Todo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    marginTop: 70,
    paddingVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',

  },
  todoItem: {
    backgroundColor: '#add8e6',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
  },
  todoText: {
      //fontWeight: 'bold',
      fontSize: 15,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 10,
  },
  addButton: {
    marginBottom: 30,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#32a87b',
    alignSelf: 'stretch',
  },
  addButtonText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
