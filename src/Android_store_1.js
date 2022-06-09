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
    constructor(props){
        super(props);
        this.state={
            Input:'',
            Referesh:false,
            keyGen:""
            
        }
    }

    

        Get_input_val_1 = async (para) =>{
            para.preventDefault();
            let Input_val = JSON.parse(localStorage.getItem("Input_val")) || []
            Input_val.push({Input:this.state.Input, This_page:this.props.Prop
            })
            let Set_input_val = localStorage.setItem('Input_val',JSON.stringify(Input_val))




            await this.setState({Referesh:true,Input:'',keyGen:new Date()} )
            console.log('Set_input_val',this.state.Referesh,this.state.Input)

            if(this.state.Referesh == true){
               this.componentDidUpdate()
            }
     

        }

        complete = (x) =>{
                
               

         let a=JSON.parse(localStorage.getItem("completed"))||[]

        a.push({Input:x.Input,This_page:this.props.Prop})

        localStorage.setItem("completed",JSON.stringify(a))

        let b=[];

        b.push({Input:x.Input,This_page:this.props.Prop})

        localStorage.setItem("remove",JSON.stringify(b))

        let c = JSON.parse(localStorage.getItem("Input_val"))

        let compare = c.findIndex((x)=>{

            return b.some((y)=>{

                return x.Input==y.Input

            })

        })

c.splice(compare,1)


localStorage.setItem("Input_val",JSON.stringify(c))

this.setState({Referesh:true})

if(this.state.Referesh == true){
   this.componentDidUpdate()
}

        }

        Important =  (x) =>{
             let a1 = []
             a1.push({Input:x.Input,This_page:this.props.Prop})
             localStorage.setItem("One_impo",JSON.stringify(a1))

             let b1 = []
             b1.push({Input:x.Input,This_page:this.props.Prop})
             localStorage.setItem("Second_impo",JSON.stringify(b1))

             let c1 = JSON.parse(localStorage.getItem("Input_val"))

             let compare = c1.findIndex((x)=>{
                return b1.some((y)=>{

                    return x.Input==y.Input
    
                })
             })

             c1.splice(compare,1)

localStorage.setItem("Input_val",JSON.stringify(c1))
let d1= JSON.parse(localStorage.getItem("Important"))||[]
let e1= JSON.parse(localStorage.getItem("One_impo"))
let spread = [...d1,...e1]
localStorage.setItem("Important",JSON.stringify(spread))
this.setState({Referesh:true})

if(this.state.Referesh == true){
   this.componentDidUpdate()
}
        }

        Re_complete = (x) =>{
            let a1 = []
            a1.push({Input:x.Input,This_page:this.props.Prop})
            localStorage.setItem("One_Re_impo",JSON.stringify(a1))

            let b1 = []
            b1.push({Input:x.Input,This_page:this.props.Prop})
            localStorage.setItem("Second_Re_impo",JSON.stringify(b1))

            let c1 = JSON.parse(localStorage.getItem("completed"))

            let compare = c1.findIndex((x)=>{
               return b1.some((y)=>{

                   return x.Input==y.Input
   
               })
            })

            c1.splice(compare,1)

localStorage.setItem("completed",JSON.stringify(c1))
let d1= JSON.parse(localStorage.getItem("Input_val"))||[]
let e1= JSON.parse(localStorage.getItem("One_Re_impo"))
let spread = [...d1,...e1]
localStorage.setItem("Input_val",JSON.stringify(spread))
this.setState({Referesh:true})

if(this.state.Referesh == true){
   this.componentDidUpdate()
}
        }


        Re_Important = (x) =>{
            let a1 = []
            a1.push({Input:x.Input,This_page:this.props.Prop})
            localStorage.setItem("One_Re_impo",JSON.stringify(a1))

            let b1 = []
            b1.push({Input:x.Input,This_page:this.props.Prop})
            localStorage.setItem("Second_Re_impo",JSON.stringify(b1))

            let c1 = JSON.parse(localStorage.getItem("Important"))

            let compare = c1.findIndex((x)=>{
               return b1.some((y)=>{

                   return x.Input==y.Input
   
               })
            })

            c1.splice(compare,1)

localStorage.setItem("Important",JSON.stringify(c1))
let d1= JSON.parse(localStorage.getItem("Input_val"))||[]
let e1= JSON.parse(localStorage.getItem("One_Re_impo"))
let spread = [...d1,...e1]
localStorage.setItem("Input_val",JSON.stringify(spread))
this.setState({Referesh:true})

if(this.state.Referesh == true){
   this.componentDidUpdate()
}
        }
   
  render() {
      let Input_val = JSON.parse(localStorage.getItem("Input_val"))||[]
      let Complete_value = JSON.parse(localStorage.getItem("completed"))||[]
      let Important_val = JSON.parse(localStorage.getItem("Important"))||[]

     let Props_map = JSON.parse(localStorage.getItem("Left_input_list")) || []
      
let aa =Props_map.map((s)=>{
    return s.Left_input_list
})
console.log("aa",aa)
      let list_map = Input_val.filter((x)=>{
        return Props_map.some((y)=>{

            return x.This_page==y.Left_input_list

        })
      })

      let importent = Important_val.filter((x)=>{
        return x.This_page==aa
    
    })

    let completed = Complete_value.filter((x)=>{
        return x.This_page==aa
    
    })


    console.log("impo",importent)
console.log("in render",this.state.Input)
    return (
        <>
        
        {/* {
        list_map.map((x)=>{
            return(
             
               <div>
                 <h2>{x.Input}</h2> 
               </div>
             
            )
        })
        } */}
       

        <div>



       {/* <div style={{}}>
        <TableContainer component={Paper}  sx={{ '&:last-child td, &:last-child th': { border: 0} }} style={{backgroundColor:"#FFE4E1"}}>
      <Table sx={{ minWidth: 510 }} aria-label="simple table">
      <TableHead>

        {
                importent.map((x)=>{
                    return(
                      
                        <TableRow  key={x.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0, } }}>         
                         
                          <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',border:'1px solid black'}}>
                          <TableCell align="right"  > <span>{x.Input}</span></TableCell>
                          <TableCell align="right"  > <CheckCircleIcon onClick={()=>this.complete(x)}></CheckCircleIcon></TableCell>
                          <TableCell align="right"  > <StarRateIcon onClick={()=>this.Re_Important(x)} style={{color:'blue'}}></StarRateIcon></TableCell>
                          </div>
                      
                      </TableRow>
                    

                    )
                })
            }
</TableHead>
</Table>
    </TableContainer>
    </div> */}

       {/* <h2 className='Android_head'>Important</h2> */}
       <p className='Android_head'>Page Name : {aa}</p>

     
       <div>

            <TableContainer component={Paper} style={{backgroundColor:"#F0FFF0"}}   sx={{ '&:last-child td, &:last-child th': { border: 0} }}>
      <Table sx={{ minWidth: 1125 }} aria-label="simple table">
      <TableHead>

            {
                list_map.map((x)=>{
                   
                    return(
                        <TableRow  key={x.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0,} }}>  
                      
                          <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',border:'1px solid black'}}>
                          <TableCell align="center"> <CheckCircleIcon onClick={()=>this.complete(x)}></CheckCircleIcon></TableCell>
                          <TableCell align="center">  <span>{x.Input}</span></TableCell>
                          
                          <TableCell align="center"><StarOutlineIcon onClick={()=>this.Important(x)}></StarOutlineIcon></TableCell>
                          </div>
                      
                      </TableRow>
                    )
                })
            }

</TableHead>
</Table>
    </TableContainer>
    </div>

    
            <h2  className='Android_head'>Completed</h2>

            <div>

            <TableContainer component={Paper} style={{backgroundColor:"#FFE4E1"}}>
      <Table sx={{ minWidth: 1100 }} aria-label="simple table">
      <TableHead>

{
                completed.map((y)=>{
                    return(
                        <TableRow  key={y.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>  
                          <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',border:'1px solid black'}}>
                          <TableCell align="right"> <span>{y.Input}</span></TableCell>
                          <TableCell align="right"> <CheckCircleIcon  style={{color:'blue'}} onClick={()=>this.Re_complete(y)}></CheckCircleIcon></TableCell>
                          <TableCell align="right"> <StarOutlineIcon ></StarOutlineIcon></TableCell>
                          </div>
                          </TableRow>
                     
                    )
                })
            }

</TableHead>
</Table>
    </TableContainer>
    </div>
  

<div style={{marginLeft:'40px'}}> 

    
   </div>
             <form onSubmit={this.Get_input_val_1} className="Input_box">
             
             <input key={this.state.keyGen} className='Right_input' type='text' placeholder='Add a Task' onChange={e=>this.setState({Input:e.target.value})}/>
            


             </form>
           
           
        </div>
        
       
        </>
    )
  }
}
