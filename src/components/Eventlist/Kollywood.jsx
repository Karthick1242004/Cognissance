import React from 'react';

import Eo from './Event.module.css'
const KollyWood = () => {
    return (
        <div className={Eo.func1}>
            <div className="max-w-4xl p-6">
            <h1 className={Eo.func}>KollyWood</h1>
                <p className={Eo.func2}>Lights, camera, action! Get ready for a cinematic and spectacle like no other as we bring you "Kollywood Kaleidoscope," a celebration of the vibrant and captivating world of Tamil cinema!</p>
                <div className={Eo.div}><button className={Eo.button}><a href="https://forms.gle/EhGxikYe2wkK12No8" target="_blank" rel="noopener noreferrer" className={Eo.anti}>Register Now</a></button></div>
                
                <h2 className={Eo.h2}>Guidelines</h2>
                <ul className="list-disc ml-6">
                    <li>Max Members in team: 2</li>
                </ul>
                <h2 className={Eo.h2}>Venue and Timing</h2>
                <ul className="list-disc ml-6">
                    <li>Date: 13 April 2024</li>
                    <li>Timing: 1.15 PM to 3.00 PM</li>
                </ul>
                <h2 className={Eo.h2}>Coordinators</h2>
                <ul className="list-decimal ml-6">
                    <li>Sharvithaa D- +91 9894149096</li>
                    <li>Sabarnika S - +91 7094358828</li>
                </ul>
            </div>
        </div>
    );
}

export default KollyWood;
