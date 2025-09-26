import axios from 'axios';

const newsApi = import.meta.env.VITE_NEWS_API_URL;
const apikey = import.meta.env.VITE_NEWS_API_KEY;
const sourcesEndpoint = import.meta.env.VITE_SOURCE_ENDPOINT_PATH;
const topHeadlinesEndpoint = import.meta.env.VITE_TOP_HEADLINES_ENDPOINT_PATH;

const http = axios.create({baseURL: newsApi, params: {apikey: apikey}});

export class NewsApi{
    getSources(){
        return http.get(sourcesEndpoint);
    }
    getArticlesForSourceId(sourceId){
        return http.get(topHeadlinesEndpoint, {params:{sources:sourceId}});
    }
}
