import React from 'react';
import PropTypes from 'prop-types';
import './Edit.css';

class Edit extends React.Component{

  static propTypes = {
    code: PropTypes.number.isRequired,
    count: PropTypes.any.isRequired,
    price: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
  }
  state = {
      code: this.props.code,
      name: this.props.name,
      price: this.props.price,
      URL: this.props.URL,
      count: this.props.count,
      workMode:this.props.workMode,
      stopBlock:true,
  }
  NameChanged=(EO)=>{
      this.setState({name:EO.target.value},this.Validate)
      this.props.cbStop()
  }
  PriceChanged=(EO)=>{
    this.setState({price:EO.target.value},this.Validate)
    this.props.cbStop()
  }
  URLChanged=(EO)=>{
    this.setState({URL:EO.target.value},this.Validate)
    this.props.cbStop()
  }
  CountChanged=(EO)=>{
    this.setState({count:EO.target.value},this.Validate)
    this.props.cbStop()
  }
  Validate = function(){
      var isValid = false
      if (this.state.name =="" || this.state.price =="" || this.state.URL =="" || this.state.count =="")
        {isValid = true}
      else{
        isValid = false;
      } 
      this.setState({stopBlock:isValid});
  }

  Save=(EO)=>{
    if (this.state.name =="" || this.state.price =="" || this.state.URL =="" || this.state.count ==""){return}
    this.props.cbSave(this.state)
  }
  Cancel=(EO)=>{
    this.props.cbCancel()
  }

  render() {
    if (this.props.workMode==1) {
      return (
        <div className={'Edit'}>
          <div>Edit existing Product</div>
          <span>ID:{this.state.code-1}</span>
          <div>
              <span className={'Name'}>{'Name'}</span><input tupe='text' name='nameValue' onChange={this.NameChanged} defaultValue={this.state.name}/>{(this.state.name =="" ) && <span className={'Error'}>{'Please,fill the field.'}</span>}
              </div>
              <div>
              <span className={'Price'}>{'Price'}</span><input tupe='text' name='priceValue' onChange={this.PriceChanged} defaultValue={this.state.price}/>{(this.state.price =="" ) && <span className={'Error'}>{'Please,fill the field.'}</span>}</div>
              <div>
              <span className={'URL'}>{'URL'}</span><input tupe='text' name='URLValue' onChange={this.URLChanged} defaultValue={this.state.URL}/>{(this.state.URL =="" ) && <span className={'Error'}>{'Please,fill the field.'}</span>}</div>
              <div>
              <span className={'Count'}>{'Count'}</span><input tupe='text' name='countValue' onChange={this.CountChanged} defaultValue={this.state.count}/>{(this.state.count =="" ) && <span className={'Error'}>{'Please,fill the field.'}</span>}
          </div>
          <span><input type={'button'} value={'Save'} disabled={this.state.stopBlock} onClick={this.Save}/><input type={'button'} value={'Cancel'} onClick={this.Cancel}/></span>
        </div>
      );
    }
    if (this.props.workMode==2){ 
      return (
        <div className={'Edit'}>
          <div>Add new product</div>
          <span>ID:{this.state.code-1}</span>
          <div>
              <span className={'Name'}>{'Name'}</span><input tupe='text' name='nameValue' onChange={this.NameChanged} defaultValue={''}/>{(this.state.name =="" ) && <span className={'Error'}>{'Please,fill the field.'}</span>}
              </div>
              <div>
              <span className={'Price'}>{'Price'}</span><input tupe='text' name='priceValue' onChange={this.PriceChanged} defaultValue={''}/>{(this.state.price =="" ) && <span className={'Error'}>{'Please,fill the field.'}</span>}</div>
              <div>
              <span className={'URL'}>{'URL'}</span><input tupe='text' name='URLValue' onChange={this.URLChanged} defaultValue={''}/>{(this.state.URL =="" ) && <span className={'Error'}>{'Please,fill the field.'}</span>}</div>
              <div>
              <span className={'Count'}>{'Count'}</span><input tupe='text' name='countValue' onChange={this.CountChanged} defaultValue={''}/>{(this.state.count =="" ) && <span className={'Error'}>{'Please,fill the field.'}</span>}
          </div>
          <span><input type={'button'} value={'Add'} disabled={this.state.stopBlock} onClick={this.Save}/><input type={'button'} value={'Cancel'} onClick={this.Cancel}/></span>
        </div>
      );

    }
    if (this.props.workMode==3){ 
      return (
        <div className={'Edit'}>
          <div>View product</div>
          <span>ID:{this.state.code-1}</span>
          <div>
              <span className={'Name'}>{'Name: '+this.state.name}</span>
          </div>
          <div>
              <span className={'Price'}>{'Price: '+this.state.price}</span>
          </div>
          <div>
              <span className={'URL'}>{'URL: '+this.state.URL}</span>
          </div>
          <div>
              <span className={'Count'}>{'Count: '+this.state.count}</span>
          </div>
        </div>
      );
      
    }
  }
}

export default Edit;