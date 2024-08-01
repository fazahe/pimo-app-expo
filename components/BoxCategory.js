import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/styles";

const BoxCategory = ({ name, image, onSelect, style }) => {
  const navigation = useNavigation();

  return (
    <View style={[globalStyles.BoxCategory, style ]}>
      <TouchableOpacity
        style={globalStyles.touchboxcat}
        onPress={onSelect}
      >
        <Text style={globalStyles.subtitle}>{name}</Text>
        <Image source={image} style={globalStyles.imagboxcat} />
        
      </TouchableOpacity>
    </View>
  );
};

export default BoxCategory;
