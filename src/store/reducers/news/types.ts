import {INews} from "../../../models/INews";

export interface NewsState {
    news: INews[];
    isLoading: boolean;
    currentPage: number,
    perPage: number,
    totalCount: number,
}

export enum NewsActionEnum {
    SET_NEWS = "SET_NEWS",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
}

export interface SetNewsAction {
    type: NewsActionEnum.SET_NEWS;
    payload: INews[]
}

export interface SetIsLoadingAction {
    type: NewsActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetCurrentPageAction {
    type: NewsActionEnum.SET_CURRENT_PAGE;
    payload: number;
}

export interface SetTotalCountAction {
    type: NewsActionEnum.SET_TOTAL_COUNT;
    payload: number;
}


export type NewsAction =
    SetNewsAction |
    SetIsLoadingAction |
    SetCurrentPageAction |
    SetTotalCountAction
