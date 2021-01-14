import React,{Component} from 'react';

class Article extends Component {

    render(){
        let priceInfo = isNaN(this.props.price) ? (this.props.price) : (this.props.price + "€");
        return(
            <div className="article">
                <h1>{this.props.name}</h1>
                <span>{priceInfo}</span>
            </div>
        );
    };
}

export default Article;