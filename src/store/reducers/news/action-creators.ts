import {NewsActionEnum, SetIsLoadingAction, SetNewsAction} from "./types";
import {INews} from "../../../models/INews";
import {AppDispatch} from "../../index";
import NewsService from "../../../api/Newservice";


export const NewsActionCreators = {
    setNews: (payload: INews[]): SetNewsAction => ({type: NewsActionEnum.SET_NEWS, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: NewsActionEnum.SET_IS_LOADING, payload}),
    createNews: (news: INews) =>  async (dispatch: AppDispatch) => {
            try {
                dispatch(NewsActionCreators.setIsLoading(true));

                await NewsService.addNews(news);
                const updatedNews = await NewsService.getNews();
                const updatedMockNews = updatedNews.data;

                dispatch(NewsActionCreators.setNews(updatedMockNews));
                dispatch(NewsActionCreators.setIsLoading(false));
            } catch (e) {
                console.log(e)
                dispatch(NewsActionCreators.setIsLoading(false));
            }
    },
    fetchNews: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(NewsActionCreators.setIsLoading(true));

            setTimeout(async () => {
                const response = await NewsService.getNews();
                const mockNews = response.data;

                if (mockNews) {
                    dispatch(NewsActionCreators.setNews(mockNews));
                }

                dispatch(NewsActionCreators.setIsLoading(false));
            }, 1000)
        } catch (e) {
            console.log(e)
            dispatch(NewsActionCreators.setIsLoading(false));
        }
    },
    deleteNews: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(NewsActionCreators.setIsLoading(true));

            await NewsService.deleteNews(id);
            const updatedNews = await NewsService.getNews();
            const updatedMockNews = updatedNews.data;

            dispatch(NewsActionCreators.setNews(updatedMockNews));
            dispatch(NewsActionCreators.setIsLoading(false));
        } catch (e) {
            console.log(e)
            dispatch(NewsActionCreators.setIsLoading(false));
        }
    }
}
