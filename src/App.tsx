import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoriesSection from './components/StoriesSection';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/story/:categoryName" element={<StoriesSection />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
