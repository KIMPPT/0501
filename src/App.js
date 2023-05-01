import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './page/Home';
function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>
    </div>
  );
}

export default App;
