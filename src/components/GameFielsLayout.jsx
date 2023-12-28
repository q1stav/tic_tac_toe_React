import PropTypes from 'prop-types'
import {ButtonsContainer} from './ButtonsContainer';
import styles from '../styles/GameField.module.css';


const GameFieldLayout=({field,click})=>{

    return(
        <div className={styles.gameContainer}>
            {field.map((button,index)=>
            <ButtonsContainer
                key={index} 
                value={button} 
                onClick={()=>click(index)}
                /> 
            )}
        </div> 
    )
}

GameFieldLayout.propTypes={
    field : PropTypes.array,
    click : PropTypes.func
}

export default GameFieldLayout