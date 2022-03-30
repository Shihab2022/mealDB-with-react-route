import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Component/Details/Details';
import Employee from './Component/Employee/Employee';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import Search from './Component/Search/Search';

function App() {
  return (
    <div >


     <Routes>
       <Route path='/' element={<Header></Header>}></Route>
       <Route path='/employee' element={<Employee></Employee>}></Route>
       <Route path='/search' element={<Search></Search>}></Route>
       <Route path='/search/:idMeal' element={<Details></Details>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
