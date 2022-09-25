import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AppNavigate } from './routes/AppNavigate'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppNavigate />
      </Router>
    </div>
  );
}

export default App;
