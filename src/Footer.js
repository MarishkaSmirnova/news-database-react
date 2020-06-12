import React from 'react';
import './App.css';
import CurrentYear from './CurrentYear';

class Footer extends React.Component {
    render() {
      return  (
      <div>
  
        <div className='footer '>
        	<p>© Marina Smirnova, <CurrentYear/> </p>	
        </div>
  
      </div>
      );
       
    }
  }
  export default Footer;
