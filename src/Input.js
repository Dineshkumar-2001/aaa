import React, { Component } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';

export default class important extends Component {
  constructor(){
    super();
    this.state={
      Input:''
    }
  }

  Re_Important = (x) =>{
    let a1 = []
    a1.push({Input:x.Input})
    localStorage.setItem("One_Re_impo",JSON.stringify(a1))

    let b1 = []
    b1.push({Input:x.Input})
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





Re_Important_1 = (x) =>{
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
    let Jean_1 = JSON.parse(localStorage.getItem("Important"));
    let CRM = JSON.parse(localStorage.getItem("Important_1"));

    return (
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{marginLeft:'90px'}}>
          <h2 style={{marginLeft:'180px'}}>Android</h2>
        {Jean_1.map((x)=>{
          return(
            <div  className='Important'>
              <h2 > {x.Input}</h2>
              <StarRateIcon onClick={()=>this.Re_Important(x)} style={{color:'blue'}}></StarRateIcon>
            </div>
          )
        })}
        </div>
        <div >
        <h2  style={{marginLeft:'180px'}}>Valor CRM</h2>
        {CRM.map((x)=>{
          return(
            <div className='Important'>
              <h2  > {x.Input}</h2>
              <StarRateIcon onClick={()=>this.Re_Important_1(x)} style={{color:'blue'}}></StarRateIcon>
            </div>
          )
        })}
      </div>
      </div>

      
    )
  }
}
