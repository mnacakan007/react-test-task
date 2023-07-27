import {NewsAction, NewsActionEnum, NewsState} from "./types";

const initialState: NewsState = {
    news: [],
    isLoading: false,
}

export default function EventReducer(state = initialState, action: NewsAction): NewsState {
    switch (action.type) {
        case NewsActionEnum.SET_NEWS:
            return {...state, news: action.payload}
        default:
            return state;
    }
}
