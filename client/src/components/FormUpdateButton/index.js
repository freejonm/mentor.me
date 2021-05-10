import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './index.scss';

const theme = createMuiTheme({
    overrides: {
      
      MuiButton: {
        
        text: {
          // Some CSS
          fontFamily: 'primary',
          background: '#db784d',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 36,
          padding: '0 20px',
          margin: '10px',
          boxShadow: '0 3px 5px 2px rgba((1,42,47, .3)',
        },
      },
    },
  });
  
 function FormUpdateButton() {
  
    return (
      <ThemeProvider theme={theme}>
          <Button>
            Save Changes
          </Button>
          </ThemeProvider>
    
    );
  }

  export default FormUpdateButton;
