import React from 'react';
import './BucketList.css';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { bucketThunkAC } from "../redux/bucketFetchThunk";
import BucketInfo from "./BucketInfo";
import {BucketErase} from "./BucketLoader"
import { NavLink } from 'react-router-dom';
import {voteEvents} from '../components/events';

class BucketList extends React.Component {
  
  static propTypes = {
    bucket: PropTypes.object.isRequired,
  };


  state = {
    reload: false,
    info: "",
    valid: false
  };

  onInfoFilled = (EO) => { 
    if(EO.target.value !="")
    {
      this.setState({info:EO.target.value, valid:true})
    }else{
      this.setState({info:EO.target.value, valid:false})
    }
  }

  componentDidMount() {
    this.props.dispatch( bucketThunkAC(this.props.dispatch));
  }

  payTheBill = (EO) => {
    this.props.bucket.data.forEach(el => {
      BucketErase(el.id);
    });
    voteEvents.emit("clearState",true);
  }

  render() {

    if ( this.props.bucket.status<=1 )
      return "загрузка...";

    if ( this.props.bucket.status===2 )
      return "ошибка загрузки данных";

    
    var totalPrice = 0;
    this.props.bucket.data.forEach(el => {
      totalPrice += Math.round(parseFloat(el.price).toFixed(2) * el.count*100)/100;
    });
    var bucketList = this.props.bucket.data.map((bucketInfo) => <BucketInfo name={bucketInfo.name} key={bucketInfo.id} id={bucketInfo.id} count={bucketInfo.count} price={bucketInfo.price} />)

    if(totalPrice > 0){
    return (
      <div>
        <div className="BucketListDefault">
          <div className="BucketHeaders">Название</div>
          <div className="BucketHeaders">Количество</div>
          <div className="BucketHeaders">Цена</div>
        </div>
        {bucketList}
      <div className="Total">Всего: {Math.round(parseFloat(totalPrice).toFixed(2)*100)/100 + " руб."}</div>
      <div className="ContactInfo">
        <div className="PayButtonDiv">Введите контактную информацию: <input type='text' name='mobile' className='mobile' defaultValue={this.state.info} onChange={this.onInfoFilled}/></div>
        {(this.state.valid)&&
        <div className="PayButtonDiv"><NavLink to="/" exact><input className="BucketPayButton" type={'button'} value={'Заказать'} onClick={this.payTheBill}/></NavLink></div>
        }
        </div>
      </div>
    )}
    else{
      return (
        <div>
          <div className="BucketListDefault">
            <div className="BucketHeaders">Корзина пуста</div>
          </div>
        </div>
    )}
  }
}

const mapStateToProps = function (state) {
  return {
    bucket: state.bucket,
  };
};

export default connect(mapStateToProps)(BucketList);