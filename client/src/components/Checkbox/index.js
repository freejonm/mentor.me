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

export default function CheckboxLabels(props) {
  const [isChecked, setIsChecked] = React.useState(false)

  React.useEffect(() => {
    const name = props.name 
    props.handleUpdateUser({[name]: isChecked})
  }, [isChecked])

  const handleOnChange = () => setIsChecked(!isChecked) 
  

  return (
    <FormGroup row>

        <h4>Let us know if you would like to be a mentor:</h4>

         
        <FormControlLabel
        control={<GreenCheckbox checked={isChecked} onChange={handleOnChange}/>}
        label="I am looking for a Mentor!"
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
