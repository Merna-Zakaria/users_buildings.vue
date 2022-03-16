import { MutationTree } from 'vuex';
import { UserState, User, Country } from './types';

export const mutations: MutationTree<UserState> = {
    GET_USERS(state, payload: Array<User>) {
        state.error = false;
        state.users = payload;
    },
    GET_USER(state, payload: User) {
        state.error = false;
        state.user = payload;
    },
    GET_COUNTRIES(state, payload: Array<Country>) {
        state.error = false;
        state.countries = payload;
    },
    GET_COUNTRY(state, payload: Country) {
        state.error = false;
        state.country = payload;
    },
    USER_INFO_ERROR(state) {
        state.error = true;
        state.user = undefined;
    }
};