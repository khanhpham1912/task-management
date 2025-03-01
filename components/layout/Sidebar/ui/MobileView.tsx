// components
import { Drawer, DrawerBody, DrawerContent } from "@heroui/react"
import { For } from "@/components/commons"
import Link from "next/link"

// types
import { MenuItemsType } from "../Sidebar"

// utils
import { cn } from "@/utils/classNames"

interface MobileViewProps {
  pathname: string
  menuItems: MenuItemsType
  isShowSidebar: boolean
  handleChangeShowSidebar: (isOpen: boolean) => void
}

export const MobileView = ({
  pathname,
  menuItems,
  isShowSidebar,
  handleChangeShowSidebar,
}: MobileViewProps) => {
  return (
    <Drawer
      hideCloseButton
      isOpen={isShowSidebar}
      onOpenChange={handleChangeShowSidebar}
      size="xs"
      placement="left"
    >
      <DrawerContent>
        {() => (
          <DrawerBody className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex items-center justify-center pt-6 text-3xl font-bold text-primary">
              PMS
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
          </DrawerBody>
        )}
      </DrawerContent>
    </Drawer>
  )
}
