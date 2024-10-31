import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Orders from './Pages/orders';
import Principal from './Pages/Principal';

function App() {
    
  return (
      <div>
        <Routes>
          <Route path='/' element={ <Login/>}/>
          <Route path='/Register' element={ <Register/>}/>
          <Route path='/Orders' element={ <Orders/>}/>
          <Route path='/Principal' element={ <Principal/>}/>
        </Routes>
      </div>
  )
}
export default App