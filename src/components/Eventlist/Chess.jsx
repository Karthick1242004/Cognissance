import React from 'react';
import Eo from './Event.module.css'

const Chess = () => {
    return (
        <div className={Eo.func1}>
            <div className="max-w-4xl p-6">
            <h1 className={Eo.func}>White Vs Black </h1>
                <p className={Eo.func2}>Step into the digital arena and test your strategic prowess in our Virtual Chess Challenge! This exciting online event brings together chess enthusiasts from around the globe for a thrilling competition in the digital realm. </p>
                <div className={Eo.div}><button className={Eo.button}><a href="https://forms.gle/WL3mWS2bvvziLDmw6" target="_blank" rel="noopener noreferrer" className="antialiased">Register Now</a></button></div>
                
                <h2 className={Eo.h2}>Guidelines</h2>
                <ul className={Eo.ul}>
                    <li>Max Members in team: 1</li>
                </ul>
                <h2 className={Eo.ul}>Venue and Timing</h2>
                <ul className="list-disc ml-6">
                    <li>Date: 13 April 2024</li>
                    <li>Timing: 1.15 PM to 3.00 PM</li>
                </ul>
                <h2 className={Eo.ul}>Coordinators</h2>
                <ul className="list-decimal ml-6">
                    <li>Shivaani J - +91 9047539797</li>
                    <li>Vijith - +91 99447 93030</li>
                </ul>
            </div>
        </div>
    );
}

export default Chess;
