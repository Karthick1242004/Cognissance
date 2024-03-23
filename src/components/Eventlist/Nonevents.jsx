import React from 'react';
import Eo from './Event.module.css'
import { Link } from 'react-router-dom';

function Nonevents() {
  return (
    <div>
        <h1 className={Eo.h1}><span>Non Tech</span> Events</h1>
    <div className={Eo.cardmain1}>
    <div className={Eo.card}>
       <p className={Eo.cardtitle}>Scan and Win</p>
       <p className={Eo.smalldesc}>
       Unravel the mystery and race against time as you decode clues and scan your way to victory. With each scan, uncover thrilling surprises and stake your claim as the ultimate treasure hunter!
       </p>
       <Link to="/scan" className={Eo.reg}>Click to register</Link>
       <div className={Eo.gocorner}>
         <Link to="/scan"><div className={Eo.goarrow}>→</div></Link>
       </div>
    </div>
    <div className={Eo.card}>
      <p className={Eo.cardtitle}>Kollywood</p>
      <p className={Eo.smalldesc}>
         Lights, camera, action! Get ready for a cinematic and spectacle like no other as we bring you "Kollywood Kaleidoscope," a celebration of the vibrant and captivating world of Tamil cinema!
      </p>
      <Link to='/kollywood' className={Eo.reg}>Click to register</Link>
      <div className={Eo.gocorner}>
      <Link to="/kollywood"><div className={Eo.goarrow}>→</div></Link>
      </div>
    </div>
    {/* <div className={Eo.card}>
      <p className={Eo.cardtitle}>White VS Black</p>
      <p className={Eo.smalldesc}>
         Welcome to our Paper Presentation event, where knowledge meets innovation and ideas take center stage! Are you ready to showcase your research prowess and make a lasting impact? Join us for an exhilarating journey of exploration,
         discovery, and intellectual exchange.
      </p>
      <Link to='/chess' className={Eo.reg}>Click to register</Link>
      <div className={Eo.gocorner}>
        <div className={Eo.goarrow}>→</div>
      </div>
    </div> */}
    <div className={Eo.card}>
      <p className={Eo.cardtitle}>Curiosity Casket</p>
      <p className={Eo.smalldesc}>
         Step into a world of fun and excitement with our Fun-tastic Fiesta event! Whether you're a thrill-seeker, a jokester, or simply looking for a good time, this event promises endless laughter, unforgettable memories, and an abundance of joy for everyone involved.
      </p>
      <Link to="/casket" className={Eo.reg}>Click to register</Link>
      <div className={Eo.gocorner}>
      <Link to="/casket"><div className={Eo.goarrow}>→</div></Link>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Nonevents
