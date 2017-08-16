import React, { Component } from 'react';

class Detail extends Component {

    render() {
        return (
            <div>
               <img className='detailImage' src={this.props.productImage} /> 
               <p>${ this.props.productPrice }.00</p>
               <button onClick={() => this.props.addToCart(this.props.productPrice) }>Add to Cart</button>
            </div>
        )
    }
}

export default Detail;