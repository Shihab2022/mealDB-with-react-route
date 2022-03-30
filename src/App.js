import { Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './Component/Search/Search';

function App() {
  return (
    <div className="App">
     <h1>this is react router project</h1>

     <Routes>
       <Route path='/search' element={<Search></Search>}></Route>
     </Routes>
    </div>
  );
}

export default App;
