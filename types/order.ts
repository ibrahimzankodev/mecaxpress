export type Order = {
    id: number;
    documentId: string;
    clientName: string;
    address: string;
    phone: string;
    email: string;
    totalAmount: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    orderItems: OrderItem[];
};

export type OrderItem = {
    id: number;
    productName: string;
    quantity: number;
    price: number;
};
