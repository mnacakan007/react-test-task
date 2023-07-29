import axios, {AxiosResponse} from "axios";
import {IProfile} from "../models/IProfile";

export default class ProfileService {
    static async getProfile(): Promise<AxiosResponse<IProfile>> {
        return axios.get<IProfile>('./profile')
    }
}
