 import Navbar from './Navbar';
 import Home from './Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
 
function App() {
  
  return (

    <Router>
      <div className="App">
        <Navbar/>  {/* always show*/ } 

        <div className="content">
          <Switch>   {/* to match routes */ } 
            <Route exact path="/"> {/* to avoid path inclus fi path */}
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
 