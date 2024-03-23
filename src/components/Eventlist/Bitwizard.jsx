import React from 'react';
import Eo from './Event.module.css';

const BitWizard= () => {
    return (
        <div className={Eo.func1}>
            <div className="max-w-4xl p-6">
            <h1 className={Eo.func}>BitWizard</h1>
                <p className={Eo.func2}>Only for the mentioned departments: AUTO, CHEM, CIVIL, EEE, ECE, EIE, FT, MECH and MTS.Get ready for the coding challenge of a lifetime in Bit Realm! It's not just about code; it's a test of your problem-solving skills, algorithmic finesse, and coding prowess. This is your chance to shine.</p>
                <div className={Eo.div}><button className={Eo.button}><a href="https://forms.gle/gqMbUr9ZFedBRdJu5" target="_blank" rel="noopener noreferrer" className={Eo.anti}>Register Now</a></button></div>
                <h2 className={Eo.h2}>Guidelines</h2>
                <ul className={Eo.ul}>
                  <li>Individual programming event </li>
                   <li>7 Levels of programming will be given to solve in 90 mins</li>
                   <li>Based of first-come-first-serve basis</li>
                </ul>
                <h2 className={Eo.h2}>Venue and Timing</h2>
                <ul className={Eo.ul}>
                    <li>Date: 13 April 2024</li>
                    <li>Timing: 10.45 AM to 12.30 PM</li>
                </ul>
                <h2 className={Eo.h2}>Coordinators</h2>
                <ul className={Eo.ul}>
                    <li>Kavin P - +91 6369838362 </li>
                    <li>Yusvanth - +91 8072293990</li>
                    <li>Gokulsundar S - +91 7010740253 </li>
                </ul>
            </div>
            </div>
    );
}

export default BitWizard;
