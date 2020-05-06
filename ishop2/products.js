var products = React.createClass({

    displayName: 'products',

    propTypes: {
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.any.isRequired,
        price: React.PropTypes.any.isRequired,
        name: React.PropTypes.string.isRequired,
        URL: React.PropTypes.string.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        selectedProductCode: React.PropTypes.number,
     },
     

     productClicked: function(EO) {
        this.props.cbSelected(this.props.code);
      },

    delete: function(EO) {
      if (confirm("Вы уверены?")){
        this.props.cbDelete(this.props.code);
      }
    },

    render: function() {
        return React.DOM.div({className:this.props.selectedProductCode==this.props.code?'red':'white',onClick:this.productClicked},
            React.DOM.span({className:'Name'},this.props.name),
            React.DOM.span({className:'Price'},this.props.price),
            React.DOM.span({className:'URL'},this.props.URL),
            React.DOM.span({className:'Count'},this.props.count),
            this.props.control
            ?React.DOM.span({className:'Control'},this.props.control)
            :React.DOM.span({className:'Control'},React.DOM.input({type:'button',value:'Delete',onClick:this.delete}))
          );
    },

});