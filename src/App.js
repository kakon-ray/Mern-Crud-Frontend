import logo from './logo.svg';
import './App.css';
import AddInfo from './pages/addInfo/AddInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import ManageInfo from './pages/manageinfo/ManageInfo';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
         <Route path='/' element={< ManageInfo />} />
         <Route path='/add-info' element={< AddInfo />} />
         <Route path='/update-info' element={< AddInfo />} />
      </Routes>
    </>
  );
}

export default App;
