import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY ='1014829-71a7f403d3f00bee795338530'


export const fetchedImages = async (query, page) => {
  let res = await axios
    .get(
      `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
    );
  return await new Promise(resolve =>
    setTimeout(() => {
      resolve(res.data);
    }, 500),
  );
};