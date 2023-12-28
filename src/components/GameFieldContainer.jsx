import React from 'react';
import PropTypes from 'prop-types'
import GameFieldLayout from './GameFielsLayout'; 


const GameFieldContainer=({field,click})=>{    

    return(
        <GameFieldLayout field={field} click={click}/>
    )
}

GameFieldContainer.propTypes={
    field : PropTypes.array,
    click : PropTypes.func
}

export default GameFieldContainer;