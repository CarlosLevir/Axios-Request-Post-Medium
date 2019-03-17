import request from './request';
import * as env from '../.env.json';

const getUnsubscribedTrailer = () => request.get(`/channels?key=${env.youtubeApiKey}&part=brandingSettings&id=${env.vevoChannelId}`);

export { getUnsubscribedTrailer };