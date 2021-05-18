import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import CheckboxLabels from '../Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AUTH from '../../utils/AUTH'

import Divider from '@material-ui/core/Divider';


import "./SignUp.scss"

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

function SignupForm() {

  const [userObject, setUSerObject] = useState({
    profilePicture: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    mentorStatus: false,
    currentPosition: '',
    yearsExperience: '',
    pronouns: '',
    location: '',
    education: '',
    timeCommitment: [],
    commPrefs: [],
    learningAbout: [],
  })

  const [mentorObject, setMentorObject] = useState({
    hasExperienceIn: []
  });

  const [redirectTo, setRedirectTo] = useState(null)

  // states for time commitment checkboxes
  const [isWeekly, setIsWeekly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);
  const [isQuarterly, setIsQuarterly] = useState(false);
  const [isOnDemand, setIsOnDemand] = useState(false);

  // states for comm preferences checkboxes
  const [isInPerson, setIsInPerson] = useState(false);
  const [isVideoChat, setIsVideoChat] = useState(false);
  const [isTextChat, setIsTextChat] = useState(false);
  const [isMessageBoards, setIsMessageBoards] = useState(false);

  // states for learning about checkboxes
  const [isJavascript, setIsJavascript] = useState(false);
  const [isRuby, setIsRuby] = useState(false);
  const [isPython, setIsPython] = useState(false);
  const [isCsharp, setIsCsharp] = useState(false);
  const [isNode, setIsNode] = useState(false);
  const [isReact, setIsReact] = useState(false);
  const [isRails, setIsRails] = useState(false);
  const [isSQL, setIsSQL] = useState(false);
  const [isMongoDB, setIsMongoDB] = useState(false);
  const [isSalaryNeg, setIsSalaryNeg] = useState(false);
  const [isCareerPaths, setIsCareerPaths] = useState(false);
  const [isWorkplaceEq, setIsWorkplaceEq] = useState(false);

  // states for experience in checkboxes
  const [isMentorJavascript, setIsMentorJavascript] = useState(false);
  const [isMentorRuby, setIsMentorRuby] = useState(false);
  const [isMentorPython, setIsMentorPython] = useState(false);
  const [isMentorCsharp, setIsMentorCsharp] = useState(false);
  const [isMentorNode, setIsMentorNode] = useState(false);
  const [isMentorReact, setIsMentorReact] = useState(false);
  const [isMentorRails, setIsMentorRails] = useState(false);
  const [isMentorSQL, setIsMentorSQL] = useState(false);
  const [isMentorMongoDB, setIsMentorMongoDB] = useState(false);
  const [isMentorSalaryNeg, setIsMentorSalaryNeg] = useState(false);
  const [isMentorCareerPaths, setIsMentorCareerPaths] = useState(false);
  const [isMentorWorkplaceEq, setIsMentorWorkplaceEq] = useState(false);
  

  // update functions for time commitment checkboxes
  const updateWeekly = () => {
    setIsWeekly(!isWeekly);
    userObject.timeCommitment.push("Weekly");
  };

  const updateMonthly = () => {
    setIsMonthly(!isMonthly);
    userObject.timeCommitment.push("Monthly");
    
  };

  const updateQuarterly = () => {
    setIsQuarterly(!isQuarterly);
    userObject.timeCommitment.push("Quarterly");
  };

  const updateOnDemand= () => {
    setIsOnDemand(!isOnDemand);
    userObject.timeCommitment.push("On Demand");
  };

  // update functions for comm preferences checkboxes
  const updateInPerson = () => {
    setIsInPerson(!isInPerson);
    userObject.commPrefs.push("In Person");
  };

  const updateVideoChat = () => {
    setIsVideoChat(!isVideoChat);
    userObject.commPrefs.push("Video Chat");
  };
  const updateTextChat = () => {
    setIsTextChat(!isTextChat);
    userObject.commPrefs.push("Text Chat");
  };

  const updateMessageBoards = () => {
    setIsMessageBoards(!isMessageBoards);
    userObject.commPrefs.push("Message Boards");
  };

  // update functions for learningAbout
  const updateJavascript = () => {
    setIsJavascript(!isJavascript);
    userObject.learningAbout.push("Javascript");
  };

  const updateRuby= () => {
    setIsRuby(!isRuby);
    userObject.learningAbout.push("Ruby");
  };
  const updatePython = () => {
    setIsPython(!isPython);
    userObject.learningAbout.push("Python");
  };

  const updateCsharp = () => {
    setIsCsharp(!isCsharp);
    userObject.learningAbout.push("C#");
  };
  const updateNode = () => {
    setIsNode(!isNode);
    userObject.learningAbout.push("Node");
  };

  const updateReact = () => {
    setIsReact(!isReact);
    userObject.learningAbout.push("React");
  };
  const updateRails = () => {
    setIsRails (!isRails );
    userObject.learningAbout.push("Rails");
  };

  const updateSQL = () => {
    setIsSQL(!isSQL);
    userObject.learningAbout.push("SQL");
  };
  const updateMongoDB = () => {
    setIsMongoDB(!isMongoDB);
    userObject.learningAbout.push("MongoDB");
  };
  const updateSalaryNeg = () => {
    setIsSalaryNeg(!isSalaryNeg);
    userObject.learningAbout.push("Salary Negotiations");
  };
  const updateCareerPaths = () => {
    setIsCareerPaths(!isCareerPaths);
    userObject.learningAbout.push("Career Paths");
  };

  const updateWorkplaceEq = () => {
    setIsWorkplaceEq(!isWorkplaceEq);
    userObject.learningAbout.push("Workplace Equity");
  };

  // functions for textbox change, updating user, and submitting

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
      profilePicture: userObject.profilePicture,
      firstName: userObject.firstName,
      lastName: userObject.lastName,
      pronouns: userObject.pronouns,
      username: userObject.username,
      password: userObject.password,
      email: userObject.email,
      currentPosition: userObject.currentPosition,
      yearsExperience: userObject.yearsExperience,
      education: userObject.education,
      mentorStatus: userObject.mentorStatus,
      location: userObject.location,
      description: userObject.description,
      timeCommitment: userObject.timeCommitment,
      commPrefs: userObject.commPrefs,
      learningAbout: userObject.learningAbout,
      hasExperienceIn: mentorObject.hasExperienceIn
    }).then(response => {
      console.log(response)
      setRedirectTo('/login')
    })
  }

  const classes = useStyles();

  if(redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />
  } else {
  return (
    <Container component="main" maxWidth="xs" id="signUpForm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar id="signup-avatar" className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
         
          <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                type="username"
                id="username"
                autoComplete="username"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={12}>
              {/* not-required info below  */}
              <Typography component="body1"  variant="body1">
              Let us know a little more about you before you set up your account.
            </Typography>
            </Grid>
         
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                name="pronouns"
                label="Preferred pronouns"
                type="pronouns"
                id="pronouns"
                autoComplete="pronouns"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                name="currentPosition"
                label="Current Position"
                type="currentPosition"
                id="currentPosition"
                autoComplete="currentPosition"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                name="yearsExperience"
                label="Years of experience in the tech industry"
                type="yearsExperience"
                id="yearsExperience"
                autoComplete="yearsExperience"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                name="location"
                label="Zip code"
                type="location"
                id="location"
                autoComplete="location"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                name="education"
                label="Bootcamp attended (year of graduation)"
                type="education"
                id="education"
                autoComplete="education"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <CheckboxLabels 
              name='mentorStatus'
              handleUpdateUser={updateUser}
             />
            </Grid>
            <Grid item xs={12}>
              {userObject.mentorStatus === false &&
                <Typography component="body1" variant="body1">
                How often would you like to meet with your mentors?
                </Typography>
              }
              {userObject.mentorStatus === true &&
                <Typography component="body1" variant="body1">
                How often would you like to meet with your mentees?
                </Typography>
              }
              
            </Grid>
            <Grid item xs={12}>
            <FormGroup row>        
              <FormControlLabel
                control={
              <Checkbox
                checked={isWeekly}
                onChange={updateWeekly}
                name="isWeekly"
                color="primary"
              />
            }
            label="Weekly"
          />
            <FormControlLabel
            control={
              <Checkbox
                checked={isMonthly}
                onChange={updateMonthly}
                name="isMonthly"
                color="primary"
              />
            }
            label="Monthly"
          />
            <FormControlLabel
            control={
              <Checkbox
                checked={isQuarterly}
                onChange={updateQuarterly}
                name="isQuarterly"
                color="primary"
              />
            }
            label="Quarterly"
          />
            <FormControlLabel
            control={
              <Checkbox
                checked={isOnDemand}
                onChange={updateOnDemand}
                name="isOnDemand"
                color="primary"
              />
            }
            label="On Demand"
          /> 
        </FormGroup>
        </Grid>
        <Grid item xs={12}>
          {userObject.mentorStatus === false && 
              <Typography component="body1" variant="body1">
                How would you like to communicate with your mentors?
              </Typography>
          }
          {userObject.mentorStatus === true && 
              <Typography component="body1" variant="body1">
                How would you like to communicate with your mentees?
              </Typography>
          }
        </Grid>
        <Grid item xs={12}>
            <FormGroup row>
              <FormControlLabel
              control={
                <Checkbox
                  checked={isInPerson}
                  onChange={updateInPerson}
                  name="isInPerson"
                  color="primary"
                />
              }
              label="In Person"
              /> 
              <FormControlLabel
              control={
                <Checkbox
                  checked={isVideoChat}
                  onChange={updateVideoChat}
                  name="isVideoChat"
                  color="primary"
                />
              }
              label="Video Chat"
              /> 
              <FormControlLabel
              control={
                <Checkbox
                  checked={isTextChat}
                  onChange={updateTextChat}
                  name="isTextChat"
                  color="primary"
                />
              }
              label="Text Chat"
              /> 
              <FormControlLabel
              control={
                <Checkbox
                  checked={isMessageBoards}
                  onChange={updateMessageBoards}
                  name="isMessageBoards"
                  color="primary"
                />
              }
              label="Message Boards"
              /> 
            </FormGroup>
          </Grid> 
            <Grid item xs={12}>
            <Typography component="body1"  variant="body1">
              Which of the following topics are you interested in talking to mentors about?
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isJavascript}
                  onChange={updateJavascript}
                  name="isJavascript"
                  color="primary"
                />
              }
              label="Javascript" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isRuby}
                  onChange={updateRuby}
                  name="isRuby"
                  color="primary"
                />
              }
              label="Ruby" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isPython}
                  onChange={updatePython}
                  name="isPython"
                  color="primary"
                />
              }
              label="Python" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCsharp}
                  onChange={updateCsharp}
                  name="isCsharp"
                  color="primary"
                />
              }
              label="C#" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isNode}
                  onChange={updateNode}
                  name="isNode"
                  color="primary"
                />
              }
              label="Node" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isReact}
                  onChange={updateReact}
                  name="isReact"
                  color="primary"
                />
              }
              label="React" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isRails}
                  onChange={updateRails}
                  name="isRails"
                  color="primary"
                />
              }
              label="Rails" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isSQL}
                  onChange={updateSQL}
                  name="isSQL"
                  color="primary"
                />
              }
              label="SQL" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMongoDB}
                  onChange={updateMongoDB}
                  name="isSQL"
                  color="primary"
                />
              }
              label="MongoDB" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCareerPaths}
                  onChange={updateCareerPaths}
                  name="isCareerPaths"
                  color="primary"
                />
              }
              label="Career Paths" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isSalaryNeg}
                  onChange={updateSalaryNeg}
                  name="isSalaryNeg"
                  color="primary"
                />
              }
              label="Salary negotiation" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isWorkplaceEq}
                  onChange={updateWorkplaceEq}
                  name="isWorkplaceEq"
                  color="primary"
                />
              }
              label="Workplace equity" 
            />

            </FormGroup>
            </Grid>
            
            {userObject.mentorStatus === true &&
            <div>
            <Grid item xs={12}>
              <Typography component="body1"  variant="body1"> 
              Which of the following topics should we add to your experience? Mentees will be able to find you based on their interest in these topcis.
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorJavascript}
                  onChange={updateJavascript}
                  name="isJavascript"
                  color="primary"
                />
              }
              label="Javascript" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorRuby}
                  onChange={updateRuby}
                  name="isRuby"
                  color="primary"
                />
              }
              label="Ruby" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorPython}
                  onChange={updatePython}
                  name="isPython"
                  color="primary"
                />
              }
              label="Python" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorCsharp}
                  onChange={updateCsharp}
                  name="isCsharp"
                  color="primary"
                />
              }
              label="C#" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorNode}
                  onChange={updateNode}
                  name="isNode"
                  color="primary"
                />
              }
              label="Node" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorReact}
                  onChange={updateReact}
                  name="isReact"
                  color="primary"
                />
              }
              label="React" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorRails}
                  onChange={updateRails}
                  name="isRails"
                  color="primary"
                />
              }
              label="Rails" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorSQL}
                  onChange={updateSQL}
                  name="isSQL"
                  color="primary"
                />
              }
              label="SQL" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorMongoDB}
                  onChange={updateMongoDB}
                  name="isSQL"
                  color="primary"
                />
              }
              label="MongoDB" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorCareerPaths}
                  onChange={updateCareerPaths}
                  name="isCareerPaths"
                  color="primary"
                />
              }
              label="Career Paths" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorSalaryNeg}
                  onChange={updateSalaryNeg}
                  name="isSalaryNeg"
                  color="primary"
                />
              }
              label="Salary negotiation" 
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMentorWorkplaceEq}
                  onChange={updateWorkplaceEq}
                  name="isWorkplaceEq"
                  color="primary"
                />
              }
              label="Workplace equity" 
            />

            </FormGroup>
            </Grid>
            </div>
            }
            

          <Grid container spacing={4}>
            
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={12}>
              
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            id="signup-button"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Grid>
        </form>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
            }
}

export default SignupForm