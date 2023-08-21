import { View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles'

export default function ItemPedido({ item, clientes }) {

    const [cliente, setCliente] = useState(null) // define uma variável para guardar um cliente especifico

    useEffect(() => {
        console.log(item)
        clientes.forEach(cliente => { // percorre os clientes que vem do fetch
            if (cliente.id == item.clienteId) setCliente(cliente) // se o id do cliente for igual ao id do clienteId do item, ele guarda na variável
        })
}, [clientes, item.clienteId]) // repete o array de clientes inteiro

    return (
        <FlatList
            data={[item]} // Deve ser um array, não o objeto 'item'
            renderItem={({ item }) => (
                <View>
                    <Text style={styles.text}>Valor do pedido: R${(item.valorPedido).toFixed(2)}</Text>
                    <Text style={styles.text}>Valor da entrega: R${(item.valorEntrega).toFixed(2)}</Text>
                    <Text style={styles.text}>Valor total: R${(Number(item.valorEntrega) + Number(item.valorPedido)).toFixed(2)}</Text>
                    {/*  mostra o cpf do cliente na variavel*/}
                    {cliente && <Text style={styles.text}>CEP: {cliente.enderecoCep}</Text>} 
                </View>
            )}
            keyExtractor={(item) => item.id.toString()} // Adicione um keyExtractor para a FlatList
        />
    )
}