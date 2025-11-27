"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { registerUser } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const registerSchema = z.object({
    username: z.string()
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .max(20, "El nombre de usuario no puede tener más de 20 caracteres")
        .regex(/^[a-zA-Z0-9_]+$/, "Solo letras, números y guiones bajos"),
    email: z.string().email("Correo electrónico inválido"),
    password: z.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
        .regex(/[a-z]/, "Debe contener al menos una minúscula")
        .regex(/[0-9]/, "Debe contener al menos un número"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        setLoading(true);

        try {
            const res = await registerUser({
                username: data.username,
                email: data.email,
                password: data.password
            });

            if (res.error) {
                toast.error(res.error.message || "Error al registrarse");
            } else {
                login(res.user, res.jwt);
                toast.success("Registro exitoso");
                router.push("/dashboard");
            }
        } catch (error) {
            toast.error("Ocurrió un error al registrarse");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md dark:bg-secondary">
            <h1 className="text-2xl font-bold mb-6 text-center">Registrarse</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Label htmlFor="username">Nombre de Usuario</Label>
                    <Input
                        id="username"
                        type="text"
                        {...register("username")}
                        placeholder="Tu nombre de usuario"
                        className={errors.username ? "border-red-500" : ""}
                    />
                    {errors.username && (
                        <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>
                    )}
                </div>
                <div>
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="tu@email.com"
                        className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                        id="password"
                        type="password"
                        {...register("password")}
                        placeholder="********"
                        className={errors.password ? "border-red-500" : ""}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                        Mínimo 8 caracteres, incluye mayúscula, minúscula y número
                    </p>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Cargando..." : "Registrarse"}
                </Button>
            </form>
            <p className="mt-4 text-center text-sm">
                ¿Ya tienes cuenta?{" "}
                <Link href="/login" className="text-blue-600 hover:underline dark:text-blue-400">
                    Inicia sesión aquí
                </Link>
            </p>
        </div>
    );
}
