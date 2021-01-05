import './App.css';
import TopNavbar from './components/Navbar'
import Home from './pages/Home'
import ForumContextProvider from './contexts/ForumContextProvider'
import { BrowserRouter as Router, Route } from "react-router-dom";
import ForumDetails from './pages/ForumDetails'

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <ForumContextProvider>
        <Router>         
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={ForumDetails} />
        </Router>
      </ForumContextProvider>
    </div>
  );
}

export default App;
