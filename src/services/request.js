import axios from 'axios';
import * as env from '../.env.json';

const request = axios.create({
  baseURL: env.youtubeApiUrl
});

export default request;