import React from 'react';
import { connect } from 'react-redux';

const Player = props => {
    // console.log(props, props.player.length)

    const positionDisplay = p => {
            if (p == 'C') {
                return 'Center'
            } else if (p == 'F') {
                return 'Forward'
            } else if (p == 'G') {
                return 'Guard';
            } else if (p == 'F-C'){
                return 'Forward & Center'
            } 
            else {
                return p;
            }
        }

    return (
        <div>
            {props.player.id ? (

                <div className='player-card'>
                <h4>{`${props.player.first_name} ${props.player.last_name}`}</h4>
                <p>Height: {`${props.player.height_feet}ft. ${props.player.height_inches}in.`}</p>
                <p>Position: {positionDisplay(props.player.position)}</p></div> ) : (

                <div></div>

            )}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        player: state.player,
        stats: state.stats,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(Player)