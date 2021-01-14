import React,{Component} from 'react'
import './App.css';
import Article from './Article';

class App extends Component {
  state = {
    name: "poupouille",
    price: "inestimable"
  }

  render(){

    return(
      <div className="App">
        <h1>Le Magasin de Poupouille et Pimpinou</h1>
        <div className="cards">
          <Article name="Chemise" price={29}></Article>
          <Article name="Pantalon" price={35}></Article>
          <Article name={this.state.name} price={this.state.price}></Article>
        </div>
      </div>
    );
  };
};

export default App;
