import {FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAIL} from '../actions'

const initialState = {
    teamInfo: {},
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_BEGIN):
        return({
            ...state, isFetching: true
        })
        case(FETCH_SUCCESS):
        return({
            ...state, teamInfo: action.payload, isFetching: false
        })
        case(FETCH_FAIL):
        return({
            ...state, isFetching: false, error: action.payload
        })
        default:
            return state;
    }
}