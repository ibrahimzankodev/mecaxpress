"use client"

import { useGetAllProducts } from "@/api/getAllProducts"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import SkeletonSchema from "@/components/ui/skeletonSchema"
import ProductCard from "../category/[categorySlug]/components/product-card"
import { ProductType } from "@/types/product"
import { useState } from "react"
import FiltersControlsCategory from "../category/[categorySlug]/components/filters-controls-category"

export default function ProductsPage() {
    const { result, loading }: ResponseType = useGetAllProducts()
    const [filterOrigin, setFilterOrigin] = useState('')
    const [filterTaste, setFilterTaste] = useState('')

    const filteredProducts = result !== null && !loading && (
        result.filter((product: ProductType) => {
            if (filterOrigin === '' && filterTaste === '') {
                return true
            }

            let positionFilter = true
            let tasteFilter = true

            if (filterOrigin !== '') {
                positionFilter = product.attributes.origin === filterOrigin
            }

            // if (filterTaste !== '') {
            //     tasteFilter = product.attributes.taste === filterTaste
            // }

            return positionFilter && tasteFilter
        })
    )

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h1 className="text-3xl font-medium">Todos los productos</h1>
            <Separator />

            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory setFilterOrigin={setFilterOrigin} setFilterTaste={setFilterTaste} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 mt-8 md:grid-cols-3 md:gap-10">
                {loading && (
                    <SkeletonSchema grid={3} />
                )}
                {filteredProducts !== null && !loading && (
                    filteredProducts.map((product: ProductType) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
                {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                    <p>No hay productos con este filtro</p>
                )}
            </div>
        </div>
    )
}
