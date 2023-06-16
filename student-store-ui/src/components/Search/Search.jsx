import * as React from "react"
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Search({formData, setFormData, products, setProducts}) {

    function search(event) {
        setFormData(event.target.value);
    }

    function submit (event) {
        event.preventDefault();//so we prevent reloading
        setProducts(
            originalProducts.filter(product => product.name.toLowerCase.includes(formData.toLowerCase()))
        )
    }

    return (
        <form style = {{margin : "20px auto"}}>
        <label htmlFor="search">Search</label>
        <input type = "input" onChangeCapture={(event) => search(event)}/>
        <button onClick={(event) => submit(event)}> Search</button>
      </form>
    )
}