"use client"

import React from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"
import { HeroUIProvider } from "@heroui/react"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
})

export default function Provider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: { padding: "16px" },
          duration: 2000,
        }}
      />
      <ReactQueryDevtools initialIsOpen={false} />
      <HeroUIProvider>{children}</HeroUIProvider>
    </QueryClientProvider>
  )
}
