import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Paper from './components/Eventlist/Paper';
import MindScape from "./components/Eventlist/MindScape";
import Reciprocal from "./components/Eventlist/Reciprocal";
import BitRealm from "./components/Eventlist/BitRealm";
import Bitwizard from './components/Eventlist/Bitwizard'
import Scan from "./components/Eventlist/Scan";
import KollyWood from "./components/Eventlist/Kollywood";
import Chess from './components/Eventlist/Chess';
import Casket from "./components/Eventlist/Casket";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/paper' element={<Paper/>}/>
        <Route exact path='/mindscape' element={<MindScape/>}/>
        <Route exact path='/reciprocal' element={<Reciprocal/>}/>
        <Route exact path='/bitrealm' element={<BitRealm/>}/>
        <Route exact path='/bitwizard' element={<Bitwizard/>}/>
        <Route exact path='/scan' element={<Scan/>}/>
        <Route exact path='/kollywood' element={<KollyWood/>}/>
        <Route exact path='/chess' element={<Chess/>}/>
        <Route exact path='/casket' element={<Casket/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
