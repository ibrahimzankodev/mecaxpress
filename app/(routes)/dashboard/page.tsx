"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGetOrders } from "@/api/useGetOrders";
import { formatPrice } from "@/lib/utils";
import OrderSkeleton from "./components/order-skeleton";
import { Package } from "lucide-react";

export default function DashboardPage() {
    const { user, token, logout } = useAuth();
    const router = useRouter();
    const { result: orders, loading, error } = useGetOrders(user?.id, token);

    useEffect(() => {
        if (!user || !token) {
            router.push("/login");
        }
    }, [user, token, router]);

    if (!user) return null;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6">
            <h1 className="text-3xl font-bold mb-6">Mi Cuenta</h1>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8 dark:bg-secondary">
                <h2 className="text-xl font-semibold mb-4">Información Personal</h2>
                <p><strong>Usuario:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button
                    onClick={() => {
                        logout();
                        router.push("/");
                    }}
                    className="mt-4 text-red-600 hover:underline"
                >
                    Cerrar Sesión
                </button>
            </div>

            <h2 className="text-2xl font-bold mb-4">Mis Pedidos</h2>

            {loading && (
                <div className="space-y-4">
                    <OrderSkeleton />
                    <OrderSkeleton />
                    <OrderSkeleton />
                </div>
            )}

            {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
                    <p className="text-red-600 dark:text-red-400">Error al cargar pedidos. Por favor, intenta de nuevo.</p>
                </div>
            )}

            {!loading && !error && orders && orders.length === 0 && (
                <div className="bg-secondary/50 rounded-lg p-12 text-center">
                    <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" strokeWidth={1} />
                    <p className="text-lg text-muted-foreground">No has realizado ningún pedido aún.</p>
                    <button
                        onClick={() => router.push("/products")}
                        className="mt-4 text-blue-600 hover:underline dark:text-blue-400"
                    >
                        Explorar productos
                    </button>
                </div>
            )}

            <div className="space-y-4">
                {orders && orders.map((order) => (
                    <div key={order.id} className="bg-white p-6 rounded-lg shadow-md border dark:bg-secondary">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="font-semibold">Pedido #{order.id}</p>
                                <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                            <p className="font-bold text-lg">{formatPrice(order.totalAmount)}</p>
                        </div>
                        <div className="border-t pt-4">
                            <h3 className="text-sm font-semibold mb-2">Productos:</h3>
                            <ul className="space-y-2">
                                {order.orderItems && order.orderItems.map((item) => (
                                    <li key={item.id} className="flex justify-between text-sm">
                                        <span>{item.productName} x {item.quantity}</span>
                                        <span>{formatPrice(item.price)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
