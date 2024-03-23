import React from 'react';
import No from './News.module.css';

function News() {
  return (
    <div className={No.newsletter} id='newsl'>
        <div className={No.h11}>
           <h1 className={No.nh}> NewsLetters </h1>
        </div>
        <div className={No.nc1}>
             <div className={No.nc}>
                 <h1>Edition 1</h1>
                 <p>Scriptus Connect is your ultimate companion for staying updated on departmental news, exploring placement statistics, and gaining valuable insights from placement experiences. Whether you're a student, faculty member, or industry professional, this newsletter is tailored to meet your needs in the dynamic world of computer science.</p>
                 <a className={No.aa} href='https://heyzine.com/flip-book/89de0d11cf.html'>Click To View</a>
             </div>
             <div className={No.nc}>
                 <h1>Edition 2</h1>
                 <p>Discover the latest developments within the department, including curriculum enhancements, research initiatives, and faculty achievements. Dive into comprehensive placement statistics, including job placement rates, average salaries, and top recruiting companies, to help you make informed career decisions.</p>
                 <a className={No.aa} href='https://heyzine.com/flip-book/688be030e3.html'>Click To View</a>
             </div>
             <div className={No.nc}>
                 <h1>Edition 3</h1> 
                 <p>Additionally, gain valuable insights from firsthand placement experiences shared by fellow students and alumni. Learn about interview tips, internship experiences, and career pathways to enhance your professional journey as a engineering student and gain immense knowledge on trending companies for placement oppurtunities</p>
                 <a className={No.aa} href='https://heyzine.com/flip-book/d68baab6f2.html'>Click To View</a>
             </div>
        </div>
    </div>
  )
}

export default News





