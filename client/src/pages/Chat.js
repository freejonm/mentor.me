import React from 'react'


const Chat = () => {
  console.log('chat')

 return (
   <div className='chat-application' style={{ borderRadius: '5px', margin: '6%', height: '50rem', display: 'grid', placeItems: 'center'}}>
    <div className='chat-login' style={{width:'600px', height: '350px', border: '5px solid 0091ff', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', margin: '10px'}}>
      <h1 style={{color: 'white', backgroundColor: '#db784d'}}>You are now in the chat application</h1>
        <div className='chat-inputs' style={{margin: '10px', width: '200px', height: '40px', backgroundColor: 'transparent', paddingLeft: '10px'}}>
          <input type='text' placeholder='Username...' />
          <input type='room' placeholder='room...' />
          <button>Enter Chat</button>
        </div>
    </div>
   </div>
 )
}  
export default Chat