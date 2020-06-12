import React from 'react';


const imageStyle = {
    width:'400px',
   height: '300px'
}
const Image = (props) => {
    return(
         <img style={imageStyle}
            className = "newsitem1"
            src={props.url}
            alt={props.title} />
    )
}

  export default Image;