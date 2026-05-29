import Item from "@/components/itemCarrinho";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Carrinho() {
const [textoItem, setTextoItem] = useState('');
const [compra, setCompra] = useState<string[]>([]);
const addItemCarrinho = () =>{
	if (textoItem.trim() === '') return;

	setCompra((prev) => [...prev, textoItem]);
    setTextoItem('')
}
	return (
		<View style={styles.container}>
			<View  style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.row}>
						<View style={styles.row2}>
							<Image
								source = {require('../../assets/images/logo-mercado.png')} 
								resizeMode = {"stretch"}
								style={styles.image}
							/>
							<Text style={styles.text}>Mercadin do Zé</Text>
						</View>
						<Link href="/home">
						<Image
							source = {require('../../assets/images/logo-home.png')} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						</Link>
					</View>
					<View style={styles.column2}>
						<Text style={styles.text2}>Meu Carrinho</Text>
						<TextInput style={styles.input}
						onChangeText={setTextoItem}
						value={textoItem}
						placeholder="Nome do Produto"
						/>
					</View>
					<TouchableOpacity style={styles.buttonRow} onPress={addItemCarrinho }>
						<Image
							source = {require('../../assets/images/icone-carrinho.png')} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<Text style={styles.text3}>Adicionar ao carrinho</Text>
					</TouchableOpacity>
					{compra.map((item, index) => (
						<Item key={index} listaDeCompras={item} />
					))}
				</View>
					<TouchableOpacity style={styles.dellista} onPress={() => setCompra([])}>
						<Text>Excluir Itens</Text>
					</TouchableOpacity>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	input: {
		width: '90%',
    	height: 40,
    	backgroundColor: '#d9d9d9',
    	borderRadius: 20,
    	padding: 15,
    	fontSize: 18,
		top: 4
	},
	buttonRow: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#5090E480",
		borderRadius: 50,
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginBottom: 48,
	},
	column: {
		alignItems: "center",
		paddingTop: 10,
	},
	column2: {
		alignSelf: "stretch",
		alignItems: "center",
		marginBottom: 13,
		marginHorizontal: 20,
	},
	image: {
		width: 40,
		height: 45,
		marginRight: 4,
	},
	image2: {
		width: 36,
		height: 36,
		marginRight: 29,
	},
	image3: {
		width: 20,
		height: 20,
		marginRight: 5,
	},
	row: {
		alignSelf: "stretch",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 5,
		paddingVertical: 13,
		marginBottom: 12,
		marginHorizontal: 15,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 12,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#DFEFF9",
	},
	text: {
		color: "#386398",
	},
	text2: {
		color: "#294973",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 9,
	},
	text3: {
		color: "#294973",
		fontSize: 12,
		fontWeight: "bold",
	},
	dellista: {
	position: 'absolute',
    top: 90, // distância do topo
    right: 20, // distância da direita
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
}
});