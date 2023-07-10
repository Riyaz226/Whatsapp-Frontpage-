//import logo from './logo.svg';
import './App.css';
import Transfer from './Components/Transfer'
import Front from './Components/Front'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
  
    <Router>
      <Front/>
          
         <Routes> 
           <Route path='/' element={<Transfer/>}/>
           <Route path='/page1' element={<Page1/>}/>
            <Route exact path='/page2' element={<Page2/>}/>
            <Route exact path='/page3' element={<Page3/>}/>
            <Route exact path='/page4' element={<Page4/>}/>
            <Route exact path='/page5' element={<Page5/>}/>
        </Routes>    
    </Router>
     
  );
}

export default App;
