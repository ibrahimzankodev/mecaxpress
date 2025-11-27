"use client"

import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error("Error boundary caught:", error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md text-center">
                <AlertTriangle className="w-24 h-24 mx-auto text-destructive mb-6" strokeWidth={1} />
                <h1 className="text-4xl font-bold mb-4">¡Algo salió mal!</h1>
                <p className="text-muted-foreground mb-2">
                    Ha ocurrido un error inesperado. Por favor, intenta nuevamente.
                </p>
                {error.message && (
                    <p className="text-sm text-muted-foreground mb-8 font-mono bg-secondary p-3 rounded">
                        {error.message}
                    </p>
                )}
                <div className="flex gap-4 justify-center mt-6">
                    <Button onClick={reset}>
                        Intentar de nuevo
                    </Button>
                    <Button variant="outline" onClick={() => window.location.href = "/"}>
                        Volver al inicio
                    </Button>
                </div>
            </div>
        </div>
    )
}
