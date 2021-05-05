import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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

// const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
// };

function Details() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs" id="login-form">
            <CssBaseline />
            <div className={classes.paper}>
            <h3>Let us know more about what you're looking for.</h3>
            <p>*Please check all that apply</p>
                <FormGroup row>
                    <h3>I want to connect </h3>
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="For regular in-person or virtual check-ins"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Via text or email only"
                    />
                    <h3>I want to learn more about</h3>

                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="JavaScript"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="Node.js"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="SQL"
                      />
                    <FormControlLabel
                    control={<GreenCheckbox name="checkedG" />}
                    label="MongoDB"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox name="checkedG" />}
                    label="Ruby"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Python"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="Bash/Shell/Powershell"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="TypeScript"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="C#"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="Java"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="UI/UX"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox c  name="checkedG" />}
                    label="HTML/CSS"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="React/Angular/Vue"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox   name="checkedG" />}
                    label="SASS/LESS"
                     />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}
                    label="Career Advice"
                    />
                    <FormControlLabel
                    control={<GreenCheckbox  name="checkedG" />}

                    label="Salary Negotiations"
                    />      

                </FormGroup>
            </div>
        </Container>
);

       

}

export default Details;