import React from 'react';
import Eo from './Event.module.css';


const Paper = () => {
    return (
        <div className={Eo.func1}>
            <div>
            <h1 className={Eo.func}>Paper Fiesta</h1>
                <p className={Eo.func2}>Welcome to our Paper Presentation event, where knowledge meets innovation and ideas take center stage! Are you ready to showcase your research prowess and make a lasting impact? Join us for an exhilarating journey of exploration, discovery, and intellectual exchange.</p>
                <div className={Eo.div}><button className={Eo.button}><a href="https://forms.gle/d6H85dvnz72YszgJ8" target="_blank" rel="noopener noreferrer"  className={Eo.anti}>Register Now</a></button></div>
                <h2 className={Eo.h2}>Event Details</h2>
                <ul className="list-disc ml-6">
                    <li>Any topic on computer trends.</li>
                    <li>The abstracts will be collected prior to the events and the participants will be shortlisted.</li>
                    <li>Time Slots for presentation will be shared.</li>
                    <li>The evaluation is done through content, domain knowledge, level of organization, and clarity of information.</li>
                </ul>
                <h2 className={Eo.h2}>Guidelines</h2>
                <ul className="list-disc ml-6">
                    <li>Max Members in team: 2</li>
                    <li>Time for presentation: 5 mins (4+1)</li>
                </ul>
                <h2 className={Eo.h2}>Venue and Timing</h2>
                <ul className="list-disc ml-6">
                    <li>Date: 13 April 2024</li>
                    <li>Timing: 9.30 AM to 10.30 AM</li>
                </ul>
                <h2 className={Eo.h2}>Coordinators</h2>
                <ul className="list-decimal ml-6">
                    <li>Keerthana G - +91 9788634145</li>
                    <li>Shivaani J - +91 9047539797</li>
                    <li>Prasanth Raju - +91 8946050246</li>
                </ul>
            </div>
        </div>
    );
}

export default Paper;
