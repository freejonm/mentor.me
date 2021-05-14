import { CalendarContent } from '@fullcalendar/common';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import io from 'socket.io-client';
import '../styles/Chat.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

let socket;
const CONNECTION_PORT = 'localhost:3001/';

const Chat = () => {
  // console.log('chat')
  //Before Login
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState('');
  const [userName, setUserName] = useState('');

  //After Login
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setMessageList([...messageList, data]);
    });
  });

  const connectToRoom = () => {
    setLoggedIn(true);
    socket.emit('join_room', room);
  };

  const sendMessage = async () => {
    let messageContent = {
      room: room,
      content: {
        author: userName,
        message: message
      }
    };

    socket.on('join_room', function(docs) {
      console.log('Here are docs' + docs)
      // docs.map(message, function() {
      //   if(message.room === room) {
      //     console.log('room' + message)
      //   }
      // })
    })

    socket.emit('send_message', messageContent)
    setMessageList([...messageList, messageContent.content])
    setMessage('')

  }
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //     backgroundColor: 'white !important',
  //     borderRadius: 5,
  //     border: '3px solid #012a2f'
  //   },
  //   margin: {
  //     margin: theme.spacing(1),
  //   },
  //   withoutLabel: {
  //     marginTop: theme.spacing(3),
  //   },
  //   textField: {
  //     width: '25ch',
  //   },
  // }));

  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        text: {
          // background: 'linear-gradient(45deg, #db784d 30%, #eda320 90%)',
          background: '#db784d',
          borderRadius: 3,
          font: 'Righteous',
          border: 0,
          color: 'white',
          height: 36,
          padding: '0 20px',
          margin: '10px',
          boxShadow: '0 3px 5px 2px rgba((219,120,77, .3)'
        }
      }
    }
  });

  return (
    <div
      className="chat-application"
      // style={{
      //   borderRadius: '5px',
      //   margin: '6%',
      //   height: '50rem',
      //   display: 'grid',
      //   placeItems: 'center'}}
    >
      {!loggedIn ? (
        <div className="chat-login">
          <h4
            style={{
              color: 'white',
              backgroundColor: '#db784d',
              marginTop: '10px !important',
              marginBottom: '10px'
            }}
          >
            Chat Application
          </h4>
          <div>
            <TextField
              label="Username"
              id="outlined-start-adornment"
              // className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                )
              }}
              variant="outlined"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <br></br>
            {/* <input type='text' placeholder='Username...' style={{
            borderRadius: '10px',
            width: '200px',
            height: '50px',
            marginTop: '30px',
            marginBottom: '20px'
            }} onChange={(e) => {setUserName(e.target.value)}}/>
          <br></br>
          <input type='room' placeholder='Room...' style={{
            borderRadius: '10px',
            width: '200px',
            height: '50px',
            marginTop: '50px !important',
            marginBottom: '30px'
            }} onChange={(e) => {setRoom(e.target.value)}}/> */}
            <br></br>

            <TextField
              label="room"
              id="outlined-start-adornment"
              // className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                )
              }}
              variant="outlined"
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            ></TextField>
          </div>
          <ThemeProvider>
            <Button onClick={connectToRoom}>Enter Chat</Button>
          </ThemeProvider>
        </div>
      ) : (
        <div
          className="chat-container"
          style={
            {
              // width:'600px',
              // height: '350px',
              // border: '5px solid #0091ff',
              // borderRadius: '10px',
              // display: 'flex',
              // flexDirection:'column',
              // margin: '10px',
              // flex: '90%',
              // width: '100%'
            }
          }
        >
          <div
            className="messages"
            style={
              {
                //  flex: '80%',
                //  width: '100%',
                //  backgroundColor: 'white',
                //  paddingLeft: '20px'
              }
            }
          >
            {
              (console.log(messageList),
              messageList.map((val, key) => {
                return (
                  <div
                    className="message-container"
                    style={
                      {
                        // color: 'black',
                        // display: 'flex',
                        // flexDirection: 'row',
                        // alignItems: 'center'
                      }
                    }
                    id={val.author == userName ? 'You' : 'Other'}
                  >
                    <div
                      className="message-individual"
                      style={
                        {
                          // color: 'black',
                          // width: '200px',
                          // height: '60px',
                          // backgroundColor: '#0091ff',
                          // margin: '20px',
                          // borderRadius: '10px',
                          // display: 'grid',
                          // placeItems: 'center',
                          // marginRight: '10px',
                          // marginTop: '20px'
                        }
                      }
                    >
                      {' '}
                      {val.message}
                    </div>
                    <h1
                      style={{
                        fontWeight: '300',
                        fontSize: '17px'
                      }}
                    >
                      {val.author}
                    </h1>
                  </div>
                );
              }))
            }
          </div>

          <div
            className="message-inputs"
            style={
              {
                // flex: '20%',
                // width: '100%',
                // display: 'flex',
                // flexDirection: 'row'
              }
            }
          >
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Message..."
              style={
                {
                  // flex: '80%',
                  // height: 'calc(100% -5px)',
                  // border: 'none',
                  // borderTop: '5px solid #0091ff',
                  // backgroundColor: 'lightgray',
                  // paddingLeft: '20px',
                  // fontSize: '20px'
                }
              }
            ></input>
            <ThemeProvider>
              <Button onClick={sendMessage}>Send</Button>
            </ThemeProvider>
          </div>
        </div>
      )}
    </div>
  );
};
export default Chat;
