import {ProfileActionEnum, SetIsLoadingAction, SetProfileAction} from "./types";
import {AppDispatch} from "../../index";
import {IProfile} from "../../../models/IProfile";
import ProfileService from "../../../api/ProfileService";


export const ProfileActionCreators = {
    setProfile: (profile: IProfile): SetProfileAction => ({type: ProfileActionEnum.SET_PROFILE, payload: profile}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: ProfileActionEnum.SET_IS_LOADING, payload}),
    fetchProfile: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(ProfileActionCreators.setIsLoading(true));

            const response = await ProfileService.getProfile();
            const mockProfile = response.data;

            if (mockProfile) {
                dispatch(ProfileActionCreators.setProfile(mockProfile));
            }

            dispatch(ProfileActionCreators.setIsLoading(false));
        } catch (e) {
            console.log(e)
            dispatch(ProfileActionCreators.setIsLoading(false));
        }
    },
}
