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
        height: 36,
        padding: '0 20px',
        margin: '10px',
        boxShadow: '0 3px 5px 2px rgba((219,120,77, .3)',
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
