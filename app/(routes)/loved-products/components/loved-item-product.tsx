/* eslint-disable @next/next/no-img-element */

import { ProductType } from "@/types/product"
import { useLovedProducts } from "@/hooks/use-loved-products"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import ProductTasteOrigin from "@/components/shared/product-taste-origin"
import ProductImageMiniature from "@/components/shared/product-image-miniature"

interface LovedItemProductProps {
    product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props
    const router = useRouter()
    const { removeLovedItem } = useLovedProducts()
    const { addItem } = useCart()

    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }


    return (
        <li className="flex py-6 border-b">
            <ProductImageMiniature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url} alt={product.attributes.productName} />
            <div className="flex justify-between flex-1 px-6">

                <div>
                    <h2 className="text-lg font-bold">{product.attributes.productName}</h2>
                    <p className="font-bold">{formatPrice(product.attributes.price)}</p>
                    <ProductTasteOrigin taste={product.attributes.taste} origin={product.attributes.origin} />
                    <Button className="mt-5 rounded-full" onClick={() => addToCheckout()}>Añadir al carrito</Button>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md hover:scale-110 transition cursor-pointer")}>
                        <X size={20}
                            onClick={() => removeLovedItem(product.id)}
                        />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default LovedItemProduct