import Home from '../components/Home';
import Login from '../components/Login'
import Registro from '../components/Registro';
import AppRouter from '../router/AppRouter';
import { GlobalStyle } from '../styles/GlobalStyle';

function App() {
  return (
    <div>
{/* <Login />  */}
{/* <Registro/> */}
<AppRouter/>
<GlobalStyle/>
  </div>
  );
}

export default App;
