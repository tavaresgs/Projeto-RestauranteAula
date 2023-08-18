import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        justifyContent: 'space-around',
    },
    logo:{
       width: 150,
       height: 150,
    },
    button: {
        backgroundColor: '#A90404',
        padding: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: 'center',
        margin: 10,
    },
    text: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;