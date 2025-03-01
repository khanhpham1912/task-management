import { InputDebounced } from "@/components/commons"
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/outline"
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Selection,
} from "@heroui/react"
import { statusOptions } from "../../constant"

interface FiltererProps {
  searchValue: string
  onSearchChange: (value: string) => void
  statusFilter?: Selection
  handleChangeFilterStatus: (keys: Selection) => void
  handleCreateTask: () => void
}

export const Filterer = ({
  searchValue,
  onSearchChange,
  statusFilter,
  handleChangeFilterStatus,
  handleCreateTask,
}: FiltererProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <InputDebounced
          isClearable
          classNames={{
            base: "min-w-[15rem] max-w-[50%] lg:max-w-[44%]",
            inputWrapper: "border-1 bg-white",
          }}
          placeholder="Search by name..."
          size="sm"
          startContent={
            <MagnifyingGlassIcon className="size-4 text-default-400" />
          }
          value={searchValue}
          variant="bordered"
          onChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<ChevronDownIcon className="size-4" />}
                size="sm"
                variant="flat"
              >
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              closeOnSelect={false}
              selectedKeys={statusFilter || "all"}
              selectionMode="multiple"
              onSelectionChange={handleChangeFilterStatus}
            >
              {statusOptions.map((status) => (
                <DropdownItem key={status.key} className="capitalize">
                  {status.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button
            color="primary"
            startContent={<PlusIcon className="size-4 text-background" />}
            size="sm"
            onPress={handleCreateTask}
          >
            New
          </Button>
        </div>
      </div>
    </div>
  )
}
