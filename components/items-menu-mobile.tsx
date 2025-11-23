import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Menu } from "lucide-react";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/fresas" className="block">Fresas</Link>
                <Link href="/categories/Placas" className="block">Placas</Link>
                <Link href="/categories/Brocas" className="block">Brocas</Link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile 