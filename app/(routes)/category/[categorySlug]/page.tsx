"use client"

import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import FiltersControlsCategory from "./components/filters-controls-category"
import SkeletonSchema from "@/components/ui/skeletonSchema"
import ProductCard from "./components/product-card"
import { ProductType } from "@/types/product"
import { useState } from "react"

export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug as string)
    const [filterOrigin, setFilterOrigin] = useState('')
    const [filterTaste, setFilterTaste] = useState('')
    const router = useRouter()



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
            {result !== null && !loading && (
                <h1 className="text-3xl font-medium">{result[0].attributes.category.data.attributes.categoryName}</h1>
            )}
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
