import React from 'react';

import OurTeam from 'parts/profile/OurTeam';
import Info from 'parts/profile/Info';
import './profile.css';

const Profile = () => {
  return (
    <div className='exhibition__profile'>
        <OurTeam />
        <Info />
    </div>
  )
}

export default Profile