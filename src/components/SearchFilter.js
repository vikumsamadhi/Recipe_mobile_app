import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
	return (
		<View
			style={{
				backgroundColor: "#fff",
				flexDirection: "row",
				paddingVertical: 8,
				borderRadius: 8,
				paddingHorizontal: 15,
				marginVertical: 40,
				marginRight: 10,
				marginLeft: 50,

				shadowColor: "#000",
				shadowOffset: { width: 0, height: 4 },
				shadowOpacity: 0.1,
				shadowRadius: 7,
			}}
		>
			<FontAwesome name={icon} size={30} color="#fc01ff" />
			<TextInput style={{ paddingLeft: 10, fontSize: 14, color: "#808080" }}>
				{placeholder}
			</TextInput>
		</View>
	);
};

export default SearchFilter;

const styles = StyleSheet.create({});
