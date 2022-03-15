import { GetterTree } from 'vuex';
import { UserState, User} from './types';
import { RootState } from '../types';

export const getters: GetterTree<UserState, RootState> = {
    usersList(state) {
       console.log('state', state)
       return state.users
    },
    user(state) {
        return state.user
     }
};