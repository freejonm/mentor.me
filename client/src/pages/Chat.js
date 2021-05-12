import React, {useState, useEffect} from 'react'
import clsx from 'clsx';
import io from 'socket.io-client'
import '../styles/Chat.css'
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

let socket
const CONNECTION_PORT = 'localhost:3001/'

const Chat = () => {
  // console.log('chat')
  //Before Login
  const [loggedIn, setLoggedIn] = useState(false)
  const [room, setRoom] = useState('')
  const [userName, setUserName] = useState('')

  //After Login
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    socket = io(CONNECTION_PORT)
  }, [CONNECTION_PORT])

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data)
      setMessageList([...messageList, data])
    })
  })

  const connectToRoom = () => {
    setLoggedIn(true)
    socket.emit('join_room', room)
  }

  const sendMessage = async () => {
    let messageContent = {
      room: room,
      content: {
        author: userName,
        message: message
      }
    }

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
        boxShadow: '0 3px 5px 2px rgba((219,120,77, .3)',
      },
    },
  },
});

 return (
   <div className='chat-application'>
   {!loggedIn ? (
    <div className='chat-login'>
          <h1 
            style={{
              color: 'white', 
              backgroundColor: '#db784d',
              marginTop: '10px !important',
              marginBottom: '10px',
            }}>
            You are now in the chat application
          </h1>
        <div className='chat-inputs'>

          <TextField
          label="room"
          id="outlined-start-adornment"
          // className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="outlined"
          onChange={(e) => {setRoom(e.target.value)}}></TextField>

          <button onClick={connectToRoom}>
              Enter Chat
          </button>

        </div>
        <ThemeProvider>
          <Button onClick={connectToRoom}>
              Enter Chat
          </Button>
          </ThemeProvider>
    </div>
    ) : ( 
      <div className='chat-container'>

        <div className='messages'>
            {
              console.log(messageList),
              messageList.map((val, key) => {
              return ( 
                <div className='message-container' 
                  id={val.author == userName ? 'You' : 'Other'}>
                <div className='message-individual'>
                  {' '} {val.message}
                </div> 
                <h1 
                  style={{
                    fontWeight: '300', 
                    fontSize: '17px'
                  }}>
                  {val.author}
                  </h1>
                </div>
                
              )
            })}
        </div>

        <div className='message-inputs'>

          <input onChange={(e) => setMessage(e.target.value)} type='text' placeholder='Message...'></input>

          <button 
            onClick={sendMessage}>
            Send
          </button>
          
        </div>
      </div>
    )}
   </div>
 )
}  
export default Chat