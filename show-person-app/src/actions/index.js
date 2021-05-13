import axios from 'axios'

export const FETCH_BEGIN = "FETCH_BEGIN"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL = "FETCH_FAIL"

export const fetchTeam = () => {
    return (dispatch => {
        dispatch(fetchBegin())

        axios.get('https://www.balldontlie.io/api/v1/teams/')
        .then(res => {
            dispatch(fetchSuccess(res.data.data[Math.floor(Math.random() * res.data.data.length)]))
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchFail(err))
        })
    }
    )
}

export const fetchBegin = () => {
    return ({type: FETCH_BEGIN})
}

export const fetchSuccess = (team) => {
    return ({type: FETCH_SUCCESS, payload: team})
}

export const fetchFail = (error) => {
    return ({type: FETCH_FAIL, payload: error})
}