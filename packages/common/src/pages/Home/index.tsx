import * as React from "react";
import { Image, Text, View } from "react-native";

interface IHomeProps {
  text: String;
}

export const Home: React.FC<IHomeProps> = (props) => {
  const image = require("./art/welcome.png");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        resizeMode="contain"
        style={{ width: "100%", height: 300 }}
        source={image}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 50,
          fontFamily: "Helvetica",
          fontWeight: "bold",
        }}
      >
        {`React Native ${props.text}'e Hoşgeldiniz.`}
      </Text>
    </View>
  );
};
export default Home;
