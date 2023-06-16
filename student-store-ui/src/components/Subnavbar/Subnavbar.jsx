import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Subnavbar({ products, searchTerm }) {

  return (
    <div id="Buy" className="product-grid" style={{ width: '100%', background: 'red'}}>
      <div className="content">
        <h3>Best Selling Products?????</h3>
        <ProductGrid products={products}></ProductGrid>
        
      </div>
    </div>
  );
}

