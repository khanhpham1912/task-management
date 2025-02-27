"use client"

import { Button } from "@heroui/react"

export default function Home() {
  return (
    <div className="app-content">
      <div className="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  )
}
