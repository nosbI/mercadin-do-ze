import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, TextInput} from "react-native";


export default function Carrinho() {
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
						<Image
							source = {require('../../assets/images/logo-home.png')} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<View style={styles.column2}>
						<Text style={styles.text2}>Meu Carrinho</Text>
						<TextInput style={styles.box} />
					</View>
					<TouchableOpacity style={styles.buttonRow} onPress={()=>alert('Item Adicionado ao Carrrinho!')}>
						<Image
							source = {require('../../assets/images/icone-carrinho.png')} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<Text style={styles.text3}>Adicionar ao carrinho</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	box: {
		height: 20,
		backgroundColor: "#D9D9D9",
		borderRadius: 50,
		width: 350
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
});