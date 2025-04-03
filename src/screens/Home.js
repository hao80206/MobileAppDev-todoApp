import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Button from '../components/Button';
import Ionicons from "react-native-vector-icons/Ionicons";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import Todo from "./Todo";


export default function Home( {navigation, route}) {

  // Initial Todo List Object
  const [todo_list, setTodoList] = useState ([
    { id: 1, title: "Do mini Quiz 1", description: "Complete Quiz 1 before midnight", isDone: false },
    { id: 2, title: "Watch lecture 1", description: "Watch the recorded lecture for Week 1", isDone: false },
    { id: 3, title: "Write report", description: "Finish and submit the lab report", isDone: false }
  ]);

  // Check if new todo was added when returning from AddNewTodo
  useEffect(() => {
    if (route.params?.newTodo) {
      // Ensure the new todo has a unique ID
      const newTodo = route.params.newTodo;
      newTodo.id = todo_list.length ? todo_list[todo_list.length - 1].id + 1 : 1; // Auto-increment ID
      setTodoList(prevList => [...prevList, newTodo]);
    }
    navigation.setParams({ newTodo: undefined});
  }, [route.params?.newTodo]);

  const deleteTodo = (id) => {
    setTodoList(prevList => prevList.filter(todo => todo.id !==id));
  };

  const renderTodo = ({item}) => {
    return (
      <Todo 
      todo = {item}
      deleteTodo = {deleteTodo}
      />
    )
  }

  //-------------------------Screen View --------------------------------//
  return (
    <View style={styles.container}>
        {/*Header*/}
      <Title title = {"My Todo List"}/>
      <View style={styles.separator}></View>

    {/*render todoList */}
    <FlatList
        data={todo_list}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
    />
      <View style={styles.separator}></View>

        {/*Footer for button*/}
        <View style={styles.buttonPanel}>
            <Button
                label={
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="add-circle" size={25} color="white" />
                    <Text style={{ marginLeft: 5, color: 'white', fontSize: 16 }}>Add New Todo</Text>
                    </View>
                }
                width={300}
                fun={() => navigation.navigate("AddNewTodo", { setTodoList })}
                backgroundColor = "blue"
        
            />
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
    //position: 'absolute',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginVertical: 10,
  },
  buttonPanel: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',  
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: "white",
    },
  
});
