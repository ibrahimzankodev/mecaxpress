// import { useEffect, useState } from "react"

// export function useGetCategoryProduct(slug: string | string[]) {
//     const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`
//         const [result, setResult] = useState(null)
//         const [loading, setLoading] = useState(true)
//         const [error, setError] = useState('')
    
//         useEffect(() => {
//             (async () => {
//                 try {
//                     const res = await fetch(url)
//                     const json = await res.json()
//                     setResult(json.data)
//                     setLoading(false)
//                 } catch (error: any) {
//                     setError(error)
//                     setLoading(false)
//                 }
//             })()
//         }, [url])
    
//         return { loading, result, error }
// }

import { useEffect, useState } from "react"

export function useGetCategoryProduct(slug: string) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`
    
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!slug) return;  // Evita llamar al API con "undefined"

        (async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResult(json.data)
                setLoading(false)
            } catch (err: any) {
                setError(err.message)
                setLoading(false)
            }
        })()
    }, [url, slug])

    return { loading, result, error }
}
