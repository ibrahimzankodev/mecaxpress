import Link from "next/link"
import { buttonVariants } from "./ui/button"

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-xl sm:text-2xl text-primary">Consigue hasta un -15%</h2>
            <p className="mt-3 font-semibold text-sm sm:text-base px-4">-5% al gastar 100€ o 15% al gastar 200€. Usa el codigo PR1M3R4 COMPR4 (solo en tu primera compra)</p>

            <div className="max-w-md mx-auto sm:flex justify-center gap-4 sm:gap-8 mt-5 flex-col sm:flex-row space-y-3 sm:space-y-0">
                <Link href="/products" className={buttonVariants()} aria-label="Ir a la tienda para comprar">Comprar</Link>
                <Link href="#" className={buttonVariants({ variant: "outline" })} aria-label="Más información sobre descuentos">Más información</Link>
            </div>

        </div>
    )
}

export default BannerDiscount