var Ishop2 = React.createClass({

    displayName: 'Ishop2',

    propTypes: {
       goods:React.PropTypes.arrayOf(
        React.PropTypes.shape({
            code: React.PropTypes.number.isRequired,
            count: React.PropTypes.any.isRequired,
            price: React.PropTypes.any.isRequired,
            name: React.PropTypes.string.isRequired,
            URL: React.PropTypes.string.isRequired,
        })
       ) 
    },
    getInitialState: function() {
        return { 
          selectedProductCode: 0,
          stateGoods:this.props.goods,
        };
      },

    productSelected: function(code) {
        this.setState( {selectedProductCode:code} );
      },
    
    deleteProduct: function(code){
      this.setState({stateGoods:this.state.stateGoods.filter(item => item.code !== code)})

    },
  
    render: function() {
  
      var goodsList=this.state.stateGoods.map(
          v=> React.createElement(products,{
              key:v.code,name:v.name, count:v.count, code:v.code,price:v.price,URL:v.URL,control:v.control,
              cbSelected:this.productSelected,
              cbDelete:this.deleteProduct,
              selectedProductCode:this.state.selectedProductCode,
          })
      );

      return React.DOM.div( {className:'Ishop'}, 
        React.DOM.div( {className:'Goods'}, goodsList ),
      );
    },
  
  });