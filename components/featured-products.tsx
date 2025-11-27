/* eslint-disable @next/next/no-img-element */
"use client"

import { ResponseType } from "@/types/response";
import { useGetFeaturedProducts } from "../api/useGetFeaturedProducts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./ui/skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./ui/icon-button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";

const FeaturedProducts = () => {
    const { result, loading }: ResponseType = useGetFeaturedProducts()
    const router = useRouter()
    const { addItem } = useCart()

    return (
        <div className="max-w-6xl py-8 px-4 mx-auto sm:py-16 sm:px-24">
            <h2 className="px-2 sm:px-6 pb-6 sm:pb-8 text-2xl sm:text-3xl font-bold text-center sm:text-left">Productos Destacados</h2>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {result !== null && (
                        result.map((product: ProductType) => {
                            const { attributes, id } = product
                            const { slug, images, productName, taste, origin } = attributes

                            // Skip products without images
                            if (!images?.data || images.data.length === 0 || !images.data[0]?.attributes?.url) {
                                return null;
                            }

                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group h-full">
                                    <div className="p-1 h-full">
                                        <Card className="py-4 border border-gray-200 shadow-none h-full flex flex-col">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                <Image
                                                    src={images.data[0].attributes.url.startsWith('http') ? images.data[0].attributes.url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`}
                                                    alt={`${productName} - ${taste} ${origin}`}
                                                    width={300}
                                                    height={300}
                                                    className="object-contain"
                                                />
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-6">
                                                        <IconButton
                                                            onClick={() => router.push(`product/${slug}`)}
                                                            icon={<Expand size={20} />}
                                                            className="text-gray-600"
                                                            aria-label={`Ver detalles de ${productName}`}
                                                        />
                                                        <IconButton
                                                            onClick={() => addItem(product)}
                                                            icon={<ShoppingCart size={20} />}
                                                            className="text-gray-600"
                                                            aria-label={`Añadir ${productName} al carrito`}
                                                        />
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="flex justify-between gap-4 px-8 mt-auto">
                                                <h3 className="text-lg font-bold min-h-14 flex items-center">{productName}</h3>
                                                <div className="flex items-center justify-between gap-3 shrink-0">
                                                    <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{taste}</p>
                                                    <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">{origin}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )

                        })
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    );
}

export default FeaturedProducts;