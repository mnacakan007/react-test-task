import axios, {AxiosResponse} from "axios";
import {INews} from "../models/INews";

export default class NewsService {
    static async getNews(): Promise<AxiosResponse<INews[]>> {
        return axios.get<INews[]>('./news.json');
    }

    static async addNews(news: INews): Promise<AxiosResponse<INews[]>> {
        return axios.post<INews[]>('./news.json', JSON.stringify(news));
    }
}
