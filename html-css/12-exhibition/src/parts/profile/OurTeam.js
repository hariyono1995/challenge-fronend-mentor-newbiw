import React from 'react';

import './ourTeam.css';

const profileUsers = [
    {
        name :  'User Name',
        position: 'Front End',
        about: 'Lorem ipsum is a dummy text',
        imageUrl: 'https://placeimg.com/300/300/any'
    },
    {
        name :  'User Name',
        position: 'Front End',
        about: 'Lorem ipsum is a dummy text',
        imageUrl: 'https://placeimg.com/300/300/any'
    },
    {
        name :  'User Name',
        position: 'Front End',
        about: 'Lorem ipsum is a dummy text',
        imageUrl: 'https://placeimg.com/300/300/any'
    },
]

const OurTeam = () => {
  return (
    <section className='exhibition__ourteam'>
        <h1>Our Team</h1>
        <section className='exhibition__ourteam-cards'>

        {
            profileUsers.map(profileUser => (
                <div className='card__ourteam' key={profileUser + profileUser.length}>
                    <div className='card__ourteam-profile'>
                        <img src={profileUser.imageUrl} alt={profileUser.name}  />
                    </div>
                    
                    <h3 style={{marginTop: 30}}>{profileUser.name}</h3>

                    <span>{profileUser.position}</span>

                    <p>{profileUser.about}</p>

                </div>
            ))
        }
            
        </section>
    </section>
  )
}

export default OurTeam