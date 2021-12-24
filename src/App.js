import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Missions from './components/missionList';
import Rockets from './components/Rockets';
import Myprofile from './components/Myprofile';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myprofile" element={<Myprofile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
