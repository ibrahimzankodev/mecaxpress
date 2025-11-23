import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ProductType } from '@/types/product'
import { toast } from 'sonner'

interface UseLovedProductsType {
    lovedItems: ProductType[]
    addLovedItem: (product: ProductType) => void
    removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(persist<UseLovedProductsType>(
    (set, get) => ({
        lovedItems: [],
        addLovedItem: (product: ProductType) => {
            const currentLovedItem = get().lovedItems
            const existingItem = currentLovedItem.find((item) => item.id === product.id)

            if (existingItem) {
                toast.error('El producto ya existe en favoritos 💖')
                return
            }
            set({ lovedItems: [...get().lovedItems, product] })
            toast.success('Producto agregado a favoritos ❤️')
        },
        removeLovedItem: (id: number) => {
            set({ lovedItems: [...get().lovedItems.filter((item) => item.id !== id)] })
            toast.success('Producto eliminado de favoritos 💔')
        },
    }), {
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage)
}
))