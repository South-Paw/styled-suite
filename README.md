# styled-suite

🏨 Some simple helpers and components to reduce boilerplate when building themed UIs

[![npm](https://img.shields.io/npm/v/@south-paw/styled-suite.svg)](https://www.npmjs.com/package/@south-paw/styled-suite)
[![Live Demo](https://img.shields.io/badge/netlify-live_demo-1e9498.svg)](https://styled-suite.netlify.com/)
[![CI Status](https://img.shields.io/travis/South-Paw/styled-suite.svg)](https://travis-ci.org/South-Paw/styled-suite)
[![Dependencies](https://david-dm.org/South-Paw/styled-suite/status.svg)](https://david-dm.org/South-Paw/styled-suite)
[![Dev Dependencies](https://david-dm.org/South-Paw/styled-suite/dev-status.svg)](https://david-dm.org/South-Paw/styled-suite?type=dev)

---

## About

The goal of styled-suite is to provide some simple helpers and low level components for more easily building themed user interfaces in React. These helpers and components are things I commonly find myself writting over and over again in each project I work on so I've attempted to abstract them out for my own sanity and hopefuly you'll find them useful too.

There are a few other projects out there in this space that have inspired styled-suite (namely [styled-system](https://styled-system.com) and [styled-typography](https://styled-typography.now.sh/)) but my reason for adding another one to this space is that I find the existing ones too perscriptive or 'over the top' when I need something simpler and permissive.

styled-suite provides helpers that align with the [System UI Theme Specification](https://system-ui.com/) and are intended to be used alongside another library such as [styled-components](https://www.styled-components.com/). It also has two helpful components which provide quick, easy and configurable typography elements.

## Getting Started

**helpers**

- define system ui theme spec for themeprovider
- use helper in your component's css-in-js to fetch a key
- extra: change the units of a fetched key
- extra: modify a fetched key with polished or similar

**typography components**

- define styled-suite typography config
- use typography components

## TODO

- [ ] Tests
- [ ] Gatsby site for docs and component storybook?
- [ ] Finish readme

## Issues and Bugs

If you manage to find any, please report them [here](https://github.com/South-Paw/styled-suite/issues) so they can be squashed.

## Development and Contributing

Grab the repo and then install dependencies with `yarn`.

```bash
# todo
```

## License

MIT, see the [LICENSE](./LICENSE) file.
