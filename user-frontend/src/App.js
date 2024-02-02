import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
