import React from 'react';

import './about.css';

const aboutUs = [
    {
        title: 'Our Products',
        describtion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi necessitatibus est eius sunt, explicabo optio tenetur!',
        mark: 'https://cdn-icons-png.flaticon.com/512/25/25400.png'
    },
    {
        title: 'We are Professional',
        describtion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi necessitatibus est eius sunt, explicabo optio tenetur!',
        mark: 'https://cdn-icons-png.flaticon.com/512/25/25400.png'

    },
    {
        title: 'Flexible Schedule',
        describtion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi necessitatibus est eius sunt, explicabo optio tenetur!',
        mark: 'https://cdn-icons-png.flaticon.com/512/25/25400.png'
    },
]



const About = () => {
  return (
    <section className='exhibition__about'>
        <section className='exhibition__about-cards'>
           {aboutUs.map(item => (
            <div className='card' key={item.title + item.length}>
                <div className='card__title'>
                    <h3>{item.title}</h3>

                    <div className='card__title-mark-question'>
                       <img src={item.mark} alt={item.title} /> 
                    </div>
                </div>

                <p>{item.describtion}</p>
            </div>
           ))}
        </section>
    </section>
  )
}

export default About