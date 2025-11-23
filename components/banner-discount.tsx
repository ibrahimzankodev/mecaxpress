import Link from "next/link"
import { buttonVariants } from "./ui/button"

const BannerDiscount= () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">Consigue hasta un -15%</h2>
            <h3 className="mt-3 font-semibold">-5% al gastar 100€ o 15% al gastar 200€. Usa el codigo PR1M3R4 COMPR4 (solo en tu primera compra)</h3>

        <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
            <Link href="#" className={buttonVariants()}>Comprar</Link>
            <Link href="#" className={buttonVariants({ variant: "outline" })}>Más informacion</Link>
        </div>

        </div>
    )
}

export default BannerDiscount