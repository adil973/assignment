import {ReactComponent as O} from "../img/o.svg"
import {ReactComponent as X} from '../img/x.svg'
import React from 'react'

function Block(props) {
    const number = props.number;
    const [table, setTable] = props.table;
    const winner = props.winner;
    const playerSelected = props.playerSelected

    // fills 'X' or 'O' in the block depending on the repective players move
    const Image = props => {
        if (props.tableN === 5) {
            return <X fill={winner.indexOf(number) !== -1? 'green':""} width="100%" height="100%"/>
        } else if ( props.tableN === 3 ){
            return <O fill={winner.indexOf(number) !== -1? 'green':""} width="100%" height="100%"/>
        } else {
         return <img alt=""/>
        }
    }
    
    return (
        < div className = "block"
        //on block click: function updates the block status 
        //and calls the api to fetch computer moves which is updated
        //at the end using setTable hook
        //following steps repeats until either of the player wins
        //or the game draws
        onClick = {
            async () => {
                if (table[number] === 0 && winner.length === 0) {
                    let newTable = [...table]
                    newTable[number] = playerSelected === 1 ? 5 : 3

                    var request = require('request-promise');
                    var options = {
                        uri: 'https://koa-ttt.herokuapp.com',
                        method: 'POST',
                        headers: {
                            'User-Agent': 'Request-Promise',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(parseTable(newTable)),
                        plain: true
                    };

                    await request(options)
                        .then(move => newTable[move] = playerSelected === 1 ? 3 : 5)
                        .catch(function (err) {
                            console.log(err)
                        });

                    setTable(newTable)
                }
            }
        } >
            <Image tableN={table[number]}/> 
        </div>
    )
}

// parseTable function: traverse through the table array and creates a new temp array
// with 'X', 'O' and 'null' for 5, 3 and 0 respectively

function parseTable(table){
    var temp = []
    for(var i = 0; i < 9; i++){
        if(table[i] === 5)
            temp[i] = 'X'
        else if(table[i] === 3)
            temp[i] = 'O'
        else
            temp[i] = null
    }
    return temp;
}

export default Block
