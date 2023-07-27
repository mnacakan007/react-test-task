import {AuthActionCreators} from "./auth/action-creators";
import {NewsActionCreators} from "./news/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...NewsActionCreators
}
