
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export const PER_PAGE = 15;

export const API_KEY = 'api/?key=46534617-f030fa7fdef1b59853604705d';

export function getImagesByQuery(query = '', page = 1) {
  const editedQuery = query.trim().split(' ').join('+');
  return axios(
    `${API_KEY}&q=${editedQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`
  );
}