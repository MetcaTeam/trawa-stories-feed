import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoriesSection from './components/StoriesSection';
import Home from './components/Home';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/story/:categoryName" element={<StoriesSection />} />
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestComponent />} /> {/* Добавьте маршрут для TestComponent */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
