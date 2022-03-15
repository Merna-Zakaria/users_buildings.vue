import { MutationTree } from 'vuex';
import { UserState, User } from './types';

export const mutations: MutationTree<UserState> = {
    GET_USERS(state, payload: Array<User>) {
        // console.log('payload mutation', payload)
        state.error = false;
        state.users = payload;
    },
    GET_USER(state, payload: User) {
        state.error = false;
        state.user = payload;
    },
    USER_INFO_ERROR(state) {
        state.error = true;
        state.user = undefined;
    }
};