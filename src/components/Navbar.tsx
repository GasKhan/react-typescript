import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper  blue darken-1 px1">
        <a href="/" className="brand-logo">
          Test
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
