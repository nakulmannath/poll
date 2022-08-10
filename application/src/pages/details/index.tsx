import React from "react";
import { Text, View, ScrollView, TextStyle, ViewStyle } from "react-native";
import { color, spacing } from "../../theme";

const ROOT: ViewStyle = {
  flexGrow: 1,
  backgroundColor: color.palette.transparent,
  marginHorizontal: spacing[2],
};
const FULL: ViewStyle = {
  flex: 1,
};
const TEXT: TextStyle = {
  color: color.palette.black,
  lineHeight: 40,
  fontSize: 18,
  flexWrap: "wrap",
};

const Details = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={FULL}>
      <ScrollView style={ROOT}>
        <Text style={TEXT}>{JSON.stringify(item)}</Text>
      </ScrollView>
    </View>
  );
};
export default Details;
