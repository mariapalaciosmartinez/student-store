import * as React from "react"
import "../ProductCard/ProductCard.css"

export default function ProductCard({ product }) {
    return (
        <div style={{ display: 'flex'}}>
        <div className="media"> </div>
                <img className= "small-image" src= {product.image} alt="product cover"></img>
        <div className="product-info"></div>
            <div className="main-info"></div>
                <p className="product-name">{product.name}</p>
                    <div className="stars"></div>
                        <p className="product-price">{product.price}</p>
                    <div className="actions"></div>
                    <div className="buttons"></div>
                    <button className="add">
                     <i className="material-icons">add</i>
                     </button>
                     <button className="remove">
                     <i className="material-icons">remove</i>
                     </button>
                     </div>
    )
}