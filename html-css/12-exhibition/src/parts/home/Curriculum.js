import React from 'react';

import './curriculum.css';

const curriculums = [
    {
        title: 'Practice Everyday',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animinecessitatibus est eius sunt, explicabo optio tenetur!',
        backgroundImage: 'https://cenzo128.github.io/exhibition.github.io/images/show1.jpg',
        cta: 'More Information'
      
    },
    {
        title: 'Practice Everyday',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animinecessitatibus est eius sunt, explicabo optio tenetur!',
        backgroundImage: 'https://cenzo128.github.io/exhibition.github.io/images/show2.jpg',
        cta: 'More Information'
    }
]

const Curriculum = () => {
  return (
    <section className='exhibition__curriculum'>
        {/* <section className='exhibition__curriculum-cards'> */}
            {
                curriculums.map(curriculum => (
                    <div className='card__curriculum'  style={{backgroundImage: `url(${curriculum.backgroundImage})`}}
                     key={curriculum.title + curriculum.length}
                    >
                        <h3>{curriculum.title}</h3>                    
                        <p>{curriculum.description}</p>

                        <button type="button" className='cta__curriculum'>
                            {curriculum.cta}
                        </button>
                    </div>
                ))
            }
            
        {/* </section> */}
    </section>
  )
}

export default Curriculum