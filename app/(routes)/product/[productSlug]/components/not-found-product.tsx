"use client"

import { Button } from "@/components/ui/button"
import { PackageX } from "lucide-react"
import { useRouter } from "next/navigation"

const NotFoundProduct = () => {
    const router = useRouter()

    return (
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-32 text-center">
            <div className="flex flex-col items-center gap-6">
                <PackageX className="w-24 h-24 text-muted-foreground" strokeWidth={1} />
                <h1 className="text-3xl sm:text-4xl font-bold">Producto no encontrado</h1>
                <p className="text-lg text-muted-foreground max-w-md">
                    Lo sentimos, el producto que buscas no existe o ha sido eliminado.
                </p>
                <div className="flex gap-4 mt-4">
                    <Button onClick={() => router.push("/products")} variant="default">
                        Ver todos los productos
                    </Button>
                    <Button onClick={() => router.push("/")} variant="outline">
                        Volver al inicio
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundProduct
