import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './links.css'

const Links = ({links, wrapStyle, classname}) => {

  let[hovered, setHovered] = useState(false);
  let indexKey = 0;

  return (
    <div style={wrapStyle && (wrapStyle)}>
        {(links || []).map(itemLink => (
          <Link to={itemLink.linkTo ? (itemLink.linkTo ): ('#')
          }
         
          key={`${itemLink.title ? itemLink.title + indexKey++ : indexKey++}`}
          // onMouseEnter={()=>{  
          //   setHovered(true);
             
            
          // }}
          // onMouseLeave={()=>{
          //   setHovered(false);
          // }}
          // className={hovered? classname : '' }
          >
            {itemLink.imageURL !== null &&  (<img src={itemLink?.imageURL} alt='' style={{width: `${itemLink.width}`}} />)}

            {itemLink.title}
          </Link> 
        ))}
    </div>
  )
}


export default Links