import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ButtomLoginSheet = () => {
  return (
    <View style={[styles.container]}>
      <Text>ButtomLoginSheet</Text>
    </View>
  );
};

export default ButtomLoginSheet;

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        bottom:0,
        width: "100%",
        backgroundColor:'#000'
    }
});
