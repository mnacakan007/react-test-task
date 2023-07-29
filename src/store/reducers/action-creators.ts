import {AuthActionCreators} from "./auth/action-creators";
import {NewsActionCreators} from "./news/action-creators";
import {ProfileActionCreators} from "./profile/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...NewsActionCreators,
    ...ProfileActionCreators
}
