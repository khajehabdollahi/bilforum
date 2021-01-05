import './App.css';
import TopNavbar from './components/Navbar'
import Home from './pages/Home'
import ForumContextProvider from './contexts/ForumContextProvider'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ForumContextProvider>
        <Router>
          <TopNavbar />
          <Home />
        </Router>
      </ForumContextProvider>
    </div>
  );
}

export default App;
