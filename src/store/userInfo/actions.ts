import { ActionTree } from 'vuex';
import axios from 'axios';
import { UserState, Building, User } from './types';
import { RootState } from '../types';

export const actions: ActionTree<UserState, RootState> = {
    getUsersRequest({ commit }, userId): any {
        // console.log('11111')
        axios({
            method: 'get',
            url: 'users.json'
        }).then((response) => {
// console.log('action response', response)
            const payload: Array<User> = response && response.data;
            if(userId){
                const user = payload?.find((user: User) => user.id === userId)
                commit('GET_USER', user)
            }else{
                // console.log('22222222')
                commit('GET_USERS', payload);
            }
        }, (error) => {
            console.log(error);
            commit('USER_INFO_ERROR');
        });
    },
    // getUserRequest({ commit }): any {
    //     axios({
    //         method: 'get',
    //         url: 'users.json'
    //     })
    // }


    // async function login(reqBody) {
    //     try {
    //       let res = await Axios({
    //         method: 'post',
    //         url: 'https://myApi.com/path/to/endpoint',
    //         data: reqBody
    //       });
      
    //       let data = res.data;
    //       return data;
    //     } catch (error) {
    //       console.log(error.response); // this is the main part. Use the response property from the error object
      
    //       return error.response;
    //     }
      
    //   }
};