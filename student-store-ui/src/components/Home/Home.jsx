import * as React from "react"
import ProductGrid from '../ProductGrid/ProductGrid';
import { useState } from 'react';
import Search from "../Search/Search";

export default function Home({products, setProducts}) {

  const [formData, setFormData] = useState();

//   function handleOnClick(event) {
//     event.preventDefault();
//     props.handleSearch();
// }

  return (
    <div className="home" style={{overflow: "scroll"}}>
      {/* <Search
      formData= {formData}
      products={products}
      setProducts={setProducts}
      ogProducts= {originalProducts}
      setForData={setformData}
      /> */}
    </div>
  )
}