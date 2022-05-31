 import Navbar from './Navbar';
 import Home from './Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
function App() {
  
  return (

    <Router>
      <div className="App">
        <Navbar/>  {/* always show*/ } 

        <div className="content">
          <Switch>   {/* swith route path */ } 
            <Route path="/">
              <Home/>
            </Route>
          </Switch>

        </div>

      </div>
    </Router>
  );
}

export default App;
 