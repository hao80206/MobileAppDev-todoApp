import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import { TextInput } from 'react-native-gesture-handler';
import Button from '../components/Button';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AddNewTodo( {navigation}) {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState ("");
  return (
    <View style={styles.container}>
    {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.title}>Add New Todo</Text>
      </View>

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
                    <Ionicons name="backspace-outline" size={20} color="white" />
                    <Text style={{ marginLeft: 5, color: 'white', fontSize: 16 }}>Cancel</Text>
                </View>
            }
            fun={() => navigation.goBack()} 
            />
            
            <Button label={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="duplicate-outline" size={20} color="white" />
                    <Text style={{ marginLeft: 5, color: 'white', fontSize: 16 }}>Save</Text>
                </View>
            }
            fun={() => navigation.goBack()} 
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
  header: {
    alignItems: 'center',
    //padding: 20,
    //marginTop: 90,
    paddingVertical: 5,
  },
  formContainer: {
    flex: 1,
    width: "100%",

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
