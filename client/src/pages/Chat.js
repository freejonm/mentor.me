import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import '../styles/Chat.css'

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

 return (
   <div className='chat-application'>
   {!loggedIn ? (
    <div className='chat-login'>
          <h1 
            style={{
              color: 'white', 
              backgroundColor: '#db784d'
            }}>
            You are now in the chat application
          </h1>
        <div className='chat-inputs'>

          <input type='text' placeholder='Username...' onChange={(e) => {setUserName(e.target.value)}}/>
          <input type='room' placeholder='room...' onChange={(e) => {setRoom(e.target.value)}}/>

          <button onClick={connectToRoom}>
              Enter Chat
          </button>

        </div>
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