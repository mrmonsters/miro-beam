const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --ignore-path .eslintignore --fix --file ${filenames
    .map((f) => path.relative(`${process.cwd()}/packages/web`, f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx,json}': [
    buildEslintCommand,
  ],
}
