#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const path = require("path");
const program = require("commander");
const fs = require("fs");
// import * as fs from "fs";

clear();
console.log(
  chalk.red(
    figlet.textSync("littleMermaid2SQL-cli", { horizontalLayout: "full" })
  )
);

program
  .version("0.0.3")
  .description("A sql generator from mermaid markdown erdDiagrams")
  .option("-c, --contents <string>", "Raw markdown file contents #asdf")
  .option("-s, --src <string>", "Source file e.g. sample.md")
  .option(
    "-d, --database <string>",
    "Database format, postgres, sqlserver, mysql, sqlite"
  )
  .parse(process.argv);

const options = program.opts();

console.log("current options:");
if (options.src) console.log("  - src");
if (options.database) console.log("  - database");

const database: string =
  undefined === options.database ? "postgres" : options.database || "no";

console.log("  - %s database", database);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

/**
 * load markdown file text contents
 * @param filePath
 */
async function LoadMarkDownFile(filePath: string): Promise<string> {
  const fileContents = await fs.readFileSync(filePath, "utf8");
  var test = 1 + 1;
  // serialize to mermaid
  // const contents = file.split('\n');
  // contents.shift();
  return fileContents;
}

LoadMarkDownFile(options.src).then((contents) => {
  console.log("done");
});
