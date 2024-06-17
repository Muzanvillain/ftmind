import React from 'react';
import Heading from '../common/heading/Heading';
import './about.css';
import { homeAbout } from '../../dummydata';
import Awrapper from './Awrapper';
import { useHistory } from 'react-router-dom';

const AboutCard = () => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/onlcourses');
  };

  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => (
                <div className='item flexSB' key={val.id} onClick={handleRedirect}>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;