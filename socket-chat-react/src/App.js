import React from 'react';
import { BrowserRouter as Router, Route 
 } from 'react-router-dom';
 import Join from "./components/Join"
 import Chat from "./components/Chat"



function App() {
  return(
 <Router>
   <Route path='/' exact component={Join}/>
   <Route path='/chat' exact component={Chat}/>
 </Router>
  )};
export default App;









// -----------Example for a time on a button with material-ui 
// import { AccessAlarm } from '@material-ui/icons';
//   <button><AccessAlarm style={{ color: green[500] }} /></button>
//         <AccessAlarm /> 
        // with a green color