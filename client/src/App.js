import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SubmitMessage from '../src/components/SubmitMessage'
import Logs from '../src/components/Logs'
import NavBar from '../src/components/NavBar'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<SubmitMessage />} />
        <Route path='/logs' element={<Logs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
