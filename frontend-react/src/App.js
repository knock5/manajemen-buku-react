import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Beranda from './components/Beranda';
import ManajemenBuku from './components/ManajemenBuku';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' exact element={<Beranda/>} />
          <Route path='/manajemen-buku' element={<ManajemenBuku/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
