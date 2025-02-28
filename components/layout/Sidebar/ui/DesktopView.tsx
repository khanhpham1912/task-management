// components
import { For } from "@/components/commons"
import Link from "next/link"
import Image from "next/image"

// utils
import { cn } from "@/utils/classNames"

// types
import { MenuItemsType } from "../Sidebar"

// icons
import { Bars3Icon } from "@heroicons/react/24/outline"

interface DesktopViewProps {
  pathname: string
  menuItems: MenuItemsType
  handleOpenSidebar: () => void
}

export const DesktopView = ({
  pathname,
  menuItems,
  handleOpenSidebar,
}: DesktopViewProps) => {
  return (
    <>
      <div className="hidden h-full lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div className="flex h-16 shrink-0 items-center">
            <Image
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              width={32}
              height={32}
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-2">
                  <For each={menuItems}>
                    {(item) => {
                      const isActive = pathname.includes(item.href)
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              isActive
                                ? "bg-gray-50 text-primary"
                                : "text-gray-700 hover:bg-gray-50 hover:text-primary",
                              "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={cn(
                                isActive
                                  ? "text-primary"
                                  : "text-gray-400 group-hover:text-primary",
                                "size-6 shrink-0",
                              )}
                            />
                            {item.name}
                          </Link>
                        </li>
                      )
                    }}
                  </For>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <div
          onClick={handleOpenSidebar}
          className="-m-2.5 cursor-pointer p-2.5 text-gray-700 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </div>
      </div>
    </>
  )
}
