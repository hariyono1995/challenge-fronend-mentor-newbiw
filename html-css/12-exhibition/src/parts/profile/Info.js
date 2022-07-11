import React from 'react';

import './info.css';

const informations = [
    {
        title :  'LOREM IPSUM',
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem soluta illum earum mollitia incidunt voluptatibus, tempora culpa ipsum dolore magnam ipsa ea possimus enim necessitatibus laudantium voluptas optio perferendis nostrum.',
        imageUrl: 'https://placeimg.com/300/300/any',
        cta: 'Check us'
    },
    {
        title :  'LOREM IPSUM',
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem soluta illum earum mollitia incidunt voluptatibus, tempora culpa ipsum dolore magnam ipsa ea possimus enim necessitatibus laudantium voluptas optio perferendis nostrum.',
        imageUrl: 'https://placeimg.com/300/300/any',
        cta: 'Check us'
    },
]

const Info = () => {
  return (
    <section className='exhibition__info'>
        <section className='exhibition__info-cards'>
            {
                informations.map(information => (
                    <div className='card__info' 
                    key={information.title + information.length}>
                        <div className='card__info-image'>
                            <img src={information.imageUrl} alt={information.title} />
                        </div>

                        <div className='card__info-description'>
                            <div className='card__info-description-detail'>
                                <h2>{information.title}</h2>

                                <p style={{lineHeight: '25px'}}>{information.about}</p>
                            </div>
                            
                            <button className='cta__info' type="button"> {information.cta}</button>
                        </div>
                    </div>
                ))
            }
            
        </section>
    </section>
  )
}

export default Info