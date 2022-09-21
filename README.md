## Rick & Morty app

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

### Node Version

To make sure we isolate our dependencies, the application uses a `.nvmrc` file
to lock the node version to `v14.17.0`

Use the `nvm use` command to set the default node version found in `.nvmrc`.
Similarly if the specified node version is not installed simply run
`nvm install`.

_To invoke `nvm` automatically in your shell when changing directories, SEE:_
https://github.com/nvm-sh/nvm#deeper-shell-integration

## Getting Started

First, install the dependencies:

```bash
yarn
```

Next, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.tsx`. The page
auto-updates as you edit the file.

## Frontend Architecture Overview

For this work sample I've decided to use `NextJS` along with the following
tools/workflow:

- [Prettier](https://prettier.io/) to enforce consistent formatting.
- [ESLint](https://eslint.org/) to lint code and catch errors.
- [Stylelint](https://stylelint.io/) to lint styles and enforce consistency.
- [Typescript](https://www.typescriptlang.org/) to provide type checking and
  catch errors.
- [SVGR](https://react-svgr.com/) to transform SVGs into React components.
- [PostCSS](https://postcss.org/) to transform CSS with Javascript.
- [Husky](https://typicode.github.io/husky) to configure git hooks.
- [CSS Modules](https://github.com/css-modules/css-modules) to scope class names
  local to each component.
- [Apollo Client/GraphQL](https://www.apollographql.com/docs/react/) to interact
  with the Rick and Morty graphql API.
- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) to provide a
  mocked API endpoint.
- [Vercel](https://vercel.com/) for deployments and hosting.

## Features checklist

- [x] Retrieve a list of locations (name and type), along with the residents of
      that location and their status.
  - [x] Display the data in a manner that allows you to view the location, it's
        residents and see an image of the resident with a representation of
        their name & status.
- [x] When you tap on a resident it will navigate to a screen with the
      resident's details.
  - [x] On this screen you will be able to open a form that allows you to add
        your notes about the character.
  - [x] This form will post to a dummy API endpoint using
        https://jsonplaceholder.typicode.com/guide that you must create.
