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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';
import Main from './Main';
import Android from './Android';
import Valor_crm from './Valor_crm';

const drawerWidth = 240;

function Store_code(props) {

  // const { window } = props;
  // const [mobileOpen, setMobileOpen] =useState(false);
  const[android,setandroid]=useState(true)
  const[valor_crm,setvalor_crm]=useState(false)

  const toggle = () =>{
    setandroid(true)
    setvalor_crm(false)
}

const toggle_crm = () =>{
  setvalor_crm(true)
  setandroid(false)
}

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

 

  const drawer = (
    <div style={{backgroundColor:'gray',height:'100%'}}>
      {/* <Divider /> */}
      <List>
      <ListItemButton onClick={toggle}>
      
        <ListItem>  <MenuIcon/>Android</ListItem>
        </ListItemButton>
        
        <ListItemButton  onClick={toggle_crm}>
        <ListItem><MenuIcon/>Valor CRM</ListItem>
        </ListItemButton>

        <ListItemButton >
        <ListItem><MenuIcon/>Important</ListItem>
        </ListItemButton>
       
         
         
       
      </List>
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
      {android ? <Android/> : ''}
     
     {valor_crm ? <Valor_crm/> : ''}

   
      
     
      
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
