
import { createSelector } from 'reselect';
import { LOGIN_ACTION } from '../actions'
import axios from 'axios';
import { prop } from 'ramda'
import loginApi from '../../api/loginRequest';
import {useNavigate } from 'react-router-dom';
// import { emailrgx } from '../../constant';


const initialState = {
    emailId: '',
    password: '',
    error: null,
    loading: false,
    userData: []
}

export const getSlice = prop('login')
export const getEmailId = createSelector(getSlice, prop('emailId'))
export const getPassword = createSelector(getSlice, prop('password'))
export const getError = createSelector(getSlice, prop ('error'))
export const getIsLoading = createSelector(getSlice, prop('loading'))
export const getUserData = createSelector(getSlice, prop('userData'))

export const loginAction = (emailId, password) => async (dispatch) => {
    dispatch({
        type: LOGIN_ACTION.LOGIN_REQUEST
    })
    try { 
        const userData = await loginApi(); 
        if (userData.times === 2) {                                                                                                                                                                                                                                                                                                                                                         
        dispatch({      
            type: LOGIN_ACTION.LOGIN_SUCCESS,
            data: userData,
        });
        navigate("/app/main/dashboard");
    }
    }
      catch (e) {
        dispatch({
            type: LOGIN_ACTION.LOGIN_FAILURE,
            error: e
        })
        return navigate("/login");
    }
};

export default function  (state = initialState,  {type, ...action})  {
    switch (type) {
        case LOGIN_ACTION.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_ACTION.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.data
            }
        case LOGIN_ACTION.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
            default : 
            return state;
    }

}