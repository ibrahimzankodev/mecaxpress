import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/product"
import { Heart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useLovedProducts } from "@/hooks/use-loved-products"
import ProductTasteOrigin from "@/components/shared/product-taste-origin"


export type InfoProductProps = {
    product: ProductType
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props
    const { addItem } = useCart()
    const { addLovedItem, lovedItems } = useLovedProducts()

    const isLoved = lovedItems.some((item) => item.id === product.id)


    return (
        <div className="px-2">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl">
                    {product.attributes.productName}</h1>
                <ProductTasteOrigin taste={product.attributes.taste} origin={product.attributes.origin} />
            </div>
            <Separator className="my-4" />
            <p>{product.attributes.description}</p>
            <Separator className="my-4" />
            <p className="my-4 text-2xl">{formatPrice(product.attributes.price)}</p>
            <div className="flex items-center gap-5">
                <Button
                    className="flex-1 cursor-pointer"
                    onClick={() =>
                        addItem(product)} >
                    Comprar
                </Button>
                <Heart width={30} strokeWidth={1}
                    className={`transition duration-300 cursor-pointer hover:fill-black ${isLoved ? "fill-black" : ""}`} onClick={() => addLovedItem(product)}
                />
            </div>
        </div>
    )
}

export default InfoProduct