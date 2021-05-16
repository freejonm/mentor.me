import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#db784d',
     },
    secondary: {
      main: '#637f7d',
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu',
    ].join(','),
  },
});

export default theme