import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <View style={styles.container}>
      <Buttons title="" type="secunday" onPress={() => {}}>
        iae
      </Buttons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
