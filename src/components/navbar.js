import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">$ to €</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="https://github.com/Ycube/convertUSDollars">GitHub</a></li>
          {/*<li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>*/}
        </ul>
      </div>
    </nav>    
  );
}

export default NavBar;