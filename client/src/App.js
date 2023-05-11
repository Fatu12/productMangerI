import './App.css';
import DisplayOne from './components/DisplayOne';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './views/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      {/* < Route path="/" element ={ <PersonForm/>}/>
      < Route path='/'  element={< DisplayAll/>}/> */}
      < Route path='/' element={ <Main/> }/>
      < Route path='/products/:id' element={ <DisplayOne/> }/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
