// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target= "_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { ChatEngine } from 'react-chat-engine';
import LoginForm from './Components/LoginForm';
import ChatFeed from './Components/ChatFeed';
import './App.css';
const App =() =>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    
    return(
    <ChatEngine
    height ="100vh"
    projectID="2ffdf91d-67b1-4cac-af19-01082ff3ef8c"
    userName= {localStorage.getItem('username')}
    userSecret = {localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps } />}
    />
    );
}
export default App;


