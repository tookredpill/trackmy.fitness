/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: "none",
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html"
      }
    }
  ],
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require.resolve("prettier-plugin-tailwindcss")
  ]
};
