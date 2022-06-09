import React, { useState } from 'react'
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';

const Valor_list = (props) =>{

    
   
    return (
        <>
        <div className='todo_style'>
            <AutoDeleteIcon className='fa fa-times' aria-hidden='true' onClick={()=>{
                props.onSelect(props.id);
            }}/>
        <li >{props.text }</li> 
        </div>
        </>)
}

export default Valor_list