import * as worldNews from 'worldnewsapi-ts';
import * as dotenv from 'dotenv';

dotenv.config();
const API_KEY = dotenv.config().parsed?.WN_API_KEY || '';

const authConfig = {
    apiKey: API_KEY,
};

const configuration = worldNews.createConfiguration({
    authMethods: authConfig,
});


const apiInstance = new worldNews.NewsApi(configuration);
const body = {
    language: "en",
    minSentiment: -1,
    maxSentiment: -0.8,
    sort: "publish-time",
    sortDirection: "ASC",
    offset: 0,
    number: 10,
};

    
export async function getBadNews() {
    
             
    const news = await apiInstance.searchNews(
        undefined,
        undefined,
        body.language,
        body.minSentiment,
        body.maxSentiment,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        body.sort,
        body.sortDirection,
        body.offset,
        body.number,
        configuration
    );
    return news;
}

export async function GetRandomNews() {
    // Pick a random news from the list of fetched news
    const news = await getBadNews();
    // random choice
    const randomIndex = news.news ? Math.floor(Math.random() * news.news.length) : 0;
    
    return news.news ? news.news[randomIndex] : undefined;
}