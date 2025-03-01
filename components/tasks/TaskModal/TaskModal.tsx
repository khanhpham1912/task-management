// components
import { Col, DatePicker, Flex, Row } from "@/components/commons"
import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react"

// models
import { Task } from "@/models/task"

// constants
import { statusOptions } from "../constant"

// hooks
import { useTaskModal } from "./logic"
import { Controller } from "react-hook-form"
import { displayDate } from "@/utils/common"

export const TaskModal = ({
  isOpen,
  onOpenChange,
  task,
}: {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  task?: Task
}) => {
  const {
    isEdit,
    register,
    handleSubmit,
    onSubmit,
    handleOpenChange,
    control,
    getValues,
  } = useTaskModal({ task, onOpenChange })
  return (
    <Modal
      isOpen={isOpen}
      placement="top-center"
      onOpenChange={handleOpenChange}
      size="xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <ModalBody className="w-full pt-6">
                <Row gutter={[4, 4]} className="w-full">
                  <Col xs={12} lg={8} className="col-span-12">
                    <Flex layout="vertical" gap={4}>
                      <Input
                        {...register("title")}
                        isRequired
                        autoFocus
                        label="Title"
                        placeholder="Enter the title"
                        labelPlacement="outside"
                        variant="bordered"
                        radius="sm"
                      />
                      <Textarea
                        {...register("description")}
                        classNames={{
                          input: "resize-y min-h-[10rem]",
                        }}
                        label="Description"
                        placeholder="Enter the task description"
                        labelPlacement="outside"
                        variant="bordered"
                        radius="sm"
                      />
                    </Flex>
                  </Col>
                  <Col xs={12} lg={4} className="col-span-12">
                    <Flex layout="vertical" gap={4}>
                      <Select
                        {...register("status")}
                        isRequired
                        labelPlacement="outside"
                        variant="bordered"
                        className="w-full"
                        label="Status"
                        radius="sm"
                        placeholder="Select status"
                      >
                        {statusOptions.map((option) => (
                          <SelectItem key={option.key}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </Select>
                      <Controller
                        name="deadline"
                        control={control}
                        render={({ field }) => (
                          <DatePicker
                            label="Due date"
                            labelPlacement="outside"
                            variant="bordered"
                            radius="sm"
                            value={field.value}
                            onChange={(date) => field.onChange(date)}
                            onBlur={field.onBlur}
                            ref={field.ref}
                            granularity="day"
                          />
                        )}
                      />
                    </Flex>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter className="w-full">
                <Flex justify={"between"} align={"center"} className="w-full">
                  <Flex
                    layout={"vertical"}
                    gap={1}
                    className="text-xs text-neutral-500"
                  >
                    <span>{`Updated at: ${displayDate(getValues("updatedAt"))}`}</span>
                    <span>{`Created at: ${displayDate(getValues("createdAt"))}`}</span>
                  </Flex>
                  <Flex align={"center"} justify={"center"} gap={2}>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" type="submit">
                      {isEdit ? "Save" : "Create task"}
                    </Button>
                  </Flex>
                </Flex>
              </ModalFooter>
            </Form>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
