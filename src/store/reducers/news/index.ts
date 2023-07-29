import {NewsAction, NewsActionEnum, NewsState} from "./types";

const initialState: NewsState = {
    news: [],
    isLoading: false,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
}

export default function EventReducer(state = initialState, action: NewsAction): NewsState {
    switch (action.type) {
        case NewsActionEnum.SET_NEWS:
            return {...state, news: action.payload}
        case NewsActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case NewsActionEnum.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state;
    }
}
