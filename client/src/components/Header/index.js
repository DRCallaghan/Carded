import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const styles = {
    headerStyle: {
        background: 'rgb(122, 235, 229)',
        height: '10vh',
        width: '100%',
        position: 'sticky',
        top: '0'
    },
  };

  return (
    <header style={styles.headerStyle}>
      <div  className="header">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3.8vw' }}>
            Get Carded
          </h1>
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>
              <Link to="/signup">
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
