import React, { useState } from 'react';
import { connect } from 'react-redux';
import {getPlayer} from '../actions/index';

const PlayerList = props => {

    const [newFirst, setNewFirst] = useState('')
    const [newLast, setNewLast] = useState('')
    const [searchF, setSearchF] = useState('')
    const [searchL, setSearchL] = useState('')

    const handleChangeF = e => {
        e.preventDefault();
        setSearchF(e.target.value)
    }

    const handleChangeL = e => {
        e.preventDefault();
        setSearchL(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.getPlayer(searchF, searchL)
    }

    return (
        <div>
            <h1>NBA Players</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fName'>First Name:<br/> <input onChange={handleChangeF} id='fName' name='fName'></input></label>
            <br/>
                <label htmlFor='lName'>Last Name:<br/> <input onChange={handleChangeL} id='lName' name='lName'></input></label>
                <br/><button>Search</button>
                </form>
            <br/>
            {/* <h3>{newFirst} {newLast}</h3> */}
            {/* {props.isFetchingData ? (<div>...Fetching data...</div>) : <button onClick={handleGetPlayer}>Lebron James</button>} */}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getPlayer })(PlayerList);