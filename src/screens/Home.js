import { StyleSheet, Text, View } from 'react-native';
import AddButton from '../components/AddButton';

export default function Home( {navigation}) {

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
        <AddButton label="Add New Todo" fun={() => navigation.navigate("AddNewTodo")}></AddButton>
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
    height: 40,
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
    width: "90%",
    height: 50,
    backgroundColor: '#32a87b',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
});
