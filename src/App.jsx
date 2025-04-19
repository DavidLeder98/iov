import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './navigation/nav/Nav';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
