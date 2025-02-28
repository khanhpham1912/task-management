"use client"

import { Button } from "@heroui/react"

export default function Home() {
  return (
    <div className="app-content">
      <div className="flex items-center gap-4">
        <Button color="primary" size="md">
          Primary
        </Button>
        <Button color="success" size="md">
          Success
        </Button>
        <Button color="warning" size="md">
          Warning
        </Button>
        <Button color="danger" size="md">
          Danger
        </Button>
      </div>
    </div>
  )
}
