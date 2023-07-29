
import {IProfile} from "../../../models/IProfile";
import {ProfileAction, ProfileActionEnum, ProfileState} from "./types";


const initialState: ProfileState = {
    isLoading: false,
    profile: {} as IProfile
}

export default function profileReducer(state = initialState, action: ProfileAction): ProfileState {
    switch (action.type) {
        case ProfileActionEnum.SET_PROFILE:
            return {...state, profile: action.payload}
        case ProfileActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}
