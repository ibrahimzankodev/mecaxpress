"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

const PageSuccess = () => {
    const router = useRouter()
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24 ">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center sm:min-w-[400px]">
                    <Image src="/success.png" alt="success" width={250} height={500} className="rounded-lg" />
                </div>

                <div>
                    <h1 className="text-3xl">¡Gracias por tu compra!</h1>
                    <p className="my-3">
                        Tu pedido ha sido procesado correctamente y ya estamos preparando todo para enviártelo lo antes posible. En breve recibirás un correo con los detalles de tu pedido y la información de seguimiento. Si tienes cualquier duda, nuestro equipo de atención al cliente está disponible para ayudarte.
                    </p>
                    <p className="my-3">
                        Para cualquier Consulta o Duda escribenos a: mecaxpressonline@gmail.com.
                    </p>

                    <p>
                        o llamanos al numero: +34612295476
                    </p>

                    <Button className="cursor-pointer" onClick={() => router.push('/')}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    )
}

export default PageSuccess