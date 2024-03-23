import React from 'react';
import Fo from './Footer.module.css';

function Footer() {
  return (
    <div >
      <div className={Fo.foot}>
        <h2><i>Contact : csea@kongu.edu</i></h2>
        <p>Contact : Srinath V V (+91 9042967878)</p>
        <p>Contact : Gokulsundar S (+91 7010740253)</p>
         <p><i>© CSEA 2024. All Rights Reserved.<br/>Computer Science and Engineering Association,<br/> Department of Computer Science and Engineering,<br/> Kongu Engineering College</i></p>
         <br/><br/><p>Developed and maintained by <a href='https://calibertech.netlify.app/' style={{color: 'white', textDecoration: 'none'}}>Karthickrajan S<i>(©Caliber Tech)</i></a> , Sharvitha D</p>
      </div>
    </div>
  )
}

export default Footer
