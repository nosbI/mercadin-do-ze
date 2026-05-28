import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CircleMinus } from "lucide-react-native";

type listaDeItens = {
    listaDeCompras: string
}
const [textoItem, setTextoItem] = useState('');
const [compra, setCompra] = useState<string[]>([]);
const addItemCarrinho = () =>{
  if (textoItem.trim() === '') return;

  setCompra((prev) => [...prev, textoItem]);
    setTextoItem('')
}



export default function Item({listaDeCompras}: listaDeItens) {
  return (
    <View style={styles.container}>
      <View>
        <CircleMinus size={30} color={"#ff0000"}/>
      </View>
      <View>
          <Text style={styles.item}>{listaDeCompras}</Text>
          <TouchableOpacity onPress={() => setCompra([])}>
            <Text>Deletar Compras</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        marginHorizontal: 15,
        marginBottom: 20,
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    item: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})