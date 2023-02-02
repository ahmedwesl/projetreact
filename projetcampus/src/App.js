import './App.css';
import SupplierMap from './SupplierMap';
import SupplierList from './SupplierList';
import Supplier from './Supplier';
import {Routes, Route} from "react-router-dom"


function App() {
  return  (
    <div className="App">
      <Routes>
        <Route path='/map' element={<SupplierMap />}  />
        <Route path='/list'element={<SupplierList/>}  />
        <Route path='/supplier'element={<Supplier/>}  />

 </Routes>
      <button className="btn btn-danger m-5" onClick={onSuppliersListClick}>Click me</button>
      <button className="btn btn-danger m-5 "onClick={onMapClick}>Click me</button>
   </div>     
  );
}

function onSuppliersListClick(){
  return alert('Suppliers list clicked!');
}

function onMapClick (){
  return alert('onMapClick');
}

export default App;

