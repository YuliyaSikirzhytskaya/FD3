import React from 'react';
import DoubleButton from './DoubleButton';
import { withColorBackground } from './withColorBackground';



class FramedDoubleButton extends React.Component {
  

  render() {

    let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    let FramedDoubleButtonTwo=withColorBackground(colors)(DoubleButton);

    return (
      <div>
        <DoubleButton caption1={'в лесу'} caption2={'ёлочка'} children={'родилась'} cbPressed={ num => alert(num) }
        />
        <FramedDoubleButtonTwo caption1={'в лесу'} caption2={'росла'} children={'она'} cbPressed={ num => alert(num) }/>
      </div>
    );
  }
}

export default FramedDoubleButton;