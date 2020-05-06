var Filter = React.createClass({

    displayName: 'Filter',

    propTypes:{
        words: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                text: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
            })
        ),
        deffreeanswertext: React.PropTypes.string,
    },

    getInitialState: function() {
        return {
          words:this.props.words,
          deffreeanswertext:this.props.deffreeanswertext,
          checked:false,
          filtered:'',
        };
      },

    check: function(EO) {

        this.setState({checked:EO.target.checked},this.modifyArray)

    },

    modifyArray: function(){
        let result = this.props.words;
        if(this.state.filtered != ''){
            result = result.filter(item => item.text.indexOf(this.state.filtered) != -1)
        }
        else{
            result = result.slice();
        }
        if(this.state.checked){
            result = result.sort( (a, b) => a.text > b.text ? 1:-1 );
        }

        this.setState({words:result})
    },
    
    freeAnswerTextChanged: function(EO) {  
    this.setState({filtered:EO.target.value},this.modifyArray)
    },

    drop: function() {
        this.setState({checked:false,filtered:''},this.modifyArray)
    },

    render: function() {

        var filterList=[];

        this.state.words.forEach(function(word){

            var wordsCode=
             React.DOM.div({key:word.code,className:'Word'},word.text);
             filterList.push(wordsCode);
        });

        return React.DOM.div( {className:'Filter'},
            React.DOM.div( {className:'Menu'},
                React.DOM.input({type:'checkbox',checked:this.state.checked,name:'check',onClick:this.check}),
                React.DOM.input({type:'text',name:'filtertext',className:'FilterText',value:this.state.filtered,onChange:this.freeAnswerTextChanged}),
                React.DOM.input( {type:'button',value:'сброс',onClick:this.drop} )
                ),
            
            
            React.DOM.div( {className:'List'},filterList),

        );
    },
});