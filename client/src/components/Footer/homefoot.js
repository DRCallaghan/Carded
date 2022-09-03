import React from 'react';
import logo from '../../images/logo.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './footer.css'

const HomeFooter = () => {
  const styles = {
    footerStyle: {
      bottom: '0',
      display: 'flex',
      justifyContent: "space-between",
      height: '20vh',
      fontSize: 'max(2.5vh + 1.5vw)',
      color: '#14397d',
      background: 'linear-gradient(20deg, #77b5d9, #d7eaf3, #d7eaf3,#77b5d9)',
      
    },
    logoStyle: {
      position: 'relative',
      fontSize: 'max(2.5vh + 1.7vw)',
      textShadow: ' 2px 2px  rgba(0,0,0,.2)',
      color: '#14397d',
    },
    logoIcon: {
      objectFit: 'contain',
      width: '10vw',
      marginTop: '7px',
      minWidth: '120px'
    },
    extLinks:{
      paddingTop: '2.5vh',
      display: 'flex'
    }
  };

  return (
    <footer style={styles.footerStyle} className="w-100 mt-auto text-dark p-4">
      <div style={styles.extLinks} className='center'>
        <div><a href='https://github.com/DRCallaghan'><FaGithub /></a><a href='https://www.linkedin.com/in/dennis-russell-callaghan/'><FaLinkedin /></a>
          <p>Dennis Callaghan</p>
        </div>
      </div>
      <div style={styles.extLinks} className='center'>
        <div><a href='https://github.com/pbnj1'><FaGithub /></a><a href='https://www.linkedin.com/in/pete-wang-SWE'><FaLinkedin /></a>
          <p>Peter Wang</p>
        </div>
      </div>

      <div className='logo'>
        <img style={styles.logoIcon} src={logo} alt="logo" className="logo" />
        <h4 style={styles.logoStyle}>Carded</h4>
      </div>

      <div style={styles.extLinks} className='center'>
        <div><a  href='https://github.com/Ckratz17'><FaGithub /></a><a href='https://www.linkedin.com/in/christopher-kratz-2a0714247/'><FaLinkedin /></a>
          <p>Chris Kratz</p>
        </div>
      </div>
      <div style={styles.extLinks} className='center'>
        <div ><a href='https://github.com/StevenBolc'><FaGithub /></a><a href='www.linkedin.com/in/StevenBolc'><FaLinkedin /></a>
          <p>Steven Bolcar</p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;