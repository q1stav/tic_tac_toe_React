import React from "react";
import PropTypes from 'prop-types'
import InformationLayout from "./InformationLayout";

export function calculateWinner(field){
    const winLines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0; i<winLines.length; i++){
        const [a,b,c]=winLines[i]
        if(field[a] && field[a]===field[b] && field[a]===field[c]){
            return field[a]
        }
    }
    return null
}

export function calculateDraw(field){
    return field.includes(null);
}

let message='';
function checkIsGameEnded(turn, winner, draw){
       if(winner) message=`Победил игрок: ${winner}`;
       else if(!draw) message=`Ничья`;
       else 
            if(turn)message=`Ход: X`;
            else message=`Ход: O`;
                return message;
}

const InformationContainer=({turn,winner,draw})=>{
    return  <InformationLayout check={checkIsGameEnded} turn={turn} winner={winner} draw={draw}/>
}

calculateWinner.PropTypes={
    turn : PropTypes.bool,
    winner : PropTypes.string,
    draw : PropTypes.bool
}

export default InformationContainer;