import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>{t('Newsletter - Stay tune and get the latest update')}</h1>
            <span>{t('Far far away, behind the word mountains')}</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder={t('Enter email address')} />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>{t('FUTURE MIND')}</h1>
            <span>{t('ONLINE EDUCATION & LEARNING')}</span>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>{t('Explore')}</h3>
            <ul>
              <li>{t('About Us')}</li>
              <li>{t('Services')}</li>
              <li>{t('Courses')}</li>
              <li>{t('Blog')}</li>
              <li>{t('Contact us')}</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>{t('Quick Links')}</h3>
            <ul>
              <li>{t('Contact Us')}</li>
              <li>{t('Pricing')}</li>
              <li>{t('Terms & Conditions')}</li>
              <li>{t('Privacy')}</li>
              <li>{t('Feedbacks')}</li>
            </ul>
          </div>
          <div className='box'>
            <h3>{t('Recent Post')}</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>{t('Have a Questions?')}</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                {t('RELIZANE')}
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                {t('+213 778984637')}
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                {t('chaima@gmail.com')}
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          {t('Copyright ©2022 All rights reserved | This template is made with')} <i className='fa fa-heart'></i> {t('by chaima')}
        </p>
      </div>
    </>
  );
};

export default Footer;
