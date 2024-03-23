import Eo from './Event.module.css';

const MindScape =()=>
{
    return(
        <div className={Eo.func1}>
        <div className="max-w-4xl p-6">
        <h1 className={Eo.func}>MindScape</h1>
            <p className={Eo.func2}>Are you ready to put your technical prowess to the test? Welcome to our exhilarating Technical Quiz event, where intellect meets competition and knowledge reigns supreme. Join us for an electrifying experience as we challenge your understanding of the technological landscape.</p>
            <div className={Eo.div}><button className={Eo.button}><a href="https://forms.gle/LtAVRWjTJFvM1PkJ9" target="_blank" rel="noopener noreferrer" className={Eo.anti}>Register Now</a></button></div>
           
            <h2 className={Eo.h2}>Guidelines</h2>
            <ul className={Eo.ul}>
                <li>Max Members in team: 2</li>
            </ul>
            <h2 className={Eo.h2}>Venue and Timing</h2>
            <ul className={Eo.ul}>
                <li>Date: 13 April 2024</li>
                <li>Timing: 10.45 AM to 12.30 PM</li>
            </ul>
            <h2 className={Eo.h2}>Coordinators</h2>
            <ul className={Eo.ul}>
                <li>Sharvithaa D - +91 9894149096</li>
                <li>Samvardhani D - +91 9487183168</li>
            </ul>
        </div>
    </div>
    )
}
export default MindScape;
