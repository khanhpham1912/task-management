/** @type {import("prettier").Config} */
const config = {
  trailingComma: "all",
  semi: false,
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  tailwindFunctions: ["clsx", "tw"],
  plugins: ["prettier-plugin-tailwindcss"],
}

export default config
