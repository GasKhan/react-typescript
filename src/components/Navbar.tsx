const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper  blue darken-1 px1">
        <a href="#" className="brand-logo">
          Test
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">Sass</a>
          </li>
          <li>
            <a href="/">Components</a>
          </li>
          <li>
            <a href="/">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
