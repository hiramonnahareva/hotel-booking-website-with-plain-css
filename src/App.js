import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './components/CheckOut/CheckOut';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home></Home>}></Route>
        <Route path='/home' element={ <Home></Home>}></Route>
          <Route path='/login' element={ <Login></Login>}></Route>
          <Route path='/checkOut' element={<RequireAuth>
                <CheckOut/>
              </RequireAuth>}></Route>
        <Route path='/signup' element={ <SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
