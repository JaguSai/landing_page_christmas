import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Share from './Pages/Share';
import Decorations from './Pages/Decorations';

function App() {
  return (
    <Router>
      <Navbar />  
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/share' component={Share} />
        <Route exact path='/decorations' component={Decorations} />   
      </Switch>
    </Router>
         
  );
}

export default App;
