import { StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from "react";
import { TextInput } from 'react-native-gesture-handler';

import Button from '../components/Button';
import Ionicons from "react-native-vector-icons/Ionicons";
import Title from '../components/Title';

export default function AddNewTodo( {navigation, route}) {

    //const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");
    const [description, setDescription] = useState ("");

    //Function for adding newTodo
    const saveTodo = (title, description) => {
      if (!title?.trim() || !description?.trim()) {
        Alert.alert("Both fields are required", "Please enter a title and description.");
        return;
      }
      const newTodo = {
          id: Date.now(), 
          title: title,
          description: description,
          isDone: false
      };

      // Show notification for success
        Alert.alert(
          'Success!!',
          "Todo Added Successfully!", // Message
          [{ text: "OK" }] // Button
      );

      // Use setTodoList passed via route params to update the todo list in Home
      route.params.setTodoList((prevTodos) => [...prevTodos, newTodo]);
      navigation.goBack();

      setTask(""); // Clear input fields
      setDescription("");
      }


  //-------------------------Screen View --------------------------------//
  return (
    <View style={styles.container}>
      {/*Header*/}
      <Title title = {"Add New Todo"}/>

      <Text style={styles.separator}></Text>

    {/* Form */}
    <View style={styles.formContainer}>
        
        <Text style={styles.inputTitle}>Title</Text>
            <TextInput style={styles.input}
                placeholder='My new todo title'
                value = {task}
                onChangeText={setTask}
            />
            
        <Text style={styles.inputTitle}>Description</Text>
            <TextInput style={[styles.input, styles.multiLineInput]}
                placeholder='Describe new Task'
                value = {description}
                onChangeText={setDescription}
                multiline={true}
            />
    </View>
        {/* Buttons in a Row */}
        <View style={styles.buttonPanel}>
            <Button label={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="backspace-outline" size={25} color="white" />
                    <Text style={{ marginLeft: 5, color: 'white', fontSize: 16 }}>Cancel</Text>
                </View>
            }
            fun={() => navigation.goBack()} 
            backgroundColor = "blue"
            />
            
            <Button label={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="duplicate-outline" size={20} color="white" />
                    <Text style={{ marginLeft: 5, color: 'white', fontSize: 16 }}>Save</Text>
                </View>
            }
            fun={() => saveTodo(task, description)}
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
  formContainer: {
    flex: 1,
    width: "100%",

  },
  inputTitle: {
    //flex: 1,
    marginLeft: 10,
    fontSize:18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',

  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    height: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },

  multiLineInput: {
    height: 50, 
    textAlignVertical: 'top', 
    },
  
  separator: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 10,
  },
  buttonPanel: {
    flexDirection: 'row',  
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
},
});
