import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import { ToastContainer } from 'react-toastify';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddInventoryItem from './Pages/AddInventoryItem/AddInventoryItem';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/addInventoryItem' element={
          <RequireAuth>
            <AddInventoryItem></AddInventoryItem>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <AddInventoryItem></AddInventoryItem>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
