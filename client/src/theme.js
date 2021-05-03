import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#467fcf' },
  },
  typography: {
    fontFamily: [
      'Ubuntu',
    ].join(','),
  },
});

export default theme