import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className="txt-white">Expensor </Link>
            </Typography>
                    
          <Link to="/login" className="txt-white">
            <Button color="inherit">Login</Button>
          </Link>          
          <Link to="/register" className="txt-white">
            <Button color="inherit">Register</Button>
          </Link>          
        </Toolbar>
      </AppBar>
    </Box>
  );
}