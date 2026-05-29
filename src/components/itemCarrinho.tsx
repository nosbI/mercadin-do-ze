import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

type listaDeItens = {
    listaDeCompras: string
}

export default function Item({listaDeCompras}: listaDeItens) {
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.item}>{listaDeCompras}</Text>
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