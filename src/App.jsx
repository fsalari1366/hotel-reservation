import { Toaster } from 'react-hot-toast';
import "./App.css";
import Header from "./components/header/Header";
import LocationList from './components/locationList/LocationList';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<LocationList />} />
        <Route path='/hotels' element={<AppLayout />}>
          <Route index element={<div>Hotels</div>} />
          <Route path=':id' element={<div>single hotel</div>} />
          <Route />
        </Route>
      </Routes>
    </div>
  )
}

export default App;

