import React from 'react';
import PropTypes, { func } from 'prop-types';
import './ishop3.css';
import Products from './products';
import Edit from './Edit';

class Ishop3 extends React.Component {

  static propTypes = {
    goods:PropTypes.arrayOf(
      PropTypes.shape({
          code: PropTypes.number.isRequired,
          count: PropTypes.any.isRequired,
          price: PropTypes.any.isRequired,
          name: PropTypes.string.isRequired,
          URL: PropTypes.string.isRequired,
      })
    ),
  }
  state = {
    selectedProductCode: 0,
    stateGoods:this.props.goods,
    workMode:0,
    EditComp:null,
    StopBlock:false,
  }
  productSelected = (code,workMode) => {
    let EditP= this.state.stateGoods.find(item => item.code == code)
  this.state.EditComp = <Edit key={EditP.code} 
                              name={EditP.name} 
                              count={EditP.count} 
                              code={EditP.code} 
                              price={EditP.price} 
                              URL={EditP.URL} 
                              workMode={workMode}/>
    this.setState( {selectedProductCode:code,workMode:workMode} );
  }

  deleteProduct = (code) =>{ 
    this.setState({stateGoods:this.state.stateGoods.filter(item => item.code !== code)})
  }
  
  EditProduct = (code, mode) =>{
  let EditP= this.state.stateGoods.find(item => item.code == code)
  this.state.EditComp = <Edit key={EditP.code} 
                              name={EditP.name} 
                              count={EditP.count} 
                              code={EditP.code} 
                              price={EditP.price} 
                              URL={EditP.URL}
                              cbStop={this.Stop} 
                              cbSave={this.SaveProduct} 
                              cbCancel={this.CancelEdit}
                              workMode={1}/>
  this.setState({EditComp: this.state.EditComp,workMode:mode})
  }

  Stop =()=>{
    this.setState({StopBlock:true})
  }

  SaveProduct= (editP) =>{
    if (editP.workMode==1){
      this.state.stateGoods = this.state.stateGoods.map(val => 
      (val.code == editP.code) ?
        {name:editP.name, price:editP.price, count:editP.count, URL:editP.URL, code:editP.code} :val )}
    else{
      this.state.stateGoods.push({name:editP.name, price:editP.price, count:editP.count, URL:editP.URL, code:editP.code})
    }

    this.setState({stateGoods:this.state.stateGoods,workMode:0,StopBlock:false })
  }
  CancelEdit =() =>{
    this.setState({workMode:0,selectedProductCode:0,StopBlock:false})
  }
  NewButton =() =>{
    if (this.state.StopBlock){return}

    let newCode=this.state.stateGoods[this.state.stateGoods.length-1].code+1;
    this.state.EditComp = <Edit key={newCode}
                                code={newCode}
                                name={""} 
                              count={""}
                              price={""} 
                              URL={""} 
                              cbSave={this.SaveProduct} 
                              cbCancel={this.CancelEdit}
                              workMode={2}/>
  this.setState({workMode:2,selectedProductCode:0})
  }
  render() {
  
    var goodsList=this.state.stateGoods.map(
        v=> 
        <Products 
            key={v.code} name={v.name} count={v.count} code={v.code} price={v.price} URL={v.URL} control={v.control}
            cbSelected={this.productSelected}
            cbDelete={this.deleteProduct}
            cbEdit={this.EditProduct}
            stopBlock={this.state.StopBlock}
            selectedProductCode={this.state.selectedProductCode}
            workMode={this.state.workMode}
       />
      
    );
    if(this.state.workMode==0){
    return( 
      <div className='General'>
        <div className='Ishop'>
          <div className='Goods'>{goodsList}</div>
        </div>
        <div className='NewButton'><input type={'button'} value={'New Product'} onClick={this.NewButton}/></div>
      </div>
    );}
    else {
      return( 
        <div className='General'>
        <div className='Ishop'>
          <div className='Goods'>{goodsList}</div>
        </div>
        <div className='NewButton'><input type={'button'} value={'New Product'} onClick={this.NewButton}/></div>
        <div className='EditComp'>{this.state.EditComp}</div>
      </div>
      );
    }
  }

}

  export default Ishop3;