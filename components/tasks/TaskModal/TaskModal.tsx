// components
import { Col, Flex, Row } from "@/components/commons"
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
import { ETaskStatus, Task } from "@/models/task"

// constants
import { statusOptions } from "../constant"

// hooks
import { useTaskModal } from "./logic"

export const TaskModal = ({
  isOpen,
  onOpenChange,
  task,
}: {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  task?: Task
}) => {
  const { isEdit, register, handleSubmit, onSubmit, handleOpenChange } =
    useTaskModal({ task, onOpenChange })
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
                  <Col xs={12} lg={8}>
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
                  <Col xs={12} lg={4}>
                    <Flex layout="vertical" gap={4}>
                      <Select
                        {...register("status")}
                        isRequired
                        labelPlacement="outside"
                        variant="bordered"
                        defaultSelectedKeys={[ETaskStatus.TODO]}
                        className="max-w-xs"
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
                    </Flex>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter className="w-full">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                  {isEdit ? "Save" : "Create task"}
                </Button>
              </ModalFooter>
            </Form>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
