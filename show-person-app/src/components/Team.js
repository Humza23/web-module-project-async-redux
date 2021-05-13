import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchTeam} from '../actions/index'

const Team = (props) => {
    const {dispatch} = props
    useEffect(() => {
        dispatch(fetchTeam());
      }, []);

    const handleClick = () => {
        dispatch(fetchTeam())
    }

    return (
        <div>
            <h1 style={{fontSize: '3rem'}}>
                I am from: {props.teamInfo.city}
                <br></br>
                My favorite team is the: {props.teamInfo.name}
            </h1>
            <div>
                <img style={{width: "25%", borderRadius: '35%'}} src='https://eyofbaku2019.com/images/sport%20pages/basketball.jpg' alt='basketball'/>
            </div>
            <button style={{backgroundColor: 'red', fontSize: '24px', padding: '10px', marginTop: '20px', color: 'indigo'}} onClick={handleClick}> Click to get a new team! </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        teamInfo: state.teamInfo,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps)(Team)
