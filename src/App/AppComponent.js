import React, {Component} from 'react';

  class App extends Component {
    state = {
      loading: true
    };
   constructor(){
        super();
        this.state = {items: []}
      }

      componentDidMount(){
        setTimeout(() => this.setState({ loading: false }), 1500);
      }
//fetching the json data list
      componentWillMount(){
        fetch( 'pizza.json' )
          .then( response => response.json() )
          .then( ({pizzas: items}) =>this.setState({items}))} 
         filter(e){
        this.setState({filter: e.target.value})
      }

      filter(e){
        this.setState({filter: e.target.value})
                }
//sorting the pizzas items 
      sortItems(){
  let items = this.state.items;
  items.sort(function(a,b){
   if(a.toLowerCase()<b.toLowerCase()) return 1;
   else if(a.toLowerCase()>b.toLowerCase()) return -1;
   else return 0
  });
  this.setState({items}); 
     }
  render(){
        const { loading } = this.state;
    if(loading) { 
      return null; // render null when app is not ready
    }
    //filter the items
        let items = this.state.items;
        if(this.state.filter){
          items = items.filter( item =>
            item.toLowerCase()
            .includes(this.state.filter.toLowerCase()))
        }
        return (
          <div style={pstyle}>
            <input type="text" style={istyle}
            onChange={this.filter.bind(this)}/>
            
            <button onClick={this.sortItems.bind(this)} style={bstyle}>Sort</button>
            {items.map(item =>
            <h4 key={item} style={hstyle}>{item}</h4>  
              )}
          </div> 
        )
      }
    }
    const list = (pizza) => <h4>{pizza.list}</h4>

//inline-styles//
    var pstyle = {
      background:'#DEB887',
      padding: "10px",
      margin: "20px",
      
    };
    var hstyle = {
      border:'1px solid gray',
      padding:'8px',
      width:'50%',
    };
    var istyle ={
    width:'50%',
    padding:'5px',
    
    };
    var bstyle ={
      padding:'7px',
      width:'10%'
    };

    export default App;
