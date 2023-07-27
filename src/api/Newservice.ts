import axios, {AxiosResponse} from "axios";
import {INews} from "../models/INews";

export default class NewsService {
    static async getNews(): Promise<AxiosResponse<INews[]>> {
        return axios.get<INews[]>('./news.json')
    }
}
