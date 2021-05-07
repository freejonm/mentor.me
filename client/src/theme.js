import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#db784d',
     },
    secondary: {
      main: '#01444c',
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu',
    ].join(','),
  },
});

export default theme