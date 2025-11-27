"use client"
import { useParams } from "next/navigation"
import { useGetProductBySlug } from "@/api/getProductBySlug"
import { ResponseType } from "@/types/response"
import SkeletonProduct from "./components/skeleton-product"
import CaruselProduct from "./components/carusel-product"
import InfoProduct from "./components/info-product"
import NotFoundProduct from "./components/not-found-product"

export default function Page() {
    const params = useParams()
    const { productSlug } = params

    const { result }: ResponseType = useGetProductBySlug(productSlug as string)

    if (result === null) {
        return <SkeletonProduct />
    }

    // Handle product not found
    if (result.length === 0) {
        return <NotFoundProduct />
    }

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-32 px-4 sm:px-12 lg:px-24">
            <div className="grid sm:grid-cols-2">
                <div >
                    <CaruselProduct images={result[0].attributes.images} />
                </div>
                <div className="sm:px-12">
                    <InfoProduct product={result[0]} />
                </div>
            </div>
        </div>
    )
}