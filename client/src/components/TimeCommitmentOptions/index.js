import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




export default function TimeCommitmentOptions(props) {
  const [isChecked, setIsChecked] = React.useState(false)

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  
  return (
    <FormGroup row>        
        <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="Weekly"
      />
         <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Monthly"
      />
        <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
          />
        }
        label="Quarterly"
      />
        <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
            color="primary"
          />
        }
        label="On Demand"
      />

        {/*
        <FormControlLabel
        control={<GreenCheckbox checked={props.isChecked} onChange={props.handleCheckboxChange} name={props.name} />}
        label="Yes! I want to  be a Mentor"
        />
      */} 

    </FormGroup>
  )
}
