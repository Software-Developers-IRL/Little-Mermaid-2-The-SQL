#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import path from "path";
import { program } from "commander";
import * as fs from "fs";
import { GenerateSqlFromMermaid } from "./Library";
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

LoadMarkDownFile(options.src).then(async (contents) => {
  console.log("done loading file");
  await GenerateSqlFromMermaid(contents, options.database)
  .then((result) => {
      console.log(result);
      console.log("done generating sql");
    })
});
