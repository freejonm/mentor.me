import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../styles/Chat.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import InputAdornment from '@material-ui/core/InputAdornment';

import TextField from '@material-ui/core/TextField';

let socket;

const CONNECTION_PORT = 'localhost:3001/';

const Chat = () => {
 
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log('message data' + data);

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

    socket.emit('send_message', messageContent);
    setMessageList([...messageList, messageContent.content]);
    setMessage('');
  };
 
  return (
    <div
      className="chat-application"
    >
      {!loggedIn ? (
        <div className="chat-login">
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              backgroundColor: '#db784d',
              marginBottom: '30px',
              padding: '30px',
              width: '100%',
              fontFamily: 'Righteous'
            }}
          >
            Chat Application
          </h1>
          <div>
            <TextField
              label="Username"
              id="outlined-start-adornment"
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
            <br></br>
            <TextField
              label="room"
              id="outlined-start-adornment"
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
            <Button id='chatBtn' onClick={connectToRoom}>Enter Chat</Button>
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
          <h1>Live Help</h1>
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
