"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { useAuth } from "@/hooks/use-auth";

const Footer = () => {
    const { user } = useAuth();

    const dataFooter = [
        {
            id: 1,
            name: "Sobre nosotros",
            link: "/sobre-nosotros"
        },
        {
            id: 2,
            name: "Productos",
            link: "#"
        },
        {
            id: 3,
            name: "Mi cuenta",
            link: user ? "/dashboard" : "/login"
        },
        {
            id: 4,
            name: "Politica de privacidad",
            link: "/politicas"
        },
    ];

    return (
        <footer className="mt-8 border-t">
            <div className="w-full max-w-7xl mx-auto p-4 py-6 lg:py-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold">
                            MecaToolsXpress
                        </span>
                    </div>

                    <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link href={data.link} className="hover:underline transition-colors">
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Separator className="my-6 border-gray-200 dark:border-gray-700" />

                <div className="text-sm text-gray-500 text-center dark:text-gray-400">
                    &copy; 2025{' '}
                    <Link href={"#"} className="hover:underline font-semibold">
                        MecaToolsXpress
                    </Link>
                    . Todos los derechos reservados
                </div>
            </div>
        </footer>
    );
}

export default Footer;