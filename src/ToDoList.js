import React, { useEffect,useState } from 'react'
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const ToDoList = (props) =>{
    const[Complete,setComplete]=useState(false)
    const [task,settask]= useState("")
    

  const  completed = () =>{
        setComplete(!Complete)
        
    }
    console.log('props',props)

    const star_important = (id) =>{
        alert('Added to Important')
        let Buy = JSON.parse(localStorage.getItem("Important")) || []
       
        Buy.push({name:props.text,id:props.id})
        // const new_val = props.text
        let star = localStorage.setItem("Important",JSON.stringify(Buy));
        // console.log('aaa',id)
        console.log('star',star)
        console.log('bbb',props.text,id)

    }

    // const delete_important = (id) =>{
        
    //         console.log('deleted')
    //         let arr = []
    //         let y1 = (oldItems)=>{
    //             arr.push(oldItems.filter((arrElement,index)=>{
    //                 return index !== id; 
    //            }))
    //         let set_local = localStorage.setItem("Important",JSON.stringify(oldItems.filter((arrElement,index)=>{
    //             return index !== id; 
    //        })));
    //             return oldItems.filter((arrElement,index)=>{
    //                  return index !== id; 
    //             })
    //         }
    //         setItems(y1)
    //         console.log(arr)
    //     }
        
        // useEffect(()=>{
        //     setItems(JSON.parse(localStorage.getItem("Important"))||[])
        // //  console.log('Deleted')
        // },[])


    



    // let Total_prize = localStorage.setItem("Android",JSON.stringify(Items));
    return (
        <div>
        <div className='list_main'>    
                <div className='todo_style'>
            <AutoDeleteIcon className='fa fa-times' aria-hidden='true' onClick={()=>{
                props.onSelect(props.id);
            }}/>
             
        <li className='Order_list'>{props.text }</li> 
        

        </div>
        <StarOutlineIcon onClick={()=>star_important(props.id)}></StarOutlineIcon>
        {/* <StarIcon onClick={delete_important(props.id)}></StarIcon> */}
        <CheckCircleIcon onClick={completed} style={{padding:'3px'}}></CheckCircleIcon>
       
        </div>
        <div> {Complete ? <h4 className='Complete'>{props.text} completed</h4> : ''}</div>
        </div>
        

        )
}

export default ToDoList