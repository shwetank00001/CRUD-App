import Create from "./Create";
import Read from "./Read";
// import Reducer from './Reducer'
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h2> A basic CRUD app</h2>

        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
        </Routes> 

    </div>
  );
}

export default App;
