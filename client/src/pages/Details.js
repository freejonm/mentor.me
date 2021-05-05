import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Details() {
    return (
        <FormGroup row>
            <h4>Please check all areas of interest:</h4>

            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="JavaScript"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="Node.js"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="SQL"
                />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="MongoDB"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="Ruby"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="Python"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="Bash/Shell/Powershell"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="TypeScript"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="C#"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="Java"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="UI/UX"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="HTML/CSS"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="React/Angular/Vue"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="SASS/LESS"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="Career Advice"
            />
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}

            label="Salary Negotiations"
/>      

</FormGroup>
);

        </FormGroup>
    )
}

export default Details;