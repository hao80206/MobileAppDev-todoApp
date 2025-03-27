import {View, StyleSheet, Text, Pressable} from "react-native";


export default function AddButton({ label, fun = ()=> {}, width=90 }){
    return (
        <Pressable
            style={({ pressed }) =>
                pressed ? [styles.addButton, {opacity: 0.5}, {width}] : [styles.addButton,{width}]
        }
        onPress={fun}
        >
            <View style={styles.buttonContent}>
                <Text style={styles.addButtonText}>{label}</Text>
            </View>
            
        </Pressable>
    );
}

const styles = StyleSheet.create ({
    addButton: {
        width: "90%",
        height: 50,
        backgroundColor: '#32a87b',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
    buttonContent: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1,
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
