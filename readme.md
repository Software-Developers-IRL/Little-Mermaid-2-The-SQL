# little-mermaid-2-the-sql
* a command line tool for generating create sql from mermaid erDiagram

## Getting Started
1. `npm install -g @funktechno/little-mermaid-2-the-sql`
1. `npm run littleMermaid2SQL -- -d dbType --src markdownFilePath`

## Generating Mermaid erDiagram
* see [samples](./samples/readme.md) for more information

## Development

1. git clone repo
    1. run `git submodule update --init --recursive --progress` to clone submodule dependencies
2. run `npm install` inside directory.
3. Examples:
   1. sqlite `npm run littleMermaid2SQL -- -d sqlite --src samples/chinook-database-2.0.1.md`
   1. postgres `npm run littleMermaid2SQL -- -d postgres --src samples/Adventureworks_pg.md`
   1. mysql `npm run littleMermaid2SQL -- -d mysql --src samples/Adventureworks_mysql.md`

### Technologies 
* [esLint](https://eslint.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)


