import './App.css';
import TopNavbar from './components/Navbar'
import Home from './pages/Home'
import ForumContextProvider from './contexts/ForumContextProvider'

function App() {
  return (
    <div className="App">
      <ForumContextProvider>
      <TopNavbar />
        <Home />
    </ForumContextProvider>
    </div>
  );
}

export default App;
