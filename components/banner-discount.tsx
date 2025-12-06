import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Mail, MessageCircle } from "lucide-react"

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-xl sm:text-2xl text-primary">¡Contacta con nosotros!</h2>
            <p className="mt-3 font-semibold text-sm sm:text-base px-4">A traves de Correo Electronico o por WhatsApp</p>

            <div className="max-w-md mx-auto sm:flex justify-center gap-4 sm:gap-8 mt-5 flex-col sm:flex-row space-y-3 sm:space-y-0">
                <Link href="mailto:mecaxpressonline@gmail.com" className={buttonVariants()} aria-label="Correo Electronico">
                    <Mail className="mr-2 h-4 w-4" />
                    Correo Electronico
                </Link>
                <Link
                    href="https://wa.me/612295476"
                    className={buttonVariants({ variant: "outline" })}
                    style={{ backgroundColor: '#25d366', color: 'white', borderColor: '#25d366' }}
                    aria-label="WhatsApp"
                >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                </Link>
            </div>

        </div>
    )
}

export default BannerDiscount