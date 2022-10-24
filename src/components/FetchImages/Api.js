import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29490532-fde9d4c0daff56b8071258c00';

export default axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});
