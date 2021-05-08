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
    isChecked: false,

  });

  const handleChange = (event) => {
    // console.log(state.isChecked)
    setState({ ...state, isChecked: true});
    if(state.isChecked === true) {
      setState({...state, isChecked: false})
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
        control={<GreenCheckbox checked={state.isChecked} onChange={handleChange} name="checkedG"/>}
        label="Yes! I want to  be a Mentor"
        />

    </FormGroup>
  )
}
