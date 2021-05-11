import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'

let socket
const CONNECTION_PORT = 'localhost:3001/'

const Chat = () => {
  // console.log('chat')
  const [loggedIn, setLoggedIn] = useState(true)
  const [room, setRoom] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    socket = io(CONNECTION_PORT)
  }, [CONNECTION_PORT])

  const connectToRoom = () => {
    setLoggedIn(true)
    socket.emit('join_room', room)
  }

 return (
   <div className='chat-application' style={{ borderRadius: '5px', margin: '6%', height: '50rem', display: 'grid', placeItems: 'center'}}>
   {!loggedIn ? (
    <div className='chat-login' style={{width:'600px', height: '350px', border: '5px solid 0091ff', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', margin: '10px'}}>
      <h1 style={{color: 'white', backgroundColor: '#db784d'}}>You are now in the chat application</h1>
        <div className='chat-inputs' style={{margin: '10px', width: '200px', height: '40px', backgroundColor: 'transparent', paddingLeft: '10px'}}>
          <input type='text' placeholder='Username...' onChange={(e) => {setUserName(e.target.value)}}/>
          <input type='room' placeholder='room...' onChange={(e) => {setRoom(e.target.value)}}/>
          <button onClick={connectToRoom} style={{width: '200px', height: '50px', border: 'none', backgroundColor: '#db784d', color: 'white', marginTop: '10%' }}>Enter Chat</button>
        </div>
    </div>
    ) : ( 
      <div className='chat-container'>
        <div className='messages'>
        </div>

        <div className='message-inputs'>
          <input type='text' placeholder='Message...' />
          <button>Send</button>
        </div>
      </div>
    )}
   </div>
 )
}  
export default Chat