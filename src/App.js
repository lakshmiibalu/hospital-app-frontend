import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatients from './components/AddPatients';
import ViewPatients from './components/ViewPatients';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPatients/>}/>
        <Route path='/view' element={<ViewPatients/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
