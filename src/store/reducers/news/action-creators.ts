import {NewsActionEnum, SetIsLoadingAction, SetNewsAction} from "./types";
import {INews} from "../../../models/INews";
import {AppDispatch, RootState} from "../../index";

// Why do you see commented codes

// When I try post or delete something from my local database (db.json)
// for example add news or delete news the page refreshes in the browser.
// I read that this behavior is possible if you access the local json file.
// Well, I didn't find how to fix it.


export const NewsActionCreators = {
    setNews: (payload: INews[]): SetNewsAction => ({type: NewsActionEnum.SET_NEWS, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: NewsActionEnum.SET_IS_LOADING, payload}),
    createNews: (news: INews) => async (dispatch: AppDispatch) => {
        // Todo find solution work with local db.json
        // try {
        //     dispatch(NewsActionCreators.setIsLoading(true));
        //
        //     await NewsService.addNews(news);
        //     const updatedNews = await NewsService.getNews();
        //     const updatedMockNews = updatedNews.data;
        //
        //     dispatch(NewsActionCreators.setNews(updatedMockNews));
        //     dispatch(NewsActionCreators.setIsLoading(false));
        // } catch (e) {
        //     console.log(e)
        //     dispatch(NewsActionCreators.setIsLoading(false));
        // }

        try {
            const newsList = localStorage.getItem("news") || '[]'
            const json = JSON.parse(newsList) as INews[];
            json.push(news);
            dispatch(NewsActionCreators.setNews(json));
            dispatch(NewsActionCreators.setIsLoading(false));
            localStorage.setItem('news', JSON.stringify(json));
        } catch (e) {
            console.log(e)
        }
    },
    fetchNews: (currentPage: number, perPage: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
        // Todo find solution work with local db.json
        // try {
        //     dispatch(NewsActionCreators.setIsLoading(true));
        //
        //     setTimeout(async () => {
        //         const response = await NewsService.getNews(currentPage, perPage);
        //         const mockNews = response.data;
        //         const currentState = getState().news;
        //         const newsCurrentState = currentState.news;
        //
        //         if (mockNews) {
        //             dispatch(NewsActionCreators.setNews([...newsCurrentState, ...mockNews]));
        //         }
        //
        //         dispatch(NewsActionCreators.setIsLoading(false));
        //     }, 1000)
        // } catch (e) {
        //     console.log(e)
        //     dispatch(NewsActionCreators.setIsLoading(false));
        // }

        try {
            dispatch(NewsActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const newsList = localStorage.getItem("news") || '[]'
                const json = JSON.parse(newsList) as INews[];

                if (json) {
                    localStorage.setItem('news', JSON.stringify(json));
                    dispatch(NewsActionCreators.setNews(json));
                }

                dispatch(NewsActionCreators.setIsLoading(false));
            }, 3000)
        } catch (e) {
            console.log(e)
            dispatch(NewsActionCreators.setIsLoading(false));
        }
    },
    deleteNews: (id: string) => async (dispatch: AppDispatch) => {
        // Todo find solution work with local db.json
        // try {
        //     dispatch(NewsActionCreators.setIsLoading(true));
        //
        //     await NewsService.deleteNews(id);
        //     const updatedNews = await NewsService.getNews();
        //     const updatedMockNews = updatedNews.data;
        //
        //     dispatch(NewsActionCreators.setNews(updatedMockNews));
        //     dispatch(NewsActionCreators.setIsLoading(false));
        // } catch (e) {
        //     console.log(e)
        //     dispatch(NewsActionCreators.setIsLoading(false));
        // }

        try {
            const newsList = localStorage.getItem("news") || '[]'
            const json = JSON.parse(newsList) as INews[];
            const indexToRemove = json.findIndex(item => item.id === id);

            if (indexToRemove > -1) {
                json.splice(indexToRemove, 1);
                localStorage.setItem('news', JSON.stringify(json));
            }

            dispatch(NewsActionCreators.setNews(json));
        } catch (e) {
            console.log(e)
        }
    }
}
