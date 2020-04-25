import * as React from "react";
import { Image, Text, View } from "react-native";
import { store } from "./redux/store";
import Users from "./pages/Users";
import { Provider } from "react-redux";
import { setBaseUrl } from "./utils/helper";

interface PropsApp {
  text: String;
}

export const App: React.FC<PropsApp> = (props) => {
  console.log(props.text);
  setBaseUrl();

  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Users />
      </View>
    </Provider>
  );
};
export default App;
