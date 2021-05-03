import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        background: 'linear-gradient(45deg, #eda320 30%, #db784d 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});

function AddtoCalendarButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button>add a meeting</Button>
    </ThemeProvider>
  );
}

export default AddtoCalendarButton;




  
  


























// import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// import './index.scss';

// const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//     extendedIcon: {
//       marginRight: theme.spacing(1),
//     },
//   }));
  
//   export default function AddtoCalendarButton() {
//     const classes = useStyles();
  
//     return (
//       <div>
       
        
//         <div>
//           <Button variant="contained" size="small" color="theme.palette.primary" className={classes.margin}>
//             add meeting
//           </Button>
    
//         </div>
//       </div>
//     );
//   }

