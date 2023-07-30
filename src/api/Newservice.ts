import axios, {AxiosResponse} from "axios";
import {INews} from "../models/INews";

export default class NewsService {
    static async getNews(currentPage: number, perPage: number): Promise<AxiosResponse<INews[]>> {
        return axios.get<INews[]>(`/news?_page=${currentPage}&_limit=${perPage}`);
    }

    static async addNews(news: INews): Promise<AxiosResponse<{ news: INews[] }>> {
        return axios.post<{ news: INews[] }>('/news', news);
    }

    static async deleteNews(id: string): Promise<AxiosResponse<void>> {
        return axios.delete<void>(`/news/${id}`);
    }
}
