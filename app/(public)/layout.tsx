import { Sidebar } from "@/components/layout"

export default function PublicLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-background">
      <Sidebar>{children}</Sidebar>
    </div>
  )
}
