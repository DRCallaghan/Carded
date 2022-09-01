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
        background: '#d7eaf3',
        height: '10vh',
        width: '100%',
        position: 'sticky',
        top: '0',
        boxShadow: '0 2px 6px -2px rgba(0,0,0,.2)',
        
    },
    logoStyle: {
      position: 'relative',
      paddingTop: '10px',
      fontSize: '2.87vw',
      color: '#14397d',
      left: '25px'
    },
    logoIcon: {
      objectFit: 'contain',
      width: '150px',
      marginRight: '1300px',
      marginTop: '15px'
    },
  
  };

  
  
  return (
    <header style={styles.headerStyle}>
      <div style={styles.headerStyle} className="header">
        <div className="text-dark" to="/">
          <h1 style={styles.logoStyle} className="m-0">
          Carded
          </h1> 
        </div>
        <img style={styles.logoIcon} src={placeholder} alt="placeholder" class="placeholder" />
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/profiles">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
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
