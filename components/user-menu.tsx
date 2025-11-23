"use client";

import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenu = () => {
    const router = useRouter();
    const { user, logout } = useAuth();

    if (!user) {
        return (
            <User
                strokeWidth="1"
                className="cursor-pointer"
                onClick={() => router.push("/login")}
            />
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <User strokeWidth="1" className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                    Perfil y Pedidos
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                    logout();
                    router.push("/");
                }}>
                    Cerrar Sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserMenu;
