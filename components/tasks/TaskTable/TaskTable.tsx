import React from "react"

// components
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
} from "@heroui/react"

// icons

// hooks
import { useTaskTable } from "./logic"
import { TaskModal } from "../TaskModal"
import { columns } from "../constant"
import { Filterer } from "./ui"

export const TaskTable = () => {
  const {
    tasks,
    page,
    statusFilter,
    selectedTask,
    showTaskModal,
    isLoading,
    handleChangeFilterStatus,
    setPage,
    renderCell,
    onSearchChange,
    handleClickRow,
    handleCreateTask,
    handleShowTaskModalChange,
  } = useTaskTable()

  const bottomContent = React.useMemo(() => {
    return (
      <div className="flex items-center justify-end px-2 py-2">
        <Pagination
          showControls
          color="primary"
          page={page}
          total={1}
          variant="light"
          onChange={setPage}
        />
      </div>
    )
  }, [page])

  return (
    <>
      <Table
        isCompact
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        rowHeight={70}
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
        topContent={
          <Filterer
            onSearchChange={onSearchChange}
            statusFilter={statusFilter}
            handleChangeFilterStatus={handleChangeFilterStatus}
            handleCreateTask={handleCreateTask}
          />
        }
        topContentPlacement="outside"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              width={column.width}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={"No tasks"}
          items={tasks}
          loadingContent={<Spinner />}
          loadingState={isLoading ? "loading" : "idle"}
        >
          {(task) => (
            <TableRow
              key={task.id}
              onClick={() => handleClickRow(task)}
              className="hover:bg-neutral-50 active:bg-neutral-100"
            >
              {(columnKey) => (
                <TableCell>
                  <>{renderCell(task, columnKey)}</>
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TaskModal
        isOpen={showTaskModal}
        onOpenChange={handleShowTaskModalChange}
        task={selectedTask}
      />
    </>
  )
}
