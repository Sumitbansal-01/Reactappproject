import React from 'react';
import PerRow from './PerRow'

export default function Row(props) {
    
    return (

        <div className='container'>
            
            {props.fetchfn()}
            {props.data.length===0?<center>Nothing to display</center>:props.data.map(n => <PerRow row={n} key={n.sno}/>)}


        </div>
    );
}
