import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Orders from './Pages/orders';
import Principal from './Pages/Principal';
import RecoverPassword from './Pages/Login/RecoverPassword';


function App() {

  //const [user, setUser] = useState(null)
    
  return (
      <div>
          <Routes>
            <Route path='/Login' element={ <Login/>}/>
            <Route path='/Register' element={ <Register/>}/>
            <Route path='/Orders' element={ <Orders/>}/>
            <Route path='/RecoverPassword' element={ <RecoverPassword/>}/>
            <Route path='/' element={ <Principal/>}/>
          </Routes>
      </div>
  )
}
export default App