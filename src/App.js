
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shop from './components/Shop/Shop';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Header></Header>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<RequireAuth><Inventory/></RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
