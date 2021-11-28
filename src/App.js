import './App.scss';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Header />} />
        <Route path="/quiz/:id"  element={<Quiz />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
