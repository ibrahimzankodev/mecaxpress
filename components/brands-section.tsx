import Image from "next/image";
import Link from "next/link";

const brands = [
    {
        name: "Dasqua",
        image: "/images/brands/dasqua.png",
        url: "#", // Placeholder link
    },
    {
        name: "Iscar",
        image: "/images/brands/iscar.png",
        url: "#",
    },
    {
        name: "Dormer Pramet",
        image: "/images/brands/dormer-pramet.png",
        url: "#",
    },
    {
        name: "Kennametal",
        image: "/images/brands/kennametal.png",
        url: "#",
    },
    {
        name: "Palbit",
        image: "/images/brands/palbit.png",
        url: "#",
    },
    {
        name: "Sandvik",
        image: "/images/brands/sandvik.png",
        url: "#",
    },
    {
        name: "Smoxh",
        image: "/images/brands/smoxh.png",
        url: "#",
    },
    {
        name: "Seco",
        image: "/images/brands/seco.png",
        url: "#",
    },
    {
        name: "Sumitomo",
        image: "/images/brands/sumitomo.png",
        url: "#",
    },
];

const BrandsSection = () => {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
                    Algunas de las Marcas que ofrecemos
                </h2>

                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                    {brands.map((brand) => (
                        <div
                            key={brand.name}
                            className="group relative flex items-center justify-center p-3 rounded-xl bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 border border-neutral-800 hover:border-neutral-700 aspect-square shadow-md hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="relative w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    width={100}
                                    height={100}
                                    className="object-contain max-w-full max-h-full p-1"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
