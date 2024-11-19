import React from 'react'

import Logo from '../assets/Logo.jpg'

export default function NavBarDefault() {
  return (
    <>
      <nav style={{ display:'flex',flexDirection:'row', backgroundColor: 'black', height: '80px' , alignItems:'center'}} >
        <div className='left-align' style={{ display: 'flex',margin:'10px', height:'60px',width:'60px'}}>
          <img src={Logo} alt="CRYPTOX" />
        </div>
        <div className='centre-align' style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', gap: '20px'}}>
          <a href="/" style={styles.navlink}>Home</a>
          <a href="#" style={styles.navlink}>Cryptocurrency</a>
        </div>

        <div className='right-align' style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', gap: '20px'}}>
          <a href="#" style={styles.navlink}>Login/SignUp</a>
          
        </div>

      </nav>
    </>
  )
}

const styles={
  navlink:{
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 20px',
    transition: 'color 0.3s, background-color 0.3s',
  }
};

const hoverstyle=document.createElement('style');
hoverstyle.innerHTML= `
a:hover {
  color: #ff9900;   /* Change to any highlight color */
    background-color: #333; /* Highlight background on hover */
    border-radius: 5px;    /* Rounded corners on hover */
}
    `
;

document.head.appendChild(hoverstyle);


