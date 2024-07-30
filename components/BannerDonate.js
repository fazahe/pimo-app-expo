import React from "react";
import { View, Image, Linking, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/styles";

export default function BannerDonate() {
  return (
    <View style={globalStyles.banner}>
      <TouchableOpacity
        style={globalStyles.buttonbanner}
        onPress={() =>
          Linking.openURL(
            "https://www.paypal.com/donate/?hosted_button_id=Y4JX6WSVBD3L4"
          )
        }
        title="Donar con Paypal"
      >
        <View style={globalStyles.contbanner}>
          <Text style={globalStyles.subtitle}>¡Apoya a Pimo!</Text>
          <Text style={globalStyles.paragraph_small}>
            Tu donación ayuda a que más niños aprendan y se diviertan con Pimo.
            Contribuye al crecimiento de nuestra app y haz que cada día sea
            especial. ¡Gracias por tu apoyo!
          </Text>
        </View>
        <View style={globalStyles.contimgbanner}>
          <Image
            style={globalStyles.imagebanner}
            source={require("../assets/donate.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
