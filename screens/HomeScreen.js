import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import globalStyles from "../styles/styles";
import { useTranslation } from "react-i18next";
import HeaderScreen from "../components/HeaderScreen";



const HomeScreen = ({ navigation }) => {
    const { t } = useTranslation();
  
    return (
      <View style={globalStyles.containerglobal}>
        <HeaderScreen />
        <View style={globalStyles.containercenter}>
          <Image
            style={globalStyles.parents}
            source={require("../assets/padres.png")}
          />
          <Text style={globalStyles.title}>¡Padres, tengan en cuenta!</Text>
          <Text style={globalStyles.paragraph}>
          La Academia Americana de Pediatría sugiere limitar el tiempo de pantalla a una hora al día para niños de 2 a 5 años, con contenido de alta calidad y supervisado por los padres.
          </Text>
        </View>
        <View style={globalStyles.containerbutton}>
        <TouchableOpacity style={[globalStyles.button]} onPress={() => navigation.navigate("Details")}>
          <Text style={[globalStyles.buttonText]}>Continuar</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };
  

export default HomeScreen;
