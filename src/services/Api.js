import axios from 'axios';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  const key = "1014829-71a7f403d3f00bee795338530";
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);

};


export default {
  fetchImagesWithQuery,
};