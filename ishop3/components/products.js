import React from 'react';
import PropTypes from 'prop-types';
import './products.css';

class Products extends React.Component{

  static propTypes = {
    code: PropTypes.number.isRequired,
    count: PropTypes.any.isRequired,
    price: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
    cbSelected: PropTypes.func.isRequired,
    selectedProductCode: PropTypes.number,
  }

  productClicked = () => {
    if (this.props.workMode==2 || this.props.stopBlock || this.props.code==1){return}
    
    this.props.cbSelected(this.props.code,3);
  }

  delete = () => {
    if (this.props.workMode==2 || this.props.stopBlock){return}
    if (confirm("Вы уверены?")){
      this.props.cbDelete(this.props.code,0);
    }
  }

  Edit = () => {
    if (this.props.workMode==2 || this.props.stopBlock){return}

    this.props.cbEdit(this.props.code, 1);
  }

  render() {
    return <div className={this.props.selectedProductCode==this.props.code?'red':'white'}>
        <span className={'Name'} onClick={this.productClicked}>{this.props.name}</span>
        <span className={'Price'} onClick={this.productClicked}>{this.props.price}</span>
        <span className={'URL'} onClick={this.productClicked}>{this.props.URL}</span>
        <span className={'Count'} onClick={this.productClicked}>{this.props.count}</span>
        {(this.props.control)?<span className={'Control'}>{this.props.control}</span>:<span className={'Control'}><input type={'button'} value={'Edit'} disabled={this.props.stopBlock} onClick={this.Edit}/><input type={'button'} value={'Delete'} disabled={this.props.stopBlock} onClick={this.delete}/></span>}
    </div>
}}

export default Products;