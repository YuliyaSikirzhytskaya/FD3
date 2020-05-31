import React from 'react';
import './Rainbow.css';
import RainbowFrame from './RainbowFrame'

class Rainbow extends React.Component {



   
    render() {
    
        let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
        let Hello = "Hello!";
        colors.forEach((item)=>{
            Hello =  <RainbowFrame colors={item}>
                     {Hello}
                    </RainbowFrame>
            })

            return Hello;
    }
  
  }
  
export default Rainbow;