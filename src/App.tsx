import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Aula01Page from './pages/Aula01Page'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aula-01-introducao/index.html" element={<Aula01Page />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
