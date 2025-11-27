"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

const AboutPage = () => {
    const router = useRouter()

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4">Sobre Nosotros</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Tu socio confiable en herramientas industriales y maquinaria de alta precisión.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Nuestra Historia</h2>
                    <p className="text-muted-foreground">
                        Fundada con la visión de proporcionar herramientas de calidad industrial a profesionales y empresas, MecaToolsXpress se ha convertido en un referente en el sector. Nos especializamos en maquinaria de precisión, herramientas de corte y equipamiento para talleres.
                    </p>
                    <p className="text-muted-foreground">
                        Nuestro compromiso es ofrecer productos duraderos y eficientes que ayuden a nuestros clientes a alcanzar la excelencia en sus proyectos.
                    </p>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-secondary/20">
                    {/* Placeholder for an image - using a colored div for now if no image available, 
                        but using Next.js Image component structure for when an image is added */}
                    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                        <span className="text-muted-foreground font-medium">Imagen de Taller / Empresa</span>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 mb-16">
                <div className="p-6 bg-secondary/30 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-3">Calidad Garantizada</h3>
                    <p className="text-sm text-muted-foreground">
                        Trabajamos solo con las mejores marcas y proveedores para asegurar la máxima calidad en cada herramienta.
                    </p>
                </div>
                <div className="p-6 bg-secondary/30 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-3">Envío Rápido</h3>
                    <p className="text-sm text-muted-foreground">
                        Entendemos la urgencia de tu trabajo. Por eso ofrecemos envíos rápidos en 24/48 horas.
                    </p>
                </div>
                <div className="p-6 bg-secondary/30 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-3">Soporte Experto</h3>
                    <p className="text-sm text-muted-foreground">
                        Nuestro equipo técnico está disponible para asesorarte en la elección de la herramienta adecuada.
                    </p>
                </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-8 sm:p-12 text-center">
                <h2 className="text-2xl font-bold mb-4">¿Listo para equipar tu taller?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Explora nuestro catálogo completo y encuentra las herramientas que necesitas para llevar tu trabajo al siguiente nivel.
                </p>
                <div className="flex justify-center gap-4">
                    <Button className="cursor-pointer" onClick={() => router.push('/products')} size="lg">
                        Ver Catálogo
                    </Button>
                    <Button className="cursor-pointer" onClick={() => router.push('/')} variant="outline" size="lg">
                        Volver al Inicio
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
