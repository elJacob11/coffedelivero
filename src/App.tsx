import Navbar from '@/components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CompleteOrder from './pages/CompleteOrder';

function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cashout" element={<CompleteOrder/>}/>
          <Route path="*" element={<h1>PAGE NOT FOUND 404</h1>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
