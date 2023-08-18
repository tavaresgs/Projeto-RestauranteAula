import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pedido: {
        backgroundColor: '#C3BFBF',
        borderWidth: 1,
        borderColor: '#C3BFBF',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        width: 350,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        height: 42,
        backgroundColor: '#A90404',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    }
});

export default styles;