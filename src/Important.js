import React, { Component } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Android.css'
import ToDoList from './ToDoList'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default class important extends Component {
  constructor(props){
    super(props);
    this.state={
      Input:''
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





// Re_Important_1 = (x) =>{
//   let a1 = []
//   a1.push({Input:x.Input})
//   localStorage.setItem("One_Re_impo_1",JSON.stringify(a1))

//   let b1 = []
//   b1.push({Input:x.Input})
//   localStorage.setItem("Second_Re_impo_1",JSON.stringify(b1))

//   let c1 = JSON.parse(localStorage.getItem("Important_1"))

//   let compare = c1.findIndex((x)=>{
//      return b1.some((y)=>{

//          return x.Input==y.Input

//      })
//   })

//   c1.splice(compare,1)

// localStorage.setItem("Important_1",JSON.stringify(c1))
// let d1= JSON.parse(localStorage.getItem("Input_val_1"))||[]
// let e1= JSON.parse(localStorage.getItem("One_Re_impo_1"))
// let spread = [...d1,...e1]
// localStorage.setItem("Input_val_1",JSON.stringify(spread))
// this.setState({Referesh:true})

// if(this.state.Referesh == true){
// this.componentDidUpdate()
// }
// }


  render() {
    let Jean_1 = JSON.parse(localStorage.getItem("Important"));
    let Important_val = JSON.parse(localStorage.getItem("Important"))||[]

    let Props_map = JSON.parse(localStorage.getItem("Left_input_list")) || []
    let aa =Props_map.map((s)=>{
      return s.Left_input_list
  })
  let importent = Important_val.filter((x)=>{
    return x.This_page==aa

})

    return (
      
        <div style={{marginLeft:'90px'}}>
         
        {/* {importent.map((x)=>{
          return(
            <div  className='Important'>
              
              <h2 > {x.Input}</h2>
              <StarRateIcon onClick={()=>this.Re_Important(x)} style={{color:'blue'}}></StarRateIcon>
            </div>
          )
        })} */}



<div>

<TableContainer component={Paper} style={{backgroundColor:"#FFE4E1",}}>
<Table sx={{ minWidth: 1000 }} aria-label="simple table">
<TableHead>

{
    importent.map((y)=>{
        return(
            <TableRow  key={y.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>  
              <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',border:'1px solid black'}}>
              <TableCell align="right"> <span>{y.Input}</span></TableCell>
              <TableCell align="right"> <StarOutlineIcon  style={{color:'blue'}} onClick={()=>this.Re_Important(y)}></StarOutlineIcon></TableCell>
              {/* <TableCell align="right"> <StarOutlineIcon ></StarOutlineIcon></TableCell> */}
              </div>
              </TableRow>
         
        )
    })
}

</TableHead>
</Table>
</TableContainer>
</div>
        </div>
       
     

      
    )
  }
}
