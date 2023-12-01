import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
