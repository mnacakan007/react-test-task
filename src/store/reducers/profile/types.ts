import {IProfile} from "../../../models/IProfile";

export interface ProfileState {
    profile: IProfile
    isLoading: boolean;
}

export enum ProfileActionEnum {
    SET_PROFILE = "SET_PROFILE",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetProfileAction {
    type: ProfileActionEnum.SET_PROFILE;
    payload: IProfile;
}
export interface SetIsLoadingAction {
    type: ProfileActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type ProfileAction =
    SetProfileAction |
    SetIsLoadingAction
