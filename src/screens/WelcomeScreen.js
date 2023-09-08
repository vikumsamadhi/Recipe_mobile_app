import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/welcome1.png")}
				style={{ marginTop: 10 }}
			/>
			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>


			<Text style={{ color: "#f00000", fontSize: 22, fontWeight: "bold" }}>
				40K+ Premium Recipes
			</Text>

			<Text
				style={{
					fontSize: 32,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 30,
					marginBottom: 20,
				}}
			>
				Cook Like A Chef
			</Text>


			<TouchableOpacity
				onPress={() => navigation.navigate("About")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "50%",
					alignItems: "center",

				}}
			>
				<Text style={{
					fontSize: 18, color: "#ff0", fontWeight: "700",

				}}>
					About us!
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
