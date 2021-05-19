// import './App.css';
import Navbar from './components/nav-bar.js';
import LinkInput from './components/link-input.js';
import AllLinks from './components/all-links';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LinkInput} />
          <Route path='/links' component={AllLinks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
