import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StarRateIcon from '@mui/icons-material/StarRate';

import './Android.css'
import ToDoList from './ToDoList'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { style } from '@mui/system';

export default class Android_store_1 extends Component {
    constructor(){
        super();
        this.state={
            Input:'',
            Referesh:false
        }
    }

        Get_input_val = (para) =>{
            para.preventDefault();
            let Input_val = JSON.parse(localStorage.getItem("Input_val_1")) || []
            Input_val.push({Input:this.state.Input})
            let Set_input_val = localStorage.setItem('Input_val_1',JSON.stringify(Input_val))
            console.log('Set_input_val_1',Set_input_val)
            this.setState({Referesh:true})

if(this.state.Referesh == true){
   this.componentDidUpdate()
}
        }

        complete = (x) =>{
                
                let a=JSON.parse(localStorage.getItem("completed_1"))||[]

        a.push({Input:x.Input})

        localStorage.setItem("completed_1",JSON.stringify(a))

        let b=[];

        b.push({Input:x.Input})

        localStorage.setItem("remove_1",JSON.stringify(b))

        let c = JSON.parse(localStorage.getItem("Input_val_1"))

        let compare = c.findIndex((x)=>{

            return b.some((y)=>{

                return x.Input==y.Input

            })

        })

c.splice(compare,1)

localStorage.setItem("Input_val_1",JSON.stringify(c))

this.setState({Referesh:true})

if(this.state.Referesh == true){
   this.componentDidUpdate()
}

        }

        Important =  (x) =>{
             let a1 = []
             a1.push({Input:x.Input})
             localStorage.setItem("One_impo_1",JSON.stringify(a1))

             let b1 = []
             b1.push({Input:x.Input})
             localStorage.setItem("Second_impo",JSON.stringify(b1))

             let c1 = JSON.parse(localStorage.getItem("Input_val_1"))

             let compare = c1.findIndex((x)=>{
                return b1.some((y)=>{

                    return x.Input==y.Input
    
                })
             })

             c1.splice(compare,1)

localStorage.setItem("Input_val_1",JSON.stringify(c1))
let d1= JSON.parse(localStorage.getItem("Important_1"))||[]
let e1= JSON.parse(localStorage.getItem("One_impo_1"))
let spread = [...d1,...e1]
localStorage.setItem("Important_1",JSON.stringify(spread))
this.setState({Referesh:true})

if(this.state.Referesh == true){
   this.componentDidUpdate()
}
        }

        Re_complete = (x) =>{
            let a1 = []
            a1.push({Input:x.Input})
            localStorage.setItem("One_Re_impo_1",JSON.stringify(a1))

            let b1 = []
            b1.push({Input:x.Input})
            localStorage.setItem("Second_Re_impo_1",JSON.stringify(b1))

            let c1 = JSON.parse(localStorage.getItem("completed_1"))

            let compare = c1.findIndex((x)=>{
               return b1.some((y)=>{

                   return x.Input==y.Input
   
               })
            })

            c1.splice(compare,1)

localStorage.setItem("completed_1",JSON.stringify(c1))
let d1= JSON.parse(localStorage.getItem("Input_val_1"))||[]
let e1= JSON.parse(localStorage.getItem("One_Re_impo_1"))
let spread = [...d1,...e1]
localStorage.setItem("Input_val_1",JSON.stringify(spread))
this.setState({Referesh:true})

if(this.state.Referesh == true){
   this.componentDidUpdate()
}
        }


        Re_Important = (x) =>{
            let a1 = []
            a1.push({Input:x.Input})
            localStorage.setItem("One_Re_impo_1",JSON.stringify(a1))

            let b1 = []
            b1.push({Input:x.Input})
            localStorage.setItem("Second_Re_impo_1",JSON.stringify(b1))

            let c1 = JSON.parse(localStorage.getItem("Important_1"))

            let compare = c1.findIndex((x)=>{
               return b1.some((y)=>{

                   return x.Input==y.Input
   
               })
            })

            c1.splice(compare,1)

localStorage.setItem("Important_1",JSON.stringify(c1))
let d1= JSON.parse(localStorage.getItem("Input_val_1"))||[]
let e1= JSON.parse(localStorage.getItem("One_Re_impo_1"))
let spread = [...d1,...e1]
localStorage.setItem("Input_val_1",JSON.stringify(spread))
this.setState({Referesh:true})

if(this.state.Referesh == true){
   this.componentDidUpdate()
}
        }
      
   
  render() {
      let Input_val = JSON.parse(localStorage.getItem("Input_val_1"))||[]
      let Complete_value = JSON.parse(localStorage.getItem("completed_1"))||[]
      let Important_val = JSON.parse(localStorage.getItem("Important_1"))||[]
    return (
        <>
        

        <div>
        <h2 className='Android_head'>Welcome To Valor CRM Page</h2>

            

            <TableContainer component={Paper} style={{backgroundColor:"#FFE4E1"}}>
      <Table sx={{ minWidth: 900 }} aria-label="simple table">
      <TableHead>

            {
                Input_val.map((x)=>{
                   
                    return(
                        <TableRow  key={x.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>  
                      
                          <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                          <TableCell align="center">  <h3>{x.Input}</h3></TableCell>
                          <TableCell align="center"> <CheckCircleIcon onClick={()=>this.complete(x)}></CheckCircleIcon></TableCell>
                          <TableCell align="center"><StarOutlineIcon onClick={()=>this.Important(x)}></StarOutlineIcon></TableCell>
                          </div>
                      
                      </TableRow>
                    )
                })
            }

</TableHead>
</Table>
    </TableContainer>
    <div style={{display:'flex',justifyContent:'space-between'}}>

        <div style={{marginLeft:'40px'}}>

            <h2 style={{marginLeft:'210px'}}>Completed</h2>

            <TableContainer component={Paper} style={{backgroundColor:"#F0FFF0"}}>
      <Table sx={{ minWidth: 510, }} aria-label="simple table">
      <TableHead>

{
                Complete_value.map((y)=>{
                    return(
                      <div>
                          <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                          <TableCell align="right"> <h3>{y.Input}</h3></TableCell>
                          <TableCell align="right"> <CheckCircleIcon  style={{color:'blue'}} onClick={()=>this.Re_complete(y)}></CheckCircleIcon></TableCell>
                          {/* <TableCell align="right"> <StarOutlineIcon ></StarOutlineIcon></TableCell> */}
                          </div>
                      </div>
                    )
                })
            }

</TableHead>
</Table>
    </TableContainer>
    </div>

<div style={{marginLeft:'40px'}}> 
<h2  style={{marginLeft:'210px'}}>Important</h2>
    
    <TableContainer component={Paper} style={{backgroundColor:"#F0FFF0"}}>
      <Table sx={{ minWidth: 510 }} aria-label="simple table">
      <TableHead>

        {
                Important_val.map((x)=>{
                    return(
                        <TableRow  key={x.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0} }}>         
                         
                          <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                          <TableCell align="right"  > <h3>{x.Input}</h3></TableCell>
                          {/* <TableCell align="right"  > <CheckCircleIcon onClick={()=>this.complete(x)}></CheckCircleIcon></TableCell> */}
                          <TableCell align="right"  > <StarRateIcon onClick={()=>this.Re_Important(x)} style={{color:'blue'}}></StarRateIcon></TableCell>
                          </div>
                      
                      </TableRow>

                    )
                })
            }
</TableHead>
</Table>
    </TableContainer></div>


    </div>
             <form onSubmit={this.Get_input_val} className="Input_box_1">
             
             <input  type='text' placeholder='Add a Task' onChange={e=>this.setState({Input:e.target.value})}/>


             </form>
           
           
        </div>
        
       
        </>
    )
  }
}
