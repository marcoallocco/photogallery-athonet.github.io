/* import axios from "axios";

export const fetchPhoto = async (url,query,after) => {
  return axios
    .get("https://www.reddit.com/r/dog/top.json?count=15&limit=15")
    .then((res) => res.data)
    .catch((error) => error);
}; */

import axios from "axios";
const url = 'https://www.reddit.com/r/dog/top.json?count=15&limit=500'
const baseUrl = 'https://www.reddit.com/r'
const endUrl = '.json?count=15&limit=15'
export const fetchUsers = (data) => axios.get(`${baseUrl}/${data.query}/${endUrl}&after=${data.after}`);
export const fetchUser = (id) => axios.get(`${url}/${id}`);