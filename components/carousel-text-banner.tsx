"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay';

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envio en 24/48 h",
        description: "Pidelo ya y recibelo en 24/48h Laborales, obtén más información.",
        link: "#!",
    },
    {
        id: 2,
        title: "Consigue hasta un -15% en tu primera compra",
        description: "-5% al gastar 100€ o 15% al gastar 200€, usando el codigo PR1M3R4 COMPR4.",
        link: "#",
    },
    {
        id: 3,
        title: "Devoluciones y entregas a partir de 100€ gratuitas",
        description: "Al hacer una compra superior a 100€ el Envio es GRATUITO.",
        link: "#",
    },
    {
        id: 4,
        title: "Comprar Novedades",
        description: "Accede a la ultimas novedades de MecaXpress!.",
        link: "#",
    },
]


const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div
            className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2500
                    })
                ]}
            >
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, link, description }) => (
                        <CarouselItem
                            key={id}
                            onClick={() => router.push(link)}
                            className="cursor-pointer"
                            aria-label={title}
                        >
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="text-sm sm:text-lg text-wrap dark:text-secondary font-semibold">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary mt-1">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselTextBanner