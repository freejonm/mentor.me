import React, { useState }from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const timeCommitmentArray = [];

export default function TimeCommitmentOptions() {


  const [isWeekly, setIsWeekly] = useState(false);
  
  const updateWeekly = () => {
    setIsWeekly(!isWeekly);
    timeCommitmentArray.push("Weekly");
  }
  ;

  const [isMonthly, setIsMonthly] = useState(false);
  const updateMonthly = () => {
    setIsMonthly(!isMonthly);
    timeCommitmentArray.push("Monthly");
    
  }
  ;

  const [isQuarterly, setIsQuarterly] = useState(false);
  const updateQuarterly = () => {
    setIsQuarterly(!isQuarterly);
    timeCommitmentArray.push("Quarterly");
  }
  ;

  const [isOnDemand, setIsOnDemand] = useState(false);
  const updateOnDemand= () => {
    setIsOnDemand(!isOnDemand);
    timeCommitmentArray.push("On Demand");
  }
  ;

  console.log(timeCommitmentArray);

  return (
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
  )
}
