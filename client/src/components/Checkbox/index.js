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
      color: orange[600]
    }
  },
  checked: {}
})((props) => {
  return <Checkbox color="default" {...props} />;
});

export default function CheckboxLabels(props) {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    const name = props.name;
    props.handleUpdateUser({ [name]: isChecked });
  }, [isChecked]);

  const handleOnChange = () => setIsChecked(!isChecked);

  return (
    <FormGroup row>
      <h5>Would you like to register as a mentor?</h5>

      <FormControlLabel
        control={
          <GreenCheckbox checked={isChecked} onChange={handleOnChange} />
        }
        label="Yes, please register me as a Mentor!"
      />
    </FormGroup>
  );
}
