import React from 'react';


const HomeFooter = () => {
  const styles = {
    footerStyle: {
        background: '#d7eaf3',
        height: '12vh',
        position: 'fixed',
        bottom: '0'
        
        
    },
    logoStyle: {
      fontSize: '2.87vw',
      color: '#14397d'
    },
  };


  return (
    <footer style={styles.footerStyle} className="w-100 mt-auto text-dark p-4">
      <div style={styles.logoStyle} className="container text-center mb-5">
      
        <h4>&copy; {new Date().getFullYear()} - Tech Friends</h4>
      </div>
    </footer>
  );
};

export default HomeFooter;