import './App.css';
import TopNavbar from './components/Navbar'
import Home from './pages/Home'
import Register from './components/Register'
import ForumContextProvider from './contexts/ForumContextProvider'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForumDetails from './pages/ForumDetails'

function App() {
  return (
    <div className="App">
      <Router>   
      <TopNavbar />
        <ForumContextProvider> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/:id" component={ForumDetails} /> 
          </Switch>  
        </ForumContextProvider>
        </Router>   
    </div>
  );
}

export default App;
