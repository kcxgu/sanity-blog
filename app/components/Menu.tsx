"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    pathname: "/",
    name: "Home",
  },
  {
    pathname: "/how-to",
    name: "How-To",
  },
  {
    pathname: "/archive",
    name: "Archive",
  },
  {
    pathname: "/about",
    name: "About",
  },
]

const Menu = () => {
  const path = usePathname();

  return (
    <div className="py-4 border-b flex flex-row items-center justify-center gap-4">
      {menuItems.map((item, i) =>
        <Link
          className={`${path === item.pathname && "text-orange-600 underline underline-offset-8 decoration-2"}`}
          key={i}
          href={item.pathname}
        >
          {item.name}
        </Link>
      )}
    </div>
  )
}

export default Menu