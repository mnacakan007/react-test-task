import {NewsActionEnum, SetIsLoadingAction, SetNewsAction} from "./types";
import {INews} from "../../../models/INews";
import {AppDispatch} from "../../index";
import NewsService from "../../../api/Newservice";


export const NewsActionCreators = {
    setNews: (payload: INews[]): SetNewsAction => ({type: NewsActionEnum.SET_NEWS, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: NewsActionEnum.SET_IS_LOADING, payload}),
    createNews: (event: INews) =>  async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as INews[];
            json.push(event);
            dispatch(NewsActionCreators.setNews(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch (e) {
            console.log(e)
        }
    },
    fetchNews: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(NewsActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await NewsService.getNews();
                const mockUser = response.data;

                if (mockUser) {
                    dispatch(NewsActionCreators.setNews(mockUser));
                }

                dispatch(NewsActionCreators.setIsLoading(false));
            }, 1000)
        } catch (e) {
            console.log(e)
            dispatch(NewsActionCreators.setIsLoading(false));
        }
    }
}
