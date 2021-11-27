import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Header />} />
        <Route path="/quiz"  element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
