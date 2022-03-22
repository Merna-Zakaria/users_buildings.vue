import { ActionTree } from 'vuex';
import axios from 'axios';
import { UserState, Building, User, Country, CountriesGeojson } from './types';
import { RootState } from '../types';

export const actions: ActionTree<UserState, RootState> = {
    getUsersRequest({ commit }, userId): any {
        axios({
            method: 'get',
            url: 'users.json'
        }).then((response) => {
            const payload: Array<User> = response && response.data;
            if(userId){
                const user = payload?.find((user: User) => user.id === userId)
                commit('GET_USER', user)
            }else{
                commit('GET_USERS', payload);
            }
        }, (error) => {
            commit('USER_INFO_ERROR');
        });
    },
    getCountriesRequest({ commit }, countryId): any {
        axios({
            method: 'get',
            url: 'countries.json'
        }).then((response) => {
            const payload: Array<Country> = response && response.data;
            if(countryId){
                const country = payload?.find((country: Country) => country.id === countryId)
                commit('GET_COUNTRY', country)
            }else{
                commit('GET_COUNTRIES', payload);
            }
        }, (error) => {
            commit('USER_INFO_ERROR');
        });
    },
    getCountryGeojsonRequest({ commit }, country): any {
        axios({
            method: 'get',
            url: 'countriesGeo.json'
        }).then((response) => {
            const payload: CountriesGeojson = response && response.data;
          
                const countryGeojson = payload?.features.find((item: Country) => item.id === country.id)
                const countrySelected = {...country, geojson: {type:"FeatureCollection",features:[countryGeojson]}}
                commit('GET_COUNTRY', countrySelected)
     
        }, (error) => {
            commit('USER_INFO_ERROR');
        });
    },
};