import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import "./UserDetails.scss"

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  export default function UserDetails() {
   

    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
      checkedF: true,
      checkedG: true,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    return (
    <Container component="main" maxWidth="xs" id="signUpForm">
    <CssBaseline />
    <div>
    <Typography component="h1" variant="h5">
          Let us know more about what you're looking for.
    </Typography>
    <Typography component="p">*Please check all that apply</Typography>
    <FormGroup row>
       <Typography component="h4" variant="h5>">
       I want to connect . . . 
       </Typography>
        <div>
          
        <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange}  name="checkedG" />}
        label="Weekly"
        />
        <FormControlLabel
        control={<GreenCheckbox   name="checkedG" />}
        label="Biweekly"
        />
        <FormControlLabel
        control={<GreenCheckbox   name="checkedG" />}
        label="Monthly"
        />
        <FormControlLabel
        control={<GreenCheckbox   name="checkedG" />}
        label="Quarterly"
        />
        <FormControlLabel
        control={<GreenCheckbox   name="checkedG" />}
        label="On demand"
        />
        <FormControlLabel
        control={<GreenCheckbox   name="checkedG" />}
        label="For in-person or virtual check-ins"
        />
        <FormControlLabel
        control={<GreenCheckbox   name="checkedG" />}
        label="Via text messaging only"
        />
        </div>
        <Typography component="h4" variant="h5>">
       With someone who can help me . . . 
       </Typography>
        <div>
        <FormControlLabel
        control={<GreenCheckbox   name="checkedG" />}
        label="With coding problems"
        />
        <FormControlLabel
        control={<GreenCheckbox   name="checkedG" />}
        label="Set and achieve goals"
        />
        <FormControlLabel
        control={<GreenCheckbox   name="checkedG" />}
        label="Network more effectively"
        />
        </div>

        <Typography component="h4" variant="h5>">
       So I can learn more about . . .  
       </Typography>
        <div>
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
        control={<GreenCheckbox name="checkedG" />}
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
    
    </div>
</FormGroup>
</div>
</Container>
);
}