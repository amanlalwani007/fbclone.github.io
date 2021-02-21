import './App.css';
import React ,{useState,useEffect} from 'react'
import {Button,FormControl,InputLabel,Input} from '@material-ui/core'
import Message from './Message';
import db from './firebase';
import  firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';


function App() {
  const [input,setInput] = useState('')
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('')
  //useState:- variable in react
  //useffect:-  run code on a condition 

useEffect(() => {
  //run code here
  //if its blank inside [],this code runs ONCE when the app components loads
  setUsername(prompt('Please Enter your username'));
  
}, [])//condition

  const sendMessage = (event) =>{
  event.preventDefault();
  //all the logic to send messages 
  db.collection('messages').add({
    message:input,
    username:username,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput('');
 }
  

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
     setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()}) )) 
    })
   
  },[])




  return (
    <div className="App">
    <img src="data:image/png;base64,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" />
    <h1>Programmer Chat Room</h1>
    <h2>Welcome {username} </h2>
  <form className="app__form">
  <FormControl className="app__formControl">
  <Input className="app__input" placeholder="Enter a message" value={input} onChange={event =>setInput(event.target.value)} />
  
  <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage} >
  <SendIcon/>
  </IconButton>
  
</FormControl>
  </form>

   <FlipMove>
    {
      messages.map(({id,message}) => (
      <Message key={id} username={username} message={message} />
      ))
    }
    </FlipMove>
    
    </div>
  );
}

export default App;
