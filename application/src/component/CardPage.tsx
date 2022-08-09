import { View, Text, TouchableOpacity } from "react-native";

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
      onPress={sendData}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
      }}
    >
      <Text>{title}</Text>
      <Text>{url}</Text>
      <Text>{created_at}</Text>
      <Text>{author}</Text>
    </TouchableOpacity>
  );
};

export default CardPage;
