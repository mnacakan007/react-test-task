import {NewsActionEnum, SetCurrentPageAction, SetIsLoadingAction, SetNewsAction, SetTotalCountAction} from "./types";
import {INews} from "../../../models/INews";
import {AppDispatch, RootState} from "../../index";
import NewsService from "../../../api/Newservice";
import {HEADERS_TOTAL_COUNT_KEY} from "../../../shared/const/api";

export const NewsActionCreators = {
    setNews: (payload: INews[]): SetNewsAction => ({type: NewsActionEnum.SET_NEWS, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: NewsActionEnum.SET_IS_LOADING, payload}),
    setCurrentPage: (payload: number): SetCurrentPageAction => ({type: NewsActionEnum.SET_CURRENT_PAGE, payload}),
    setTotalCount: (payload: number): SetTotalCountAction => ({type: NewsActionEnum.SET_TOTAL_COUNT, payload}),
    createNews: (news: INews) => async (dispatch: AppDispatch, getState: () => RootState) => {
        try {
            dispatch(NewsActionCreators.setIsLoading(true));

            await NewsService.addNews(news);
            const currentState = getState().news;
            const newsCurrentState = currentState.news;

            dispatch(NewsActionCreators.setNews([...newsCurrentState, news]));
            dispatch(NewsActionCreators.setIsLoading(false));
        } catch (e) {
            console.log(e)
            dispatch(NewsActionCreators.setIsLoading(false));
        }
    },
    fetchNews: (currentPage?: number, perPage?: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
        try {
            dispatch(NewsActionCreators.setIsLoading(true));

            const response = await NewsService.getNews(currentPage, perPage);
            const totalCount = response.headers[HEADERS_TOTAL_COUNT_KEY];

            dispatch(NewsActionCreators.setTotalCount(totalCount));

            const mockNews = response.data;
            const currentState = getState().news;
            const newsCurrentState = currentState.news;

            if (mockNews && newsCurrentState.length < totalCount) {
                dispatch(NewsActionCreators.setNews([...newsCurrentState, ...mockNews]));
            }

            dispatch(NewsActionCreators.setIsLoading(false));
        } catch (e) {
            console.log(e)
            dispatch(NewsActionCreators.setIsLoading(false));
        }
    },
    deleteNews: (id: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
        try {
            dispatch(NewsActionCreators.setIsLoading(true));

            await NewsService.deleteNews(id);
            const currentState = getState().news;
            const newsCurrentState = currentState.news;
            const updatedMockNews = newsCurrentState.filter(news => news.id !== id);

            dispatch(NewsActionCreators.setNews(updatedMockNews));
            dispatch(NewsActionCreators.setIsLoading(false));
        } catch (e) {
            console.log(e)
            dispatch(NewsActionCreators.setIsLoading(false));
        }
    }
}
