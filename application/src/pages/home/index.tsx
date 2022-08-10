import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, View, ViewStyle } from "react-native";
import CardPage from "../../component/CardPage";
import Api from "../../services/Api";

import { useNavigation } from "@react-navigation/native";

import { IData, HomeScreenNavigationProp } from "../../navigation/types";
import { color, spacing } from "../../theme";

const SEPARATOR: ViewStyle = {
  height: 1,
  backgroundColor: color.palette.lightGrey,
};

const LIST: ViewStyle = {
  marginHorizontal: spacing[4],
};

const FOOTER: ViewStyle = {
  marginBottom: spacing[4],
};

const Home = () => {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  const [isEndLoading, setIsEndLoading] = useState(false);
  let page = useRef(0);
  const [postData, setPostData] = useState<
    Array<{
      title: string;
      url: string;
      author: string;
      created_at: string;
    }>
  >([]);

  const callApi = async () => {
    try {
      const response = await Api(page.current);
      setPostData((oldArray) => [...oldArray, ...response.data.hits]);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   callApi();
  // }, [page]);

  const renderItem = ({ item, index }) => (
    <CardPage
      title={item.title}
      url={item.url}
      created_at={item.created_at}
      author={item.author}
      sendData={() => {
        navigate("Details", { item });
      }}
    />
  );

  const onEndReached = () => {
    page.current = page.current + 1;
    callApi();
  };

  useEffect(() => {
    callApi();
    const interval = setInterval(() => {
      page.current = page.current + 1;
      callApi();
      // onEndReached();
    }, 10000);
  }, []);

  const renderItemSeparator = () => <View style={SEPARATOR} />;
  const renderFooter = () => (
    <ActivityIndicator
      size={"large"}
      color={color.palette.lightGrey}
      style={FOOTER}
    />
  );

  return (
    <FlatList
      style={LIST}
      data={postData} //pass in our data array
      renderItem={renderItem} //tell React to use our renderItem function that we defined earlier
      ItemSeparatorComponent={renderItemSeparator}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter}
    />
  );
};
export default Home;
