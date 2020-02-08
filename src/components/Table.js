import React, {useState, useEffect} from 'react'
import Block from './Block.js'

const Table = (props) => {
        const [table, setTable] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        const [winner, setWinner] = useState([]);
        const playerSelect = props.playerSelect;
        const [p1score, setP1score] = useState(0);
        const [cmpscore, setCmpscore] = useState(0);
        useEffect(() => {
            // checking winner row and col
            for (let i = 0; i <= 2; i++) {
                const idx = (i % 3) * 3
                // row check
                if ((table[idx] + table[idx + 1] + table[idx + 2]) === 9 || (table[idx] + table[idx + 1] + table[idx + 2]) === 15) {
                    setWinner([idx, idx + 1, idx + 2]);
                    if((table[idx] + table[idx + 1] + table[idx + 2]) === 9){
                        playerSelect === 2 ? setP1score(p1score+1) : setCmpscore(cmpscore+1);
                    } else if ((table[idx] + table[idx + 1] + table[idx + 2]) === 15){
                        playerSelect === 1 ? setP1score(p1score+1) : setCmpscore(cmpscore+1);
                    }
                    gameOver();
                }
                // column check
                if ((table[i] + table[i + 3] + table[i + 6]) === 9 || (table[i] + table[i + 3] + table[i + 6]) === 15) {
                    setWinner([i, i + 3, i + 6]);
                    if((table[i] + table[i + 3] + table[i + 6]) === 9){
                        playerSelect === 2 ? setP1score(p1score+1) : setCmpscore(cmpscore+1);
                    } else if ((table[i] + table[i + 3] + table[i + 6]) === 15){
                        playerSelect === 1 ? setP1score(p1score+1) : setCmpscore(cmpscore+1);
                    }
                    gameOver();
                }
            }
            // diagonal check
            if ((table[0] + table[4] + table[8]) === 15 || (table[0] + table[4] + table[8]) === 9) {
                setWinner([0, 4, 8]);
                if((table[0] + table[4] + table[8]) === 9){
                    playerSelect === 2 ? setP1score(p1score+1) : setCmpscore(cmpscore+1);
                } else if ((table[0] + table[4] + table[8]) === 15){
                    playerSelect === 1 ? setP1score(p1score+1) : setCmpscore(cmpscore+1);
                }
                gameOver();
            }
            if ((table[2] + table[4] + table[6]) === 9 || (table[2] + table[4] + table[6]) === 15) {
                setWinner([2, 4, 6]);
                if((table[2] + table[4] + table[6]) === 9){
                    playerSelect === 2 ? setP1score(p1score+1) : setCmpscore(cmpscore+1);
                } else if ((table[2] + table[4] + table[6]) === 15){
                    playerSelect === 1 ? setP1score(p1score+1) : setCmpscore(cmpscore+1);
                }
                gameOver();
            }
            if (table.indexOf(0) === -1) {
                gameOver();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [table]);

        // checking if game over
        const gameOver = () => {
            setTimeout(() => {
                setTable([0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setWinner([]);
                console.log('game over');
            }, 2000);
        }

    return (
    <div className='main-table'>
        <h1> <code>Your score: {p1score} Computers score: {cmpscore}</code> </h1>
        <div className='row'>
            <Block number={0}  playerSelected = {playerSelect} table={[table,setTable]} winner={winner}/> 
            <Block number={1}  playerSelected = {playerSelect} table={[table,setTable]} winner={winner}/> 
            <Block number={2}  playerSelected = {playerSelect} table={[table,setTable]} winner={winner}/> 
        </div>
        <div className='row'>
            <Block number={3}  playerSelected = {playerSelect} table={[table,setTable]} winner={winner}/> 
            <Block number={4}  playerSelected = {playerSelect} table={[table,setTable]} winner={winner}/> 
            <Block number={5}  playerSelected = {playerSelect} table={[table,setTable]} winner={winner}/> 
        </div>
        <div className='row'>
            <Block number={6}  playerSelected = {playerSelect} table={[table,setTable]} winner={winner}/> 
            <Block number={7}  playerSelected = {playerSelect} table={[table,setTable]} winner={winner}/> 
            <Block number={8}  playerSelected = {playerSelect} table={[table,setTable]} winner={winner}/> 
        </div>
    </div>
    )
}

export default Table;