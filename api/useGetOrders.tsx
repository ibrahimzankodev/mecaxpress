import { useEffect, useState } from "react";
import { Order } from "@/types/order";

export function useGetOrders(userId: number | undefined, token: string | null) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders?filters[userId][$eq]=${userId}`;
    const [result, setResult] = useState<Order[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!userId || !token) return;

        (async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const json = await res.json();
                setResult(json.data);
                setLoading(false);
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [userId, token, url]);

    return { loading, result, error };
}
