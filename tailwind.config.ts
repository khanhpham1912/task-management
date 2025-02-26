import type { Config } from "tailwindcss"
import { heroui } from "@heroui/react"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // ensure heroui work with tailwindcss
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "sm:col-span-6",
    {
      pattern: /gap-(x|y)?-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12)/,
    },
    {
      pattern:
        /^(sm|md|lg|xl|2xl)?:?(col|row)-span-(1|2|3|4|5|6|7|8|9|10|11|12)$/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        placeholder: "var(--placeholder)",
        primary: {
          DEFAULT: "var(--color-primary)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          foreground: "#ffffff",
          100: "var(--color-success-100)",
          200: "var(--color-success-200)",
          300: "var(--color-success-300)",
          400: "var(--color-success-400)",
          500: "var(--color-success-500)",
          600: "var(--color-success-600)",
          700: "var(--color-success-700)",
          800: "var(--color-success-800)",
          900: "var(--color-success-900)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          100: "var(--color-info-100)",
          200: "var(--color-info-200)",
          300: "var(--color-info-300)",
          400: "var(--color-info-400)",
          500: "var(--color-info-500)",
          600: "var(--color-info-600)",
          700: "var(--color-info-700)",
          800: "var(--color-info-800)",
          900: "var(--color-info-900)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          100: "var(--color-warning-100)",
          200: "var(--color-warning-200)",
          300: "var(--color-warning-300)",
          400: "var(--color-warning-400)",
          500: "var(--color-warning-500)",
          600: "var(--color-warning-600)",
          700: "var(--color-warning-700)",
          800: "var(--color-warning-800)",
          900: "var(--color-warning-900)",
        },
        danger: {
          DEFAULT: "var(--color-danger)",
          100: "var(--color-danger-100)",
          200: "var(--color-danger-200)",
          300: "var(--color-danger-300)",
          400: "var(--color-danger-400)",
          500: "var(--color-danger-500)",
          600: "var(--color-danger-600)",
          700: "var(--color-danger-700)",
          800: "var(--color-danger-800)",
          900: "var(--color-danger-900)",
        },
        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
          950: "var(--color-neutral-950)",
        },
      },
    },
  },
  plugins: [
    heroui({
      // themes: {
      //   light: {
      //     colors: {
      //       background: "#fafafa",
      //       foreground: "#171717",
      //       primary: {
      //         DEFAULT: "#1677ff",
      //         100: "#D0EBFF",
      //         200: "#A1D4FF",
      //         300: "#73B9FF",
      //         400: "#50A0FF",
      //         500: "#1677FF",
      //         600: "#105CDB",
      //         700: "#0B44B7",
      //         800: "#072F93",
      //         900: "#04217A",
      //       },
      //       success: {
      //         DEFAULT: "#69c120",
      //         foreground: "#ffffff",
      //         100: "#EEFBD1",
      //         200: "#D8F8A5",
      //         300: "#B8EC76",
      //         400: "#96D951",
      //         500: "#69C120",
      //         600: "#50A517",
      //         700: "#3A8A10",
      //         800: "#276F0A",
      //         900: "#1A5C06",
      //       },
      //       warning: {
      //         DEFAULT: "#ffb70f",
      //         foreground: "#ffffff",
      //         100: "#FFF6CF",
      //         200: "#FFEB9F",
      //         300: "#FFDC6F",
      //         400: "#FFCE4B",
      //         500: "#FFB70F",
      //         600: "#DB960A",
      //         700: "#B77707",
      //         800: "#935B04",
      //         900: "#7A4702",
      //       },
      //       danger: {
      //         DEFAULT: "#ff4d3d",
      //         foreground: "#ffffff",
      //         100: "#FFE8D8",
      //         200: "#FFCAB1",
      //         300: "#FFA78A",
      //         400: "#FF856D",
      //         500: "#FF4D3D",
      //         600: "#DB2C2C",
      //         700: "#B71E2B",
      //         800: "#931328",
      //         900: "#7A0B26",
      //       },
      //       default: {
      //         50: "#fffbff",
      //         100: "#f4f0ef",
      //         200: "#e5e1e1",
      //         300: "#c9c6c5",
      //         400: "#adaaaa",
      //         500: "#939090",
      //         600: "#797676",
      //         700: "#605e5e",
      //         800: "#484646",
      //         900: "#313030",
      //       },
      //     },
      //   },
      // },
    }),
  ],
} satisfies Config
