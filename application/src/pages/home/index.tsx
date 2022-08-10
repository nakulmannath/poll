import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import CardPage from "../../component/CardPage";
import Api from "../../services/Api";

import { useNavigation } from "@react-navigation/native";

import { IData, HomeScreenNavigationProp } from "../../navigation/types";

const Home = () => {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  const [page, setPage] = useState(0);
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
      const response = await Api(page);
      setPostData((oldArray) => [...oldArray, ...response.data.hits]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callApi();
  }, [page]);

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
    setPage((old) => old + 1);
  };

  useEffect(() => {
    setInterval(() => {
      callApi();
    }, 10000);
  }, [page]);

  return (
    <FlatList
      data={postData} //pass in our data array
      renderItem={renderItem} //tell React to use our renderItem function that we defined earlier
      onEndReached={onEndReached}
    />
  );
};
export default Home;
