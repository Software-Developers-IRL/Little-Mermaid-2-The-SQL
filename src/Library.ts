import { info } from "console";
import mermaid from "mermaid";
import path from "path";
import { erDetector } from "../deps/mermaid/src/diagrams/er/erDetector";
import {
  jisonCode,
  erParser2,
} from "./mermaid/src/diagrams/er/parser/erDiagram";
// const jison = require("jison");
import * as fs from "fs";
// const jisonCode = require("../deps/mermaid/src/diagrams/er/parser/erDiagram")
import {
  addDetector,
  detectType,
  DiagramDetector,
} from "../deps/mermaid/src/diagram-api/detectType";
import { log } from "../deps/mermaid/src/logger";
import erDb from "./mermaid/src/diagrams/er/erDb";
import { DiagramDefinition } from "./types";
import { DbParser } from "./generate-sql-ddl";
const diagrams: Record<string, DiagramDefinition> = {};

export const erParser = async function () {
  // generate new jison lexer
  // recommened way to just grab jison build from mermaid.core.js file
  // const jisonCode = await readFile(file, 'utf8');
  // @ts-ignore no typings
  /*
  const raw = jisonCode;
  const parser = new jison.Generator(raw, {
    moduleType: "js",
    "token-stack": true,
  });

  const source = parser.generate({ moduleMain: "() => {}" });
  const exporter = `
	parser.parser = parser;
	export { parser };
	export default parser;
	`;
  // could create a new ts file from this
  const rawJisonExport = `${source} ${exporter}`;

  await fs.writeFileSync("erDiagram.js", rawJisonExport, "utf8");

  */
  // const [result] = await linter.lintText(jsCode);
  const parser3 = erParser2.default.parser();
  return parser3;
};

export const registerDiagram = (
  id: string,
  diagram: DiagramDefinition,
  detector: DiagramDetector
) => {
  if (diagrams[id]) {
    log.warn(`Diagram ${id} already registered.`);
  }
  diagram.parser.yy = diagram.db;
  diagrams[id] = diagram;
  addDetector(id, detector);
  // addStylesForDiagram(id, diagram.styles);
};

export const getDiagram = (name: string): DiagramDefinition => {
  if (name in diagrams) {
    return diagrams[name];
  }
  throw new Error(`Diagram ${name} not found.`);
};

const m: any = mermaid;
/**
 * parse markdown erDiagram mermaid in sql
 * @param fileContents
 * @returns
 */
export const GenerateSqlFromMermaid = async function (
  definition: string,
  databaseType: string
): Promise<string> {
  const parser = await erParser();
  registerDiagram(
    "er",
    {
      parser: parser,
      // renderer: null, //erRenderer,
      db: erDb,
      // styles: erStyles,
    },
    erDetector
  );
  if (mermaid) {
    try {
      let config = {
        theme: "forest",
        sequence: {
          showSequenceNumbers: true,
        },
      };

      // gra mermaid charts
      // from mermaid cli markdown parsing
      // https://github.com/mermaid-js/mermaid-cli/blob/master/src/index.js
      const mermaidChartsInMarkdown =
        /^\s*```(?:mermaid)(\r?\n([\s\S]*?))```\s*$/;
      const mermaidChartsInMarkdownRegexGlobal = new RegExp(
        mermaidChartsInMarkdown,
        "gm"
      );
      const mermaidChartsInMarkdownRegex = new RegExp(mermaidChartsInMarkdown);
      var output = "output.sql";
      var outputFormat: string = "";
      if (!outputFormat) {
        outputFormat = path.extname(output).replace(".", "");
      }
      if (outputFormat === "md") {
        // fallback to svg in case no outputFormat is given and output file is MD
        outputFormat = "sql";
      }
      if (!/(?:sql)$/.test(outputFormat)) {
        throw new Error('Output format must be one of "sql"');
      }
      const diagrams: string[][] = [];
      const outDefinition = definition.replace(
        mermaidChartsInMarkdownRegexGlobal,
        (mermaidMd) => {
          var regexResult = mermaidChartsInMarkdownRegex.exec(mermaidMd);
          if (regexResult != null) {
            const md = regexResult[1];

            // Output can be either a template image file, or a `.md` output file.
            //   If it is a template image file, use that to created numbered diagrams
            //     I.e. if "out.png", use "out-1.png", "out-2.png", etc
            //   If it is an output `.md` file, use that to base .svg numbered diagrams on
            //     I.e. if "out.md". use "out-1.svg", "out-2.svg", etc
            const outputFile = output
              .replace(/(\.(sql))$/, `-${diagrams.length + 1}$1`)
              .replace(/(\.md)$/, `.${outputFormat}`);
            const outputFileRelative = `./${path.relative(
              path.dirname(path.resolve(output)),
              path.resolve(outputFile)
            )}`;
            diagrams.push([outputFile, md]);
            return `![diagram](${outputFileRelative})`;
          }
          return mermaidMd;
        }
      );

      if (diagrams.length) {
        info(`Found ${diagrams.length} mermaid charts in Markdown input`);
        // await Promise.all(
        diagrams.map(async ([imgFile, md]) => {
          try {
            let m = mermaid;
            // TODO: future if diagrams were exposed these might work
            // let c1 = m.mermaidAPI.getConfig();
            // let c2 = m.mermaidAPI.getConfig();
            // m.mermaidAPI.initialize(c1)
            // // let diags = m.diagrams
            var test = m.mermaidAPI.parse(md);
            if (!test) {
              // not valid mermaid, console log?
              // will usually throw error
              return;
            }
            var isEr = erDetector(md);
            if (isEr) {
              let diag;
              let parseEncounteredException;
              const type = detectType(md);
              console.log(`d type:${type}`);
              try {
                diag = getDiagram(type);
                var r: boolean = diag.parser.parse(md);
                if (r) {
                  // models to sql
                  const ddlSyntax = new DbParser(
                    databaseType,
                    diag.db
                  ).getSQLDataDefinition();

                  // TODO: write to file
                  await fs.promises.writeFile(imgFile, ddlSyntax)
                  info(` ✅ ${imgFile}`)
                } else {
                  // should never hit b/c an error in parsing throws an exception
                  console.log("Error parsing erDiagram");
                }
              } catch (error) {
                // diag = new Diagram('error');
                parseEncounteredException = error;
              }
              if (parseEncounteredException)
                console.log(parseEncounteredException);
            } else {
              console.log("Not an erDiagram skipping.");
            }
          } catch (error) {
            console.log("error");
            console.log(error);
            return;
          }
        });
        // );
      } else {
        info("No mermaid charts found in Markdown input");
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
  return "";
};
