import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index.jsx'

function App() {
  console.log("sdfs");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
