var Ishop = React.createClass({

    displayName: 'Ishop',
  
    getDefaultProps: function() {
      return { info: "Ластик" }
    },
  
    render: function() {
  
      var goodsList=[];

      this.props.goods.forEach(function(item){

         var goodsCode=        
          React.DOM.div({key:item.code,className:'Item'},
            React.DOM.span({className:'Name'},item.name),
            React.DOM.img({src:item.URL},),
            React.DOM.span({className:'Count'},item.count),
            React.DOM.span({className:'Price'},item.price),
          );
        goodsList.push(goodsCode); 
      });

      return React.DOM.div( {className:'Ishop'}, 
        React.DOM.div( {className:'Info'}, this.props.info ),
        React.DOM.div( {className:'Goods'}, goodsList ),
      );
    },
  
  });