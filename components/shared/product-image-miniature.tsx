/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";

interface ProductImageMiniatureProps {
    slug: string;
    url: string;
    alt: string;
}

const ProductImageMiniature = ({ slug, url, alt }: ProductImageMiniatureProps) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/product/${slug}`)} className="cursor-pointer w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-md shrink-0">
            <img src={url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

export default ProductImageMiniature;
