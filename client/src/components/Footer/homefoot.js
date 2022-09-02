import React from 'react';
import placeholder from '../../images/placeholder.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './footer.css'

const HomeFooter = () => {
  const styles = {
    footerStyle: {
      bottom: '0',
      display: 'flex',
      justifyContent: "space-between",
      height: '20vh',
      fontSize: '2.87vw',
      color: '#14397d',
      background: 'linear-gradient(20deg, #77b5d9, #d7eaf3, #d7eaf3,#77b5d9)',
    },
    logoStyle: {
      position: 'relative',
      paddingTop: '10px',
      paddingBottom: '10px',
      fontSize: 'max(2.5vh + 1.5vw)',
      textShadow: ' 2px 2px  rgba(0,0,0,.2)',
      color: '#14397d',
    },
    logoIcon: {
      objectFit: 'contain',
      width: '10vw',
      marginTop: '7px',
      minWidth: '120px'
    },
  };

  return (
    <footer style={styles.footerStyle} className="w-100 mt-auto text-dark p-4">
      <div className='center'>
        <div><a href='https://github.com/DRCallaghan'><FaGithub /></a><a href='https://www.linkedin.com/in/dennis-russell-callaghan/'><FaLinkedin /></a>
          <p>DRCallaghan</p>
        </div>
      </div>
      <div className='center'>
        <div><a href='https://github.com/pbnj1'><FaGithub /></a><a href='https://www.linkedin.com/in/pete-wang-SWE'><FaLinkedin /></a>
          <p>pbnj1</p>
        </div>
      </div>

      <div className='logo'>
        <img style={styles.logoIcon} src={placeholder} alt="placeholder" className="placeholder" />
        <h4 style={styles.logoStyle}>Carded</h4>
      </div>

      <div className='center'>
        <div><a href='https://github.com/Ckratz17'><FaGithub /></a><a href='https://www.linkedin.com/in/christopher-kratz-2a0714247/'><FaLinkedin /></a>
          <p>Ckratz17</p>
        </div>
      </div>
      <div className='center'>
        <div ><a href='https://github.com/StevenBolc'><FaGithub /></a><a href='www.linkedin.com/in/StevenBolc'><FaLinkedin /></a>
          <p>StevenBolc</p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;