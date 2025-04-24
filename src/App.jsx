import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './services/ScrollToTop';
import Nav from './navigation/nav/Nav';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
