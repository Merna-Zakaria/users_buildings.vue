import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { UserState, User } from './types';
import { RootState } from '../types';

export const state: UserState = {
    user: undefined,
    users: [],
    country: undefined,
    countries: [],
    error: false,
    CountriesGeojson: {  
        type: '',
        features: []}

};

const namespaced: boolean = true;

export const userInfo: Module<UserState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};