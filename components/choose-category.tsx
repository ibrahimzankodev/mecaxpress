/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import Image from "next/image";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/category";

const ChooseCategory = () => {
    const { result, loading }: ResponseType = useGetCategories();

    return (
        <div className="max-w-6xl py-8 px-4 mx-auto sm:py-16 sm:px-24 mt-4">
            <h2 className="px-2 sm:px-6 pb-6 sm:pb-8 text-2xl sm:text-3xl font-bold text-center sm:text-left">
                Elige tu categoría favorita
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Categorías de Strapi */}
                {!loading &&
                    result !== undefined && (
                        result.map((category: CategoryType) => (
                            <Link
                                key={category.id}
                                href={`/category/${category.attributes.slug}`}
                                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                                aria-label={`Ver productos de ${category.attributes.categoryName}`}
                            >
                                <img
                                    src={category.attributes.mainImage.data.attributes.url.startsWith('http') ? category.attributes.mainImage.data.attributes.url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${category.attributes.mainImage.data.attributes.url}`}
                                    alt={`Categoría ${category.attributes.categoryName} - Herramientas industriales`}
                                    className="w-full max-w-[270px] mx-auto h-auto transition duration-300 ease-in-out rounded-lg hover:scale-110"
                                    loading="lazy"
                                />
                                <p className="absolute left-0 right-0 py-2 text-base sm:text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                                    {category.attributes.categoryName}
                                </p>
                            </Link>
                        )))}

                {/* Categoría "Todos los productos" */}
                <Link
                    href="/products"
                    className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    aria-label="Ver todos los productos disponibles"
                >
                    <Image
                        src="/imagenes-categorias/ChatGPT Image todos los productos.png"
                        alt="Todos los productos - Catálogo completo de herramientas industriales MecaXpress"
                        width={270}
                        height={270}
                        className="w-full max-w-[270px] mx-auto h-auto transition duration-300 ease-in-out rounded-lg hover:scale-110"
                        priority={false}
                    />
                    <p className="absolute left-0 right-0 py-2 text-base sm:text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                        Todos los productos
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default ChooseCategory;