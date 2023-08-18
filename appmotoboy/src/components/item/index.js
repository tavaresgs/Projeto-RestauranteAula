import { View, Text, FlatList } from 'react-native';
import styles from './styles'

export default function ItemPedido({ item }) {
    // console.log({ item })


    // if(item.clienteId == 1 || item.dataCozinha === undefined || !item.dataEntrega) {
        //     return null
        // }
    
    return (
        <FlatList
                data={[item]} // Deve ser um array, não o objeto 'item'
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.text}>ID: #{item.id}</Text>
                        <Text style={styles.text}>Hora da solicitação{item.dataPedido}</Text>
                        <Text style={styles.text}>Valor do pedido: R${(item.valorPedido).toFixed(2)}</Text>
                        <Text style={styles.text}>Valor da entrega: R${(item.valorEntrega).toFixed(2)}</Text>
                        <Text style={styles.text}>Valor total: R${(Number(item.valorEntrega) + Number(item.valorPedido)).toFixed(2)}</Text>
                        <Text style={styles.text}>CEP: {item.cep}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()} // Adicione um keyExtractor para a FlatList
            />

    )
}