import React, { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
// import Android_store_1 from './Android_store_1'

const Android = () =>{

    const [inpuList,setInputList] = useState('')
    const [Items,setItems]= useState([])
   

    const itemEvent = (event) =>{
        
        
     setInputList(event.target.value)
    };
   
   const listOfItems =()=>{
     
  
    Items.push(inpuList)
        let set_local = localStorage.setItem("Android",JSON.stringify(Items));
        console.log(set_local)

  
    setInputList('');
   }


   const deleteItems = (id) =>{
    console.log('deleted')
    let arr = []
    let y1 = (oldItems)=>{
        arr.push(oldItems.filter((arrElement,index)=>{
            return index !== id; 
       }))
    let set_local = localStorage.setItem("Android",JSON.stringify(oldItems.filter((arrElement,index)=>{
        return index !== id; 
   })));
        return oldItems.filter((arrElement,index)=>{
             return index !== id; 
        })
    }
    setItems(y1)
    console.log(arr)
}

useEffect(()=>{
    setItems(JSON.parse(localStorage.getItem("Android"))||[])
//  console.log('Deleted')
},[])

console.log(Items)


    return<>
    <div className='main'>
        <div >
    <ol className='top_content'>
            
            {Items.map((itemval,index) =>{
                    return  <ToDoList key ={index} id={index}
                     text = {itemval} onSelect = {deleteItems}
                     
                     />
                 })} 
                 {/* {Input} */}
             </ol>
             </div>
  
    <div className='main_div'>
       
         <button onClick={listOfItems}> + </button>
         
         <input type='text' placeholder='Add a Task' onChange={itemEvent} value={inpuList}/>
            
    </div>
    </div>
    </>
}

export default  Android;