"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

const PageSuccessError = () => {
    const router = useRouter()
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24 ">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center sm:min-w-[400px]">
                    <Image src="/error.png" alt="payment-error" width={250} height={500} className="rounded-lg" />
                </div>

                <div>
                    <h1 className="text-3xl font-semibold text-red-600">El pago no se ha completado</h1>

                    <p className="my-3">
                        Parece que tu transacción no pudo finalizarse correctamente.
                        Esto puede deberse a un error con el método de pago, una cancelación o un problema de conexión.
                    </p>

                    <p className="my-3">
                        Si deseas volver a intentarlo, puedes regresar a la tienda y completar la compra nuevamente.
                        Si el problema persiste, no dudes en ponerte en contacto con nosotros:
                    </p>

                    <p className="my-3">
                        Email: <strong>mecaxpressonline@gmail.com</strong>
                    </p>

                    <p className="mb-6">
                        Teléfono: <strong>+34 612 295 476</strong>
                    </p>

                    <div className="flex gap-3">
                        <Button className="cursor-pointer" onClick={() => router.push('/')}>Volver a la tienda</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageSuccessError
