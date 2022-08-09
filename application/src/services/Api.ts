import axios from "axios";
const BASE_URL = "https://hn.algolia.com/api/v1/search_by_date"

const Api = (page: number) => {
  const url = `${BASE_URL}/?tags=story&page=${page}` 
  return axios.get(url);
}

export default Api;