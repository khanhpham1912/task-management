import React from "react"

// components
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
} from "@heroui/react"
import { For, InputDebounced } from "@/components/commons"

// icons
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline"

// hooks
import { useTaskTable } from "./logic"

const columns = [
  { name: "Title", uid: "title" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
]

const statusOptions = [
  {
    name: "All",
    uid: "all",
  },
  {
    name: "Todo",
    uid: "todo",
  },
  {
    name: "In Progress",
    uid: "inprogress",
  },
  {
    name: "Done",
    uid: "done",
  },
]

export const TaskTable = () => {
  const {
    tasks,
    searchValue,
    page,
    pages,
    hasSearchFilter,
    statusFilter,
    setStatusFilter,
    setPage,
    renderCell,
    onSearchChange,
    handleClickRow,
  } = useTaskTable()

  const topContent = React.useMemo(() => {
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
              <MagnifyingGlassIcon className="size-6 text-default-400" />
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
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={(keys) => setStatusFilter(new Set(keys))}
              >
                <For each={statusOptions}>
                  {(status) => (
                    <DropdownItem key={status.uid} className="capitalize">
                      {status.name}
                    </DropdownItem>
                  )}
                </For>
              </DropdownMenu>
            </Dropdown>
            <Button
              className="bg-foreground text-background"
              startContent={<PlusIcon className="size-4 text-background" />}
              size="sm"
            >
              New
            </Button>
          </div>
        </div>
      </div>
    )
  }, [searchValue, statusFilter, onSearchChange, tasks.length, hasSearchFilter])

  const bottomContent = React.useMemo(() => {
    return (
      <div className="flex items-center justify-end px-2 py-2">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
      </div>
    )
  }, [page, pages, hasSearchFilter])

  return (
    <Table
      isCompact
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: [
          "max-h-[calc(100vh-13rem)]",
          "lg:max-h-[calc(100vh-9rem)]",
          "w-full",
          "overflow-scroll",
          "p-0",
        ],
        th: ["bg-white", "text-default-500", "border-b", "border-divider"],
        td: [
          // changing the rows border radius
          // first
          "group-data-[first=true]/tr:first:before:rounded-none",
          "group-data-[first=true]/tr:last:before:rounded-none",
          // middle
          "group-data-[middle=true]/tr:before:rounded-none",
          // last
          "group-data-[last=true]/tr:first:before:rounded-none",
          "group-data-[last=true]/tr:last:before:rounded-none",
        ],
      }}
      topContent={topContent}
      topContentPlacement="outside"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No tasks"} items={tasks}>
        {(task) => (
          <TableRow key={task.id} onClick={() => handleClickRow(task)}>
            {(columnKey) => (
              <TableCell>{renderCell(task, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
