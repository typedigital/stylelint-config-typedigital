# stylelint-config-typedigital

![code style typedigital](https://img.shields.io/badge/code%20style-typedigital-f45a5f.svg)
![npm](https://img.shields.io/npm/v/stylelint-config-typedigital.svg)

## Installation

```shell
npm i --save-dev stylelint stylelint-config-typedigital
```

## Setup

Add a .stylelintrc file with the following content to the root of your project:

```json
{
  "extends": [
    "stylelint-config-typedigital",
  ]
}
```

### Setup with styled-components

#### Prerequesites for this setup

- stylelint
- stylelint-processor-styled-components
- stylelint-config-styled-components config to disable stylelint rules of this config that clash with styled-components

```json
{
  "processors": [
    "stylelint-processor-styled-components"
  ],
  "extends": [
    "stylelint-config-typedigital",
    "stylelint-config-styled-components"
  ]
}
```


> For further information visit [stylelint-processor-styled-components](https://github.com/styled-components/stylelint-processor-styled-components)

## Focus of this coding guidelines

> _coming soon_

## License

Unlicense
