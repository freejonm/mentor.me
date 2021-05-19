import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function EditProfileButton() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <EditProfileButton />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

// import React from "react";
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// import './index.scss';

// const theme = createMuiTheme({
//     overrides: {

//       MuiButton: {

//         text: {
//           // Some CSS
//           fontFamily: 'primary',
//           background: '#db784d',
//           borderRadius: 3,
//           border: 0,
//           color: 'white',
//           height: 36,
//           padding: '0 20px',
//           margin: '10px',
//           boxShadow: '0 3px 5px 2px rgba((1,42,47, .3)',
//         },
//       },
//     },
//   });

//  function EditProfileButton() {

//     return (
//       <ThemeProvider theme={theme}>
//           <Button onClick={()=>window.location.href="/editprofile"}>
//             Edit Profile
//           </Button>
//           </ThemeProvider>

//     );
//   }

//   export default EditProfileButton;
