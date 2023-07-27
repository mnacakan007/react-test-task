import {INews} from "../../../models/INews";

export interface NewsState {
    news: INews[];
    isLoading: boolean;
}

export enum NewsActionEnum {
    SET_NEWS = "SET_NEWS",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetNewsAction {
    type: NewsActionEnum.SET_NEWS;
    payload: INews[]
}

export interface SetIsLoadingAction {
    type: NewsActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type NewsAction =
    SetNewsAction |
    SetIsLoadingAction
