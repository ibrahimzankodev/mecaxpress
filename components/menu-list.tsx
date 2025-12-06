"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useAuth } from "@/hooks/use-auth"



const MenuList = () => {
  const { user } = useAuth()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Accede</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      MecaToolsXpress
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Sumergete en la Pagina Web de MecaToolsXpress y encuentra lo que necesitas.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href={user ? "/dashboard" : "/login"} title="Cuenta">
                Accede a tu informacion, pedidos y mucho más.
              </ListItem>
              <ListItem href="/products" title="Productos">
                Todos nuestros Productos.
              </ListItem>
              <ListItem href="/category/productos-varios" title="Accesorios">
                Productos Varios...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>

          {/* <NavigationMenuTrigger>Productos</NavigationMenuTrigger> */}

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Accesorios
            </NavigationMenuLink>
            </Link> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
  // {
  //   title: "Placas",
  //   href: "/plaquitas/torno",
  //   description:
  //     "Todos los modelos de placas para torno.",
  // },
  // {
  //   title: "Fresas de Metal Duro",
  //   href: "/fresas/MetalDuro",
  //   description:
  //     "Todos los modelos de Fresas de Metal Duro.",
  // },
  // {
  //   title: "Brocas de Metal Duro",
  //   href: "/Brocas/MetalDuro",
  //   description:
  //     "Todos los modelos de brocas de Metal Duro.",
  // },
  // {
  //   title: "Fresas de Cobalto",
  //   href: "/fresas/Cobalto",
  //   description:
  //     "Todos los modelos de fresas de Cobalto.",
  // },
  // {
  //   title: "Brocas de Cobalto",
  //   href: "/Brocas/Cobalto",
  //   description:
  //     "Todos los modelos de brocas de Cobalto",
  // },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
