import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import DetailKelas from "./components/DetailKelas";
import './index.css'
import BerandaKelas from './pages/BerandaKelas'
import BerandaKelasKu from './pages/BerandaKelasKu'
import Kelas from './layouts/Kelas'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/kelas' element={<Kelas />}>
        <Route path='berandaKelas' element={<BerandaKelas/>} />
        <Route path='berandaKelasKu' element={<BerandaKelasKu/>} />
      </Route>
      <Route path="/detail/:id" element={<DetailKelas />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
