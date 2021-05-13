import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchTeam} from '../actions/index'

const Team = (props) => {

    useEffect(() => {
        props.dispatch(fetchTeam());
      }, []);

    const handleClick = () => {
        props.dispatch(fetchTeam())
    }

    return (
        <div>
            <h1>
                I am from: {props.teamInfo.city}
                <br></br>
                My favorite team is the: {props.teamInfo.name}
            </h1>
            <div>
                <img style={{width: "25%"}} src='https://eyofbaku2019.com/images/sport%20pages/basketball.jpg' />
            </div>
            <button style={{backgroundColor: 'red', fontSize: '24px', borderRadius: '35%', padding: '15px', marginTop: '20px'}} onClick={handleClick}> Click to get a new team! </button>
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
