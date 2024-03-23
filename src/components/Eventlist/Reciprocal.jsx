import React from 'react';
import Eo from './Event.module.css'


const Reciprocal = () => {
    return (
        <div className={Eo.func1}>
            <div className="max-w-4xl p-6">
            <h1 className={Eo.func}>Reciprocal</h1>
                <p className={Eo.func2}>Are you ready to embark on a journey of creativity and innovation? Welcome to our Web Design Showcase event, where imagination knows no bounds, and every pixel tells a story. Whether you're a seasoned designer or a budding enthusiast, this is your chance to shine and leave your mark on the digital landscape.</p>
                <div className={Eo.div}><button className={Eo.button}><a href="https://forms.gle/gMUoXeEgxCNQAQYW7" target="_blank" rel="noopener noreferrer" className={Eo.anti}>Register Now</a></button></div>
                <h2 className={Eo.h2}>Event Details</h2>
                <ul className={Eo.ul}>
                    <li>A figma Design will be given ,the participants have to replicate the same using any technological stack.</li>
                    <li>The evaluation is done through the level of replication done.</li>
                </ul>
                <h2 className={Eo.h2}>Guidelines</h2>
                <ul className={Eo.ul}>
                    <li>It is a solo event.</li>
                    <li>Own laptops should be brought.</li>
                </ul>
                <h2 className={Eo.h2}>Venue and Timing</h2>
                <ul className={Eo.ul}>
                    <li>Date: 13 April 2024</li>
                    <li>Timing: 01.15 PM to 03.00 PM</li>
                </ul>
                <h2 className={Eo.h2}>Coordinators</h2>
                <ul className={Eo.ul}>
                    <li>Karthikrajan  - +91 6382682378</li>
                    <li>Shyam Saran R - +91 8438213467</li>
                </ul>
            </div>
        </div>
    );
}

export default Reciprocal;
