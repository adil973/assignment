import React from 'react'
import {ReactComponent as O} from "../img/o.svg"
import {ReactComponent as X} from '../img/x.svg'
function Selection(props) {

    var playerType = props.playerType;
    const [click, setClick] = props.click;

    const SelectPlayer = props => {
        if (props.playerSelect === -1) {
            return <X fill={'black'} width="100%" height="100%"/>
        } else if (props.playerSelect === -2) {
            return <O fill={'black'} width="100%" height="100%"/>
        }
    }

      return(
        <div className='block' onClick = {
            () => {
                if (playerType === -1 && click === 0) {
                    setClick(1);
                } else if (playerType === -2 && click === 0) {
                    setClick(2);
                }
            }
        }>
          <SelectPlayer playerSelect = {playerType}/>
       </div>
      );
  }

  
export default Selection