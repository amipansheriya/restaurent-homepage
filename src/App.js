import './App.css';
import './restaurant.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router-dom";
import Home from './home';
// import Header from './header';

function App() {


  return(
    <>
      
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
