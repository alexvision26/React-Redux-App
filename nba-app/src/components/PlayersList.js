import React, { useState } from 'react';
import { connect } from 'react-redux';
import {getPlayer} from '../actions/index';

const PlayerList = props => {

    const [newFirst, setNewFirst] = useState('')
    const [newLast, setNewLast] = useState('')
    const [searchF, setSearchF] = useState('')
    const [searchL, setSearchL] = useState('')

    // const handleGetPlayer = e => {
    //     e.preventDefault();
    //     props.getPlayer();
    // }

    const handleChangeF = e => {
        e.preventDefault();
        setSearchF(e.target.value)
        // console.log(searchF)
    }

    const handleChangeL = e => {
        e.preventDefault();
        setSearchL(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setNewFirst(searchF)
        setNewLast(searchL)
        console.log(newFirst, newLast)
        props.getPlayer(newFirst, newLast)
    }

    return (
        <div>
            <h2>NBA Players</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fName'>Search by name: <input onChange={handleChangeF} id='fName' name='fName'></input></label>
            <br/>
                <label htmlFor='lName'>Search by name: <input onChange={handleChangeL} id='lName' name='lName'></input></label><button>Search</button>
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