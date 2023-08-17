import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

export default function Home({navigation}) {
  const styles = StyleSheet.create({});

	return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
    {/* render header */}
    <Header headerText={"Bienvenido/a, admin "} headerIcon={"bell-o"} />

    {/* Search Filter */}
    <SearchFilter icon="search" placeholder={"Buscar"} />

    {/* Categories filter */}

    <View style={{ marginTop: 22 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categorias</Text>
      {/* Categories list */}
      <CategoriesFilter />
    </View>

    {/* Recipe List Filter */}

    <View style={{ marginTop: 22, flex: 1 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Proyectos</Text>
      {/* Recipes list */}

      <RecipeCard />
    </View>
  </SafeAreaView>
	);
}
