import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

import Checkbox from '@material-ui/core/Checkbox';
import CheckboxLabels from '../Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AUTH from '../../utils/AUTH'


// importing material-ui drop-down box selection
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import "./UserInfo.scss"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: orange[400],
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


function UserInfo() {
  const [userObject, setUSerObject] = useState({
    description: '',
    location: '',
    pronouns: '',
    currentPostion: '',
    experience: '',
    education: '',
  })
  const [redirectTo, setRedirectTo] = useState(null)


 
  const handleChange = (event) => {
    console.log(event.target.checked)
    setUSerObject({...userObject, [event.target.name]: event.target.value})
  }

  const updateUser = (updatedValue) => {
    console.log('UpdatedValue ', updatedValue)
    setUSerObject({...userObject, ...updatedValue})

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userObject)
    AUTH.signup({
      firstName: userObject.firstName,
      lastname: userObject.lastName,
      email: userObject.email,
      password: userObject.password,
      username: userObject.username,
      mentorStatus: userObject.mentorStatus
      // mentor: userObject.mentee,
      // mentee: userObject.mentor,
      // fieldOfInterest: userObject.fieldOfInterest
    }).then(response => {
      console.log(response)
      if(!response.data.errmsg) {
        setRedirectTo('/login')
      } else {
        console.log('duplicate')
      }
      
    })
  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" id="signUpForm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Tell us more about you.
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <InputLabel id="location">How would you describe yourself to a new colleague?</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                id="description"
                
                name="description"
                autoComplete="description"
                onChange={handleChange}
              />
          <InputLabel id="location">What is your zip code?</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                id="location"
                
                name="location"
                autoComplete="location"
                onChange={handleChange}
              />
          <InputLabel id="pronouns">Which pronouns do you prefer to use?</InputLabel>
            
              <FormControl>
              <Select labelID="pronouns"
              value="pronouns"
              onChange={handleChange}>
                <MenuItem value="they/them">they/them</MenuItem>
                <MenuItem value="she/her">she/her</MenuItem>
                <MenuItem value="she/her">he/him</MenuItem>
              </Select>
              </FormControl>
              <Grid item xs={12}>
              <InputLabel id="current-position">What is your current position?</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                id="currentPosition"
                
                name="currentPosition"
                autoComplete="currentPosition"
                onChange={handleChange}
              />
               <InputLabel id="years-of-experience">How many years of experience do you have in the tech industry?</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                id="years-of-experience"
                name="years-of-experience"
                autoComplete="years-of-experience"
                onChange={handleChange}
              />
              <InputLabel id="education">Which coding bootcamp did you attend?</InputLabel>
              <FormControl>
              <Select labelID="education"
              value="education"
              onChange={handleChange}>
                <MenuItem value="Triology">Triology</MenuItem>
                <MenuItem value="The Iron Yard">The Iron Yard</MenuItem>
                <MenuItem value="Momentum">Momentum</MenuItem>
              </Select>
              </FormControl>
              <InputLabel id="year-of-graduation">What year did you graduate?</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                id="year-of-graduation"
                name="year-of-graduation"
                autoComplete="year-of-graduation"
                onChange={handleChange}
              />
           
            </Grid>
           
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            id="signup-button"
            color="primary"
            className={classes.submit}
            onClick={updateUser}
          >
            Submit
          </Button>
         
        </form>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );

}

export default UserInfo