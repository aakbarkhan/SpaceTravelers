import { Link } from 'react-router-dom';
import logoo from './logo.png';

const Nav = () => (
  <div className="nav">
    <nav className="same">
      <h1 className="heading">
        <img src={logoo} className="App-logoo" alt="logoo" width="70px" height="70px" />
      </h1>
      <ul className="nav-link">
        <Link to="/">Rockets</Link>
        <Link to="/missions">Missions</Link>
        <Link to="/myprofile">My Profile</Link>
      </ul>
    </nav>
  </div>
);

export default Nav;
