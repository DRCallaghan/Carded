import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Auth from '../../utils/auth';
import placeholder from '../../images/placeholder.png';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const styles = {
    headerStyle: {
      background: 'linear-gradient(20deg, #77b5d9, #d7eaf3, #d7eaf3,#14397d)',
      height: '10vh',
      width: '100%',
      position: 'sticky',
      top: '0',
      boxShadow: '0 2px 6px -2px rgba(0,0,0,.2)',

    },
    logoStyle: {
      position: 'relative',
      paddingTop: '10px',
      fontSize: 'max(2.5vh + 1.5vw)',
      textShadow: ' 2px 2px  rgba(0,0,0,.2)',
      color: '#14397d',
      left: '10px',

    },
    logoIcon: {
      objectFit: 'contain',
      width: '10vw',
      marginTop: '7px',
      minWidth: '120px'
      
    },

  };

  
  
  return (
    <header style={styles.headerStyle}>
      <div style={styles.headerStyle} className="header">
        <div className="text-dark">
          <h1 style={styles.logoStyle} className="m-0">
          Carded
          </h1> 
        </div>
        <img style={styles.logoIcon} src={placeholder} alt="placeholder" className="placeholder" />
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-light m-2" to="/profiles">
                View My Profile
              </Link>
              <button className="btn btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-light m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
