import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() { 
	return (
		<View style={styles.container}>
		<View style={styles.view}>
			<View style={styles.row}>
					<View style={styles.row2}>
						<Image
							source = {require('@/assets/images/logo-mercado.png')} 
							resizeMode = {"stretch"}
							style={styles.image}
						/>
						<Text style={styles.text}>
							{"Mercadin do Zé"}
						</Text>
					</View>
					<TouchableOpacity style={styles.button}>
						<Link href="/carrinho">
						<Image
							source = {require('@/assets/images/logo-carrinho.png')}
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						</Link>
					</TouchableOpacity>
				</View>
				<View style={styles.row3}>
					<View style={styles.column}>
						<Text style={styles.text2}>
							{"MERCADIN DO ZÉ\n\nRua Em frente a minha casa\nnúmero 11"}
						</Text>
						<View style={styles.row4}>
							<Image
								source = {require('@/assets/images/logo-telefone.png')} 
								resizeMode = {"stretch"}
								style={styles.image3}
							/>
						<Text style={styles.text3}>{"+55 88 94002-8922"}</Text>
					</View>
				</View>
				<Image
					source = {require('@/assets/images/produtos.png')} 
					resizeMode = {"stretch"}
					style={styles.image4}
				/>
			</View>
		</View>
	</View>
)}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	button: {
		backgroundColor: "#DFEFF9",
		borderRadius: 50,
		padding: 8,
		marginRight: 33,
	},
	column: {
		alignItems: "center",
		backgroundColor: "#1B5581",
		paddingTop: 45,
		paddingHorizontal: 4,
		marginRight: 8,
	},
	image: {
		width: 40,
		height: 45,
		marginRight: 4,
	},
	image2: {
		width: 20,
		height: 20,
	},
	image3: {
		width: 12,
		height: 12,
		marginRight: 2,
	},
	image4: {
		height: 700,
		flex: 1,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 5,
		paddingVertical: 13,
		marginBottom: 15,
		marginHorizontal: 15,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 12,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 11,
		marginHorizontal: 22,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#1B5581",
		borderColor: "#4BC7E7",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 4,
		paddingHorizontal: 9,
		marginBottom: 10,
	},
	view: {
		flex: 1,
		backgroundColor: "#DFEFF9",
		paddingTop: 10,
	},
	text: {
		color: "#386398",
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 16,
		marginBottom: 545,
		width: 131,
	},
	text3: {
		color: "#FFFFFF",
		fontSize: 10,
	},
	text4: {
		color: "#FFFFFF",
	},
});