import React, { Component } from 'react'

export default class New_list_page extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let get_left_input = JSON.parse(localStorage.getItem("Left_input")) || []
    return (
      <div>
          
         {
             get_left_input.map((x)=>{
                 return(
                     <div>
                         <h2>{x.Left_input}</h2>
                     </div>
                 )
             })
         }


</div>



    )
  }
}
