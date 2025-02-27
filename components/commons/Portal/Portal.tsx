// Ref: SolidJS
import React, { ReactNode, useLayoutEffect, useRef } from "react"
import ReactDOM from "react-dom"

interface PortalProps {
  mount?: Node // The DOM node where the portal will be rendered
  useShadow?: boolean // If true, use Shadow DOM
  isSVG?: boolean // If true, render inside an SVG element
  children: ReactNode // Children to render in the portal
  refCallback?: (
    el: HTMLDivElement | (SVGGElement & { readonly shadowRoot?: ShadowRoot }),
  ) => void // Optional callback to get reference to container
}

export const Portal: React.FC<PortalProps> = ({
  mount,
  useShadow = false,
  isSVG = false,
  children,
  refCallback,
}) => {
  const containerRef = useRef<HTMLDivElement | SVGGElement | null>(null)
  const shadowRootRef = useRef<ShadowRoot | null>(null)

  // Ensure the container is only created once
  if (!containerRef.current) {
    // Create either an SVG 'g' element or a normal 'div'
    containerRef.current = isSVG
      ? (document.createElementNS(
          "http://www.w3.org/2000/svg",
          "g",
        ) as SVGGElement)
      : (document.createElement("div") as HTMLDivElement)

    // If useShadow is true, attach shadow DOM to the container
    if (useShadow && containerRef.current.attachShadow) {
      shadowRootRef.current = containerRef.current.attachShadow({
        mode: "open",
      })
      const shadowHost = document.createElement("div") // Content inside Shadow DOM
      shadowRootRef.current.appendChild(shadowHost) // Add a host div for content
    }

    if (refCallback) {
      refCallback(
        containerRef.current as HTMLDivElement & {
          readonly shadowRoot?: ShadowRoot
        },
      )
    }
  }

  // Append the container to the mount point and clean up
  useLayoutEffect(() => {
    const mountPoint = mount || document.body
    mountPoint.appendChild(containerRef.current!)

    return () => {
      mountPoint.removeChild(containerRef.current!)
    }
  }, [mount])

  // Return null until the container is available
  if (!containerRef.current) return null

  // Render children into the appropriate container (shadowRoot or container)
  return ReactDOM.createPortal(
    children,
    useShadow && shadowRootRef.current
      ? (shadowRootRef.current.firstElementChild as HTMLElement)
      : containerRef.current,
  )
}
