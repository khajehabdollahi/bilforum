import './App.css';
import TopNavbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import Register from './components/Register'
import Login from './components/Login'
import ForumContextProvider from './contexts/ForumContextProvider'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForumDetails from './pages/ForumDetails'


function App() {
  return (
    <div className="App">
      <Router>   
      <TopNavbar />
        <ForumContextProvider> 
          <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/:id" component={ForumDetails} /> 
            </Switch>  
            </div>
        </ForumContextProvider>
        <Footer/>
        </Router>   
    </div>
  );
}

export default App;
