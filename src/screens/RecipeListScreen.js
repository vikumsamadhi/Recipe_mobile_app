import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = ({ navigation, route }) => {
	return (


		<SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
			{/* render header */}


			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"             "} />

			<TouchableOpacity
				onPress={() => navigation.navigate("Welcome")}
				style={{
					position: "absolute",
					top: 15,
					left: 0,
					color: "red",
					marginVertical: 22,
					marginLeft: -10,
				}}
			>
				<Image
					source={require("../../assets/images/home-button.jpg")}
					style={{
						width: 45,
						height: 45,
						resizeMode: "contain",

					}}
				/>
			</TouchableOpacity>
			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
				{/* Categories list */}
				<CategoriesFilter />
			</View>

			{/* Recipe List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
				{/* Recipes list */}

				<RecipeCard />

			</View>
		</SafeAreaView>
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
