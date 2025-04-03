import {View,Text, StyleSheet} from 'react-native'

export default function Title ({title}) {
    return (
        <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}

const styles = StyleSheet.create ({
    header: {
        alignItems: 'center',
        paddingVertical: 5,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      },
});