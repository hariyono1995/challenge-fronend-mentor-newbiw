import React from 'react';

import Links from 'components/Links';
import './footer.css';

const schedule = [
  {
    title: "Monday",
    imageURL: ''
  },
  {
    title: "Tuesday",
    imageURL: ''
  },
  {
    title: "Wednesday",
    imageURL: ''
  },
  {
    title: "Thursday",
    imageURL: ''
  },
  {
    title: "Friday",
    imageURL: ''
  },
  {
    title: "Saturday",
    imageURL: ''
  },
  {
    title: "Sunday",
    imageURL: ''
  }
]

const styleSchedule = {
  display: 'flex',
  flexDirection: 'column',
  gap: 5

}

const links = [
  {
    // title : 'facebook',
    imageURL : 'https://cenzo128.github.io/exhibition.github.io/images/facebook.png',
    width: 3.5 + 'rem'

  },
  {
    // title : 'facebook',
    imageURL : 'https://cenzo128.github.io/exhibition.github.io/images/twitter.png',
    width: 3.5 + 'rem'
  },
  {
    // title : 'linkedin',
    imageURL : 'https://cenzo128.github.io/exhibition.github.io/images/linkedin.png',
    width: 3.5 + 'rem'
  },
]

const styleLink = {
  display: 'flex',
  flexDirection: 'column',
}

const Footer = () => {
  return (
    <footer className='exhibition__footer'>
      <section className='exhibition__footer-content'>
        <div className='exhibition__footer-content-item'>
          <h1>Schedule</h1>

          <Links links={schedule} 
          wrapStyle={styleSchedule}
          />
        </div>

      <div className='exhibition__footer-content-items'>
        
        <div className='exhibition__footer-content-item'>
          <h1>News</h1>

          <h4>Breaking News</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi necessitatibus est eius sunt, explicabo optio tenetur!</p>
        </div>

        <div className='exhibition__footer-content-item' style={{marginLeft: 40}}>
          <h1>Links</h1>
        <Links 
         links={links}
         wrapStyle={styleLink}
        />
        </div>

      </div>

      </section>

      <section className='exhibition__footer-copyright'>
        Copyright by Hari
      </section>
    </footer>
  )
}

export default Footer