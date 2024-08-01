// CategoryAnimals.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles/styles";

const CategoryAnimals = () => {
  return (
    <View style={globalStyles.containerglobal}>
      <Text style={globalStyles.title}>Animals</Text>
      {/* Aquí puedes agregar el contenido específico para la categoría de animales */}
      <Text style={globalStyles.paragraph}>Aquí van los detalles sobre animales.</Text>
    </View>
  );
};

export default CategoryAnimals;