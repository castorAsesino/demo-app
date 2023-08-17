import { StyleSheet, Text, View, Pressable,SafeAreaView  } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
	return (
		<SafeAreaView style={{ marginTop: 50 }}>
		<View style={{ flexDirection: "row" }}>
			<Text style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
				{headerText} 
			</Text>

			<FontAwesome name={headerIcon} size={24} color="#1771F5" />
		</View>
		</SafeAreaView>
		
	);
};

export default Header;

const styles = StyleSheet.create({});
