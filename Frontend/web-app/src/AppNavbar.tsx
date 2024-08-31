import React from 'react';

const AppNavbar: React.FC = () => {

  // navbar not expand  in extra small screen ,expand with small screen
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#brand">SALES APP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Add Sales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/TopSales">Top 5 Sales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Revenue">Today's Total Revenue</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Register">Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
