"use client"

import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md text-center">
                <FileQuestion className="w-24 h-24 mx-auto text-muted-foreground mb-6" strokeWidth={1} />
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
                <p className="text-muted-foreground mb-8">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/">
                        <Button>Volver al inicio</Button>
                    </Link>
                    <Link href="/products">
                        <Button variant="outline">Ver productos</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
