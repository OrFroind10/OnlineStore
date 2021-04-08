import './styles/App.css'
import './styles/results.css'
import './styles/modal.css'
import './styles/itemDetails.css'
import Home from './pages/Home';
import Nav from './components/Nav';
import ShoppingCart from './pages/ShoppingCart';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Results from './components/results';

function App() {
  return (
    <div className="App">
      <Router>
    <Nav/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/Results/:searchQuery" component={Results}/>
      <Route path="/ShoppingCart" component={ShoppingCart}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
