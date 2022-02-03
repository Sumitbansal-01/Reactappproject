import React from 'react';

export default function Footer() {

  let mystyle = {
      width: '100%',
      height: 'auto',
      position: 'absolute',
      bottom: '0% auto',
      color: 'white',

  }
  return (
      <>
      <div className="footer text-center border-light border-top bg-dark  " style={mystyle}>
        <p>Copyright &copy; tooDOO.com</p>
      </div>
      
      </>
      
  );
}
