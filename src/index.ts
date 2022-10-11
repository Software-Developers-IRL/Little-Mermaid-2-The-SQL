#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
// import path from "path";
import { program } from "commander";
import * as fs from "fs";
import { WriteMermaidErDiagramsToSqlFiles } from "./Library";
import { MarkdownContentResponseI, MarkdownInputSettingsI } from "./types";
clear();
console.log(
  chalk.red(
    figlet.textSync("littleMermaid2SQL-cli", { horizontalLayout: "full" })
  )
);

program
  .version("0.0.3")
  .description("A sql generator from mermaid markdown erdDiagrams")
  // .option("-c, --contents <string>", "Raw markdown file contents #asdf")
  .requiredOption("-s, --src <string>", "Source file e.g. sample.md")
  .option("-r, --raw", "src is raw content rather than file")
  .option(
    "-o, --output <string>",
    "Output file format e.g. result becomes result-1.sql"
  )
  .option(
    "-d, --database <string>",
    "Database format, postgres, sqlserver, mysql, sqlite"
  )
  .parse(process.argv);

const options = program.opts();

console.log("current options:");
if (options.src) console.log(`  - src ${options.src}`);
// else {
//   console.log(`error: required option '-s, --src <string>' not specified`);
//   process.exit(1);
// }
if (options.database) console.log(`  - database ${options.database}`);

if (options.raw) console.log("  - raw true");

const database: string =
  undefined === options.database ? "postgres" : options.database || "no";

const output: string =
  undefined === options.output ? "output" : options.output || "result";

const src: string = options.src;

const isRaw = options.raw ? true : false;
// required params, input only

// console.log("  - %s database", database);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

const markdownFileSettings: MarkdownInputSettingsI = {
  src,
  isRaw,
  outputName: output,
  database
};

/**
 * load markdown file text contents
 * @param filePath
 */
async function LoadMarkDownFile(
  inputInformation: MarkdownInputSettingsI
): Promise<MarkdownContentResponseI> {
  let fileContents: string | null = null;
  if (inputInformation.isRaw) {
    fileContents = inputInformation.src;
  } else {
    const fileExists = await fs.existsSync(inputInformation.src);
    if (!fileExists) {
      throw new Error(`src:${inputInformation.src}, does not exist`);
    }
    fileContents = await fs.readFileSync(inputInformation.src, "utf8");
  }
  return {
    settings: inputInformation,
    content: fileContents
  };
}

LoadMarkDownFile(markdownFileSettings)
  .then(async (response) => {
    console.log("done loading file");
    await WriteMermaidErDiagramsToSqlFiles(response).then((result) => {
      console.log(result);
      console.log("done generating sql");
    });
  })
  .catch((error) => {
    console.log(error);
  });
