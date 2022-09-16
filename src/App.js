import './App.css';
import { store, persistor } from './models/store'
import { PersistGate } from 'redux-persist/integration/react';
import Form from './components/Form';
import { Provider } from 'react-redux' 
import Navbar from './components/Navbar';
import ListItem from './components/ListItem';
import {Route, Routes} from 'react-router-dom'
import MyOrder from './components/MyOrder';
import DetailOrder from './components/DetailOrder';
import MyCart from './components/MyCart';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Navbar />
  
        <Routes>
          <Route path='/' element={<ListItem />}/>
          <Route path='/CreateNew' element={<Form />} />
          <Route path='/MyOrders' element={<MyOrder />} />
          <Route path='/DetailOrder/:id' element={<DetailOrder />} />
          <Route path='/MyCart' element={<MyCart />}/>
        </Routes>

      </PersistGate>
    </Provider >
  );
}

export default App;
