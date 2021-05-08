import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const GreenCheckbox = withStyles({
  root: {
    color: orange[400],
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    // checkedA: true,
    // checkedB: true,
    // checkedF: true,
    checkedG: false,

  });

  const handleChange = (event) => {
    console.log(state.checkedG)
    setState({ ...state, checkedG: true});
    if(state.checkedG === true) {
      setState({...state, checkedG: false})
    }
  };

  return (
    <FormGroup row>

        <h4>Let us know if you would like to be a mentor:</h4>

        {/* 
        <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="I am looking for a Mentor!"
        />
        */}

        <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG"/>}
        label="Yes! I want to  be a Mentor"
        />

    </FormGroup>
  )
}
