import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Add your logo image in this path

type NavbarProps = {
  userRole: string;
};

const Navbar: React.FC<NavbarProps> = ({ userRole }) => {
  const handleLogout = () => {
    localStorage.removeItem("evidwan-current-user");
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="e-vidwan logo" className="logo" />
        <span className="brand">e-vidwan</span>
      </div>

      <ul className="nav-links">
        <li>Course Catalog</li>
        <li>Assignment & Quiz</li>
        <li>Notification</li>
        <li>Forum</li>
        <li>Performance & Analytics</li>
        <li>Profile</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
