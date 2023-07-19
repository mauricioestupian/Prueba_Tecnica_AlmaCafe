import './App.css';
import ListTareasComponent from './Components/listTareasComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTareaComponent from './Components/AddTareaComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListTareasComponent />}></Route>
            <Route path='/tareas' element={<ListTareasComponent />}></Route>
            <Route path='/add-tareas' element={<AddTareaComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
