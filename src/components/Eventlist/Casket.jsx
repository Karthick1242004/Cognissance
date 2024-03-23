import React from 'react';
import Eo from './Event.module.css'

const Casket = () => {
    return (
        <div className={Eo.func1}>
            <div className="max-w-4xl p-6">
            <h1 className={Eo.func}>Curiosity Casket</h1>
                <p className={Eo.func2}>Step into a world of fun and excitement with our Fun-tastic Fiesta event! Whether you're a thrill-seeker, a jokester, or simply looking for a good time, this event promises endless laughter, unforgettable memories, and an abundance of joy for everyone involved.</p>
                <div className={Eo.div}><button className={Eo.button}><a href="https://forms.gle/FHwyTkFaPY2feviF7" target="_blank" rel="noopener noreferrer" className={Eo.anti}>Register Now</a></button></div>
                <h2 className={Eo.h2}>Event Details</h2>
                <ul className="list-disc ml-6">
                    <li>A fun-filled event</li>
                </ul>
                <h2 className={Eo.h2}>Guidelines</h2>
                <ul className={Eo.ul}>
                    <li>Max Members in team: 2</li>
                </ul>
                <h2 className={Eo.h2}>Venue and Timing</h2>
                <ul className={Eo.ul}>
                    <li>Date: 13 April 2024</li>
                    <li>Timing: 1.15 pM to 3.00 PM</li>
                </ul>
                <h2 className={Eo.h2}>Coordinators</h2>
                <ul className={Eo.ul}>
                    <li>Keerthana G - +91 9788634145</li>
                    <li>Karthikrajan  - +91 6382682378</li>
                </ul>
            </div>
        </div>
    );
}

export default Casket;
