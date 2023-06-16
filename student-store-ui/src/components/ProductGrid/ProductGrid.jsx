import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products}) {
    return (
        <div>
            {products?.map((product, i) => (
            <ProductCard key={i} product={product} />
            ))}
        </div>
    )
}

// export function FilteredProductGrid({products, targetString}) {
//     return (
//         <div>
//             {products?.map((product, i) => (
//             product.includes(targetString) ? <ProductCard key={i} products={product} /> : null
//             ))}
//         </div>
//     )
// }

export function CategorizedProductGrid({products, category}) {
    return (
        <div>
            {products?.map((product, i) => (
            product.category.includes(category) ? <ProductCard key={i} products={product} /> : null
            ))}
        </div>
    )
}