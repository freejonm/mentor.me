import { CalendarContent } from '@fullcalendar/common'
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
   <div className='chat-application' 
    // style={{ 
    //   borderRadius: '5px', 
    //   margin: '6%', 
    //   height: '50rem', 
    //   display: 'grid', 
    //   placeItems: 'center'}}
    >
   {!loggedIn ? (
    <div className='chat-login' 
      style={{
        // width:'600px', 
        // height: '350px', 
        // border: '5px solid #0091ff', 
        // borderRadius: '10px', 
        // display: 'flex', 
        // justifyContent: 'center', 
        // alignItems: 'center', 
        // flexDirection:'column', 
        // margin: '10px'
        }}>
          <h3 
            style={{
              color: 'white', 
              backgroundColor: '#db784d'
            }}>
            You are now in the chat application
          </h3>
        <div className='chat-inputs' 
          style={{
            // margin: '10px', 
            // width: '200px', 
            // height: '40px', 
            // backgroundColor: 'transparent', 
            // paddingLeft: '10px'
          }}>

          <input type='text' placeholder='Username...' onChange={(e) => {setUserName(e.target.value)}}/>
          <input type='room' placeholder='room...' onChange={(e) => {setRoom(e.target.value)}}/>

          <button onClick={connectToRoom} 
            style={{
              // width: '200px', 
              // height: '50px', 
              // border: 'none', 
              // backgroundColor: '#db784d', 
              // color: 'white', 
              // marginTop: '10%'
              borderRadius: '5px' 
            }}>
              Enter Chat
          </button>

        </div>
    </div>
    ) : ( 
      <div className='chat-container' 
        style={{
          // width:'600px', 
          // height: '350px', 
          // border: '5px solid #0091ff', 
          // borderRadius: '10px', 
          // display: 'flex', 
          // flexDirection:'column', 
          // margin: '10px', 
          // flex: '90%', 
          // width: '100%'
        }}>

        <div className='messages' 
         style={{
          //  flex: '80%', 
          //  width: '100%', 
          //  backgroundColor: 'white',
          //  paddingLeft: '20px'
          }}>
            {
              console.log(messageList),
              messageList.map((val, key) => {
              return ( 
                <div className='message-container'  
                  style={{
                    // color: 'black', 
                    // display: 'flex', 
                    // flexDirection: 'row', 
                    // alignItems: 'center'
                  }} 
                  id={val.author == userName ? 'You' : 'Other'}>
                <div className='message-individual'  
                  style={{
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
                  }}>
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

        <div className='message-inputs' 
          style={{
            // flex: '20%', 
            // width: '100%', 
            // display: 'flex', 
            // flexDirection: 'row'
          }}>

          <input onChange={(e) => setMessage(e.target.value)} type='text' placeholder='Message...' 
            style={{ 
              // flex: '80%', 
              // height: 'calc(100% -5px)', 
              // border: 'none', 
              // borderTop: '5px solid #0091ff', 
              // backgroundColor: 'lightgray', 
              // paddingLeft: '20px', 
              // fontSize: '20px'
            }}></input>

          <button 
            onClick={sendMessage}
            style={{ 
              // backgroundColor: '#db784d', 
              // color: 'white', 
              // flex: '20%', 
              // height: '100%', 
              // border: 'none', 
              // fontSize: '18px'
            }}>
            Send
          </button>
          
        </div>
      </div>
    )}
   </div>
 )
}  
export default Chat