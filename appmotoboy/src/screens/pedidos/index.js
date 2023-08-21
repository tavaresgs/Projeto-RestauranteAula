import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles'
import ItemPedido from '../../components/item';

const PedidosScreen = ({ navigation }) => {

    const [pedidos, setPedidos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const uri = 'http://localhost:3000/pedido';
    useEffect(() => {
        fetch(uri, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setPedidos(data);
            });
        fetch('http://localhost:3000/cliente', { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setClientes(data)
            });
            
    }, []);

    const concluirPedido = (id, clienteId) => {
        const corpo = {
            id: id,
            dataEntrega: new Date(),
        }
       
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(corpo)
        };
        fetch(uri, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 202) {
                    navigation.navigate('HomeScreen');
                } else {
                    alert('Erro ao concluir pedido!');
                }
            });
    }

    return (
        <ImageBackground style={styles.container} source={require('../../../assets/Fundo.png')}>
            <FlatList
                data={pedidos}
                renderItem={({ item }) => {
                    if (
                        item.clienteId === 1 ||
                        (!item.dataCozinha || item.dataEntrega)
                    ) {
                        return null; // Não renderizar nada para esses casos
                    }
    
                    return (
                        <View style={styles.pedido}>
                            <Text style={styles.text}>ID: {item.id}</Text>
                            <Text style={styles.text}>
                                Data: {item.dataPedido.toString().slice(0, 10) + " "}
                                Hora: {item.dataPedido.toString().slice(11, 16)}
                            </Text>
                            <ItemPedido item = {item} clientes = {clientes} />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => concluirPedido(item.id, item.clienteId)}
                            >
                                <Text style={styles.buttonText}>Entregue</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </ImageBackground>
    );
    
}

export default PedidosScreen;