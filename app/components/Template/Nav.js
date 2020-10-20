import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Justin R. Wong</h2>
        <p><a href="mailto:justinryanwong@berkeley.edu">justinryanwong@berkeley.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey there! I&apos;m Justin. I loving learning about new technology.
        I am a <a href="https://eecs.berkeley.edu/academics/undergraduate/cs-ba">UC Berkeley</a> fourth year undergrad,
        majoring in Computer Science and minoring in Energy and Resources.
        I also completed the <a href="https://scet.berkeley.edu/">SCET&apos;s</a> Certificate in Entrepreneurship and Technology.
        I am currently seeking meaningful, high-impact
        full-time opportunities in Software Engineering, Machine Learning.
        Previously, I have been involved at <a href="https://www.tesla.com/">Tesla</a>,
        <a href="https://scet.berkeley.edu/"> Sutardja Center for Entrepreneurship & Technology</a>,
        <a href="https://xcelerator.berkeley.edu/">Berkeley Blockchain Xcelerator</a>,
        <a href="https://engineering.berkeley.edu/"> UC Berkeley College of Engineering</a>,
        <a href="https://kto.hkbu.edu.hk/bootcamp/"> HKBU</a>, and
        <a href="https://www.ssf.net/departments/parks-recreation">SSF Parks and Recreation</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Justin R. Wong <Link to="/">justinryanwong.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
