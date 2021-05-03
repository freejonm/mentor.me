import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './index.scss';

const theme = createMuiTheme({
    overrides: {
      
      MuiButton: {
        
        text: {
          // Some CSS
          background: 'linear-gradient(45deg, #637f7d 30%, #01444c 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 36,
          padding: '0 20px',
          boxShadow: '0 3px 5px 2px rgba((1,42,47, .3)',
        },
      },
    },
  });
  
 function EditProfileButton() {
  
    return (
      <ThemeProvider theme={theme}>
          <Button>
            Edit Profile
          </Button>
          </ThemeProvider>
    
    );
  }

  export default EditProfileButton;
