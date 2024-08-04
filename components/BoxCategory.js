import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import globalStyles from "../styles/styles";

const BoxCategory = ({ name, image, onSelect, style }) => {
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
