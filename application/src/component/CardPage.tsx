import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { color, spacing } from "../theme";

const ROW_CONTAINER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: spacing[1],
  marginRight: spacing[8],
};
const ITEM_CONTAINER: ViewStyle = {
  marginVertical: spacing[4],
  marginLeft: spacing[5],
  marginRight: spacing[4],
  // width: Dimensions.get("window").width - 30,
};
const LABEL: TextStyle = {
  fontSize: 16,
  color: color.palette.black,
  fontWeight: "bold",
  marginEnd: spacing[2],
};
const VALUE: TextStyle = {
  fontSize: 14,
  color: color.palette.black,
};

const CardPage = ({
  title,
  url,
  created_at,
  author,
  sendData,
}: {
  title: string;
  url: string;
  created_at: string;
  author: string;
  sendData: Function;
}) => {
  return (
    <TouchableOpacity
      style={ITEM_CONTAINER}
      activeOpacity={0.9}
      onPress={sendData}
    >
      <View style={ROW_CONTAINER}>
        <Text style={LABEL}>{"Title: "}</Text>
        <Text style={VALUE}>{title}</Text>
      </View>
      <View style={ROW_CONTAINER}>
        <Text style={LABEL}>{"Author: "}</Text>
        <Text style={VALUE}>{author}</Text>
      </View>
      <View style={ROW_CONTAINER}>
        <Text style={LABEL}>{"URL: "}</Text>
        <Text style={VALUE}>{url}</Text>
      </View>
      <View style={ROW_CONTAINER}>
        <Text style={LABEL}>{"Created At: "}</Text>
        <Text style={VALUE}>{created_at}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardPage;
