import {ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles'

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground style={styles.container} source={require('../../../assets/Fundo.png')}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('PedidosScreen')}>
                <Text style={styles.text}>Entregas</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default HomeScreen;