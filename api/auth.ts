import { User } from "@/types/user";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function registerUser(data: any) {
    const url = `${BACKEND_URL}/api/auth/local/register`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
}

export async function loginUser(data: any) {
    const url = `${BACKEND_URL}/api/auth/local`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
}

export async function getMe(token: string) {
    const url = `${BACKEND_URL}/api/users/me`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const json = await response.json();
    return json;
}
