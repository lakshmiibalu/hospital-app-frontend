import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatients from './components/AddPatients';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPatients/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
