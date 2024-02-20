# PKL-js

> a basic CLI wrapper for pkl-lang

## installation

`npm i @sk337/pkl`

or build locally with

1. Clone repository with `git clone https://github.com/sk337/pkl-js`
2. Install Dependencies `npm install`
3. Build Code `npm run build`
4. Install the package `npm i ./` or `npm i ${path to the repository}`

## Usage

```ts
import { Parser } from "@sk337/pkl";

const parser = new Parser("file.pkl");

const out = await parser.parse();

console.log(out);
```
