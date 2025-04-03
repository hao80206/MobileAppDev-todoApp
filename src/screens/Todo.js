import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";


export default function Todo({todo, deleteTodo}) {
    const [expanded, setExpanded] = useState(false);
  

    const handlePress = () => {
        setExpanded(!expanded);
    }; 


    return (
      <View style={styles.todoItem}>
        {/* Title & Expand Button */}
        <Button 
          label={
            <View style={styles.todoHeader}>
              <Text style={styles.todoTitle}>{todo.title}</Text>
              <Ionicons
                name={expanded ? "caret-up-circle-outline" : "caret-down-circle-outline"}
                size={24}
                color="black"
              />
            </View>
          }
          width={"90%"}
          fun={() => setExpanded(!expanded)}
          onPress={handlePress}
        />
  
        {/* Expanded View */}
        {expanded && (
          <View style={styles.todoDetails}>
            <Text style={styles.todoDescription}>{todo.description}</Text>
            <View style={styles.controls}>
              <Button
                label={
                  <Ionicons name="close-circle-outline" size={24} color="red" />
                }
                width={50}
                fun={() => deleteTodo(todo.id)}
                
              />

            {!todo.isDone && (
                <Button
                label={
                  <Ionicons name="checkmark-circle-outline" size={24} color="green" />
                }
                width={50}
                fun={() => finishTodo(todo.id)}
              />
            )}
              
            </View>
          </View>
        )}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    todoItem: {
      backgroundColor: "#f9f9f9",
      padding: 10,
      borderRadius: 8,
      marginVertical: 5,
      elevation: 2,
    },
    todoHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center", 
    },
    todoTitle: {
      fontSize: 18,
      fontWeight: "bold",
     
    },
    todoDetails: {
      marginTop: 10,
      
    },
    todoDescription: {
      fontSize: 14,
      color: "gray",
    },
    controls: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 10,
    },
  });