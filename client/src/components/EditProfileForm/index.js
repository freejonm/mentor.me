import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white !important',
    borderRadius: 5,
    border: '3px solid #012a2f'
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  }
}));

export default function EditProfileForm({user, handleInputChange, handleSave, updatedUser}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    password: '',
    pronouns: '',
    username: '',
    showPassword: false,
    email: '',
    currentPosition: '',
    yearsExperience: '',
    education: '',
    location: '',

  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
 
      
      
      <div>
        <TextField
          label="First Name"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='firstName'
          variant="outlined"
          value={ updatedUser.firstName.length === 0 ? user.firstName : updatedUser.firstName}
          onChange={handleInputChange}

        />
        <TextField
          label="Last Name"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='lastName'
          variant="outlined"
          value={ updatedUser.lastName.length === 0 ? user.lastName : updatedUser.lastName}
          onChange={handleInputChange}
          
        />
        <TextField
          label="Pronouns"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='pronouns'
          variant="outlined"
          value={ updatedUser.pronouns.length === 0 ? user.pronouns : updatedUser.pronouns}
          onChange={handleInputChange}
        />
        <TextField
          label="Username"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='username'
          variant="outlined"
          value={ updatedUser.username.length === 0 ? user.username : updatedUser.username}
          onChange={handleInputChange}
        />
        
        {/* <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={0}
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl> */}
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <TextField
          label="Email"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='email'
          variant="outlined"
          value={ updatedUser.email.length === 0 ? user.email : updatedUser.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Current Position"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='currentPosition'
          variant="outlined"
          value={ updatedUser.currentPosition.length === 0 ? user.currentPosition : updatedUser.currentPosition}
          onChange={handleInputChange}
        />
        <TextField
          label="Years Expierence"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='yearsExperience'
          variant="outlined"
          value={ updatedUser.yearsExperience.length === 0 ? user.yearsExperience : updatedUser.yearsExperience}
          onChange={handleInputChange}
        />
        <TextField
          label="Education"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='education'
          variant="outlined"
          value={ updatedUser.education.length === 0 ? user.education : updatedUser.education}
          onChange={handleInputChange}
        />
        <TextField
          label="Location"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='location'
          variant="outlined"
          value={ updatedUser.location.length === 0 ? user.location : updatedUser.location}
          onChange={handleInputChange}
        />


      </div>
    </div>
  );
}
