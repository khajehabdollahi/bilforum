import './App.css';
import TopNavbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import Register from './components/Register'
import Login from './components/Login'
import ForumContextProvider from './contexts/ForumContextProvider'
import UserContextProvider from './contexts/UserContextProvider'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForumDetails from './pages/ForumDetails'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <div className="App">
      <Router>   
      <TopNavbar />
        <ForumContextProvider> 
          <UserContextProvider>
          <div className="content">
            <Switch>
            <ProtectedRoute exact path='/mypage' component={MyPage} />  
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/:id" component={ForumDetails} />   
            </Switch>  
            </div>
            </UserContextProvider>
        </ForumContextProvider>
        <Footer/>
        </Router>   
    </div>
  );
}

export default App;
