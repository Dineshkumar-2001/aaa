import React, { useState } from 'react'
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';
import Main from './Main';
import Android from './Android';
import Valor_crm from './Valor_crm';
import Important from './Important';
import Android_store_1 from './Android_store_1';
// import Input from 'muicss/lib/react/input';
import './Android.css'
import New_list_page from './New_list_page';


const drawerWidth = 240;

function Store_code(props) {

  // const { window } = props;
  // const [mobileOpen, setMobileOpen] =useState(false);
  const[android,setandroid]=useState(false)
  const[valor_crm,setvalor_crm]=useState(false)
  const[important,setImportant]=useState(false)
  const[Newlist_page,setNewlist_page]=useState(false)
  const[Addlist,setAddlist]=useState(false)
  const[Left_input,setLeft_input]=useState('')
  const [A_list,setA_list]=useState('')
  const [New_impo,setNew_impo]=useState(false)

  

  const list = () =>{
    setAddlist(true)
  }

  const toggle = () =>{
    setandroid(true)
    setvalor_crm(false)
    setImportant(false)
    setNewlist_page(false)
    setNew_impo(false)
}

const toggle_crm = () =>{
  setvalor_crm(true)
  setandroid(false)
  setImportant(false)
  setNewlist_page(false)
  setNew_impo(false)
}

const important_click = () =>{
  setImportant(false)
  setvalor_crm(false)
  setandroid(false)
  setNewlist_page(false)
  setNew_impo(true)
}




const New_list = (x) =>{

  let Input_val_push = []
  Input_val_push.push({Left_input_list:x})
    let Set_input_val_list = localStorage.setItem('Left_input_list',JSON.stringify(Input_val_push))
    console.log('Set_input_val',Set_input_val_list)
    setA_list(x)


  setNewlist_page(true)
  setImportant(false)
  setvalor_crm(false)
  setandroid(false)
  setNew_impo(false)
}

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

 const  Left_input_1 = () =>{
    let Input_val = JSON.parse(localStorage.getItem("Left_input")) || []
    Input_val.push({Left_input:Left_input})
    let Set_input_val = localStorage.setItem('Left_input',JSON.stringify(Input_val))
    console.log('Set_input_val',Set_input_val)
}

let get_left_input = JSON.parse(localStorage.getItem("Left_input")) || []


  const drawer = (
    <div className='List_background'>
      {/* <Divider /> */}
      <List>
      {/* <ListItemButton onClick={toggle}>
      
        <ListItem>  <MenuIcon/>Android</ListItem>
        </ListItemButton>
        
        <ListItemButton  onClick={toggle_crm}>
        <ListItem><MenuIcon/>Valor CRM</ListItem>
        </ListItemButton> */}

        <ListItemButton onClick={important_click}>
        <ListItem><MenuIcon/>Important</ListItem>
        </ListItemButton> 

           

        {/* <ListItemButton >
        <ListItem>{Addlist ? 'Add New' : ''}</ListItem>
        </ListItemButton> */}
       
      </List>

      {get_left_input.map((x)=>{
        return(
          <div >
          <ListItemButton key={x} onClick={()=>New_list(x.Left_input)}>
        <ListItem>
            <MenuIcon/>{x.Left_input}
            </ListItem>
        </ListItemButton>
          </div>
        )
})}

<form onSubmit={Left_input_1}>    
      <input onChange={(e)=>setLeft_input(e.target.value)}   className='Left_input' placeholder='Add New List' type='text'></input>
       {/* <button onClick={Left_input_1}>+</button> */}
      </form>  
    </div>
     
  );



  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>

       
      </Box>
      {/* {android ?  <Android_store_1/> : ''} */}
      {/* <Android/> */}
     
     {/* {valor_crm ? <Valor_crm/> : ''} */}

     {/* {important ? <Important/> : ''} */}

     {/* {Newlist_page ? <Android_store_1 Prop={A_list}/> : ''} */}

     {/* {(get_left_input!="") ? <Android_store_1 Prop={A_list}/> :''} */}

     {New_impo ? (get_left_input!="") ? <Important Prop={A_list}/>  : ''  : <Android_store_1 Prop={A_list}/> }
     

      
    </Box>
   
    
  );
}

Store_code.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Store_code;
