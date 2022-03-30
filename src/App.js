import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Search from './Component/Search/Search';

function App() {
  return (
    <div className="App">


     <Routes>
       <Route path='/' element={<Header></Header>}></Route>
       <Route path='/search' element={<Search></Search>}></Route>
     </Routes>
    </div>
  );
}

export default App;
