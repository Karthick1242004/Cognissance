import React from 'react';
import Eo from './Event.module.css'


const Scan = () => {
    return (
        <div className={Eo.func1}>
            <div className="max-w-4xl p-6">
            <h1 className={Eo.func}>Scan and Win</h1>
                <p className={Eo.func2}>Welcome to the thrilling adventure of our Treasure Hunt event! Are you ready to embark on an exhilarating journey filled with clues, puzzles, and hidden treasures waiting to be discovered?</p>
                <div className={Eo.div}><button className={Eo.button}><a href="https://forms.gle/RaHFUgtPs9AkVko38" target="_blank" rel="noopener noreferrer" className={Eo.anti}>Register Now</a></button></div>
                <h2 className={Eo.h2}>Event Details</h2>
                <ul className={Eo.ul}>
                    <li>Varoius clues are kept around capmpus.</li>
                    <li>Scan the QR and find the treasure.</li>
                </ul>
                <h2 className={Eo.h2}>Guidelines</h2>
                <ul className="list-disc ml-6">
                    <li>Max Members in team: 3</li>
                </ul>
                <h2 className={Eo.h2}>Venue and Timing</h2>
                <ul className="list-disc ml-6">
                    <li>Date: 13 April 2024</li>
                    <li>Timing: 8.45 AM to 10.00 AM</li>
                </ul>
                <h2 className={Eo.h2}>Coordinators</h2>
                <ul className="list-decimal ml-6">
                    <li>Kirithyashree - +91 8438005578</li>
                    <li>Chandru  - +91 95663 08639</li>
                </ul>
            </div>
        </div>
    );
}

export default Scan;
