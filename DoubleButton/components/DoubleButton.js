import React from 'react';


class DoubleButton extends React.Component {
  
  Pressed =(EO) =>{
    this.props.cbPressed(EO.target.value)
  }
  

  render() {

    let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

    return (
      <div style={{padding:"10px",textAlign:"center", fontSize:"40px"}}>
        <input type={'button'} value={this.props.caption1} onClick={this.Pressed}/>{this.props.children}<input type={'button'} value={this.props.caption2} onClick={this.Pressed}/>
      </div>
    );
  }
}

export default DoubleButton;