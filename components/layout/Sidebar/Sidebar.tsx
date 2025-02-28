"use client"

// components
import { DesktopView, MobileView } from "./ui"

// hooks
import { useBoolean } from "@/hooks"
import { usePathname } from "next/navigation"

// icons
import {
  HomeIcon,
  ListBulletIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Board", href: "/board", icon: UsersIcon },
  { name: "List", href: "/list", icon: ListBulletIcon },
]
export type MenuItemsType = typeof menuItems

export const Sidebar = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname()

  const {
    value: isShowSidebar,
    setTrue: openSidebar,
    setValue: onChangeShowSidebar,
  } = useBoolean(false)

  return (
    <div className="relative flex h-screen flex-col lg:flex-row">
      <MobileView
        pathname={pathname}
        menuItems={menuItems}
        isShowSidebar={isShowSidebar}
        handleChangeShowSidebar={onChangeShowSidebar}
      />
      <DesktopView
        pathname={pathname}
        menuItems={menuItems}
        handleOpenSidebar={openSidebar}
      />

      <main className="flex flex-grow flex-col">{children}</main>
    </div>
  )
}
