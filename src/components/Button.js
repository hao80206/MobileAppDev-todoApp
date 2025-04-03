import {View, StyleSheet, Text, Pressable} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";



export default function Button({ label, fun = ()=> {}, width=120, backgroundColor = "#add8e6" }){
    return (
        <Pressable
            style={({ pressed }) =>
                pressed ? [styles.addButton, {opacity: 0.5 , width, backgroundColor}] : [styles.addButton,{width, backgroundColor}]
        }
        onPress={fun}
        >
            <View style={styles.buttonContent}>
                <Text>{label}</Text>
            </View>
            
        </Pressable>
    );
}

const styles = StyleSheet.create ({
    addButton: {
        width: "100%",
        height: 50,
        backgroundColor: '#add8e6',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 10,

      },
    buttonContent: {
        flexDirection: 'row', 
        alignItems: 'center', 

        },
      addButtonText: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        maxWidth: "100%", // Ensure text doesn't overflow
        flexShrink: 1,
      },
})
