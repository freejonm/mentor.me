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
})((props) => {
  console.log("Green Checkbox props", props)
  return <Checkbox color="default" {...props} />});

export default function TimeCommitmentOptions(props) {
  const [isChecked, setIsChecked] = React.useState(false)

  React.useEffect(() => {
    const name = props.name 
    props.handleUpdateUser({[name]: isChecked})
  }, [isChecked])

  const handleOnChange = () => setIsChecked(!isChecked) 
  

  return (
    <FormGroup row>        
        <FormControlLabel
        control={<GreenCheckbox checked={isChecked} onChange={handleOnChange}/>}
        label="Weekly" name="weekly" value="weekly"
        />
         <FormControlLabel
        control={<GreenCheckbox checked={isChecked} onChange={handleOnChange}/>}
        label="Monthly" name="monthly" value="monthly"
        />
        
        <FormControlLabel
        control={<GreenCheckbox checked={isChecked} onChange={handleOnChange}/>}
        label="Quarterly" name="quarterly" value="quarterly"
        />

        <FormControlLabel
        control={<GreenCheckbox checked={isChecked} onChange={handleOnChange}/>}
        label="On Demand" name="on-demand" value="on-demand"
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
