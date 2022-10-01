import { info } from "console";
import mermaid from "mermaid";
// import { utils } from "mermaid";
import path from "path";
// import { detectDirective } from "../deps/mermaid/src/utils";
import { erDetector } from "../deps/mermaid/src/diagrams/er/erDetector";
// import erRenderer from '../deps/mermaid/src/diagrams/er/erRenderer';
// import jisonCode from '../deps/mermaid/src/diagrams/er/parser/erDiagram';
import {
  jisonCode,
  erParser2,
} from "./mermaid/src/diagrams/er/parser/erDiagram";
// import jison from "jison"
const jison = require("jison");
import * as fs from "fs";
// const jisonCode = require("../deps/mermaid/src/diagrams/er/parser/erDiagram")
// import Diagram from '../deps/mermaid/src/Diagram';
import {
  addDetector,
  detectType,
  DiagramDetector,
} from "../deps/mermaid/src/diagram-api/detectType";
import { MermaidConfig } from "../deps/mermaid/src/config.type";
import { log } from "../deps/mermaid/src/logger";
import erDb from "./mermaid/src/diagrams/er/erDb";
import { DiagramDefinition } from "./types";
import { DbParser } from "./generate-sql-ddl";
// import { getDiagram } from '../deps/mermaid/src/diagram-api/diagramAPI';
const diagrams: Record<string, DiagramDefinition> = {};

export const erParser = async function () {
  // const jisonCode = await readFile(file, 'utf8');
  // @ts-ignore no typings
  /*
  const raw = jisonCode;
  const jsCode = new jison.Generator(jisonCode, {
    moduleType: "amd",
  }).generate();
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

  // fails
  // const Parser = new jison.Parser(jisonCode, {
  //   moduleType: "amd",
  // });
  const Parser2 = new jison.Parser(jisonCode, {
    moduleType: "js",
    "token-stack": true,
  });
  */
  // const [result] = await linter.lintText(jsCode);
  // return Parser2;
  const raw = erParser2;
  const parser3 = erParser2.default.parser();
  // const parser3 = erParser2.default();
  // try {
  //   const p5 = new parser3;
  //   const parser4 = new erParser2.default.parser.parser;
  // } catch (error) {

  // }
  // try {
  //   const parser4 = new erParser2.default.parser.parser();
  // } catch (error) {

  // }
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

      //   var r = m.utils.detectInit(definition);
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
      var output = "output.svg";
      var outputFormat: string = "";
      if (!outputFormat) {
        outputFormat = path.extname(output).replace(".", "");
      }
      if (outputFormat === "md") {
        // fallback to svg in case no outputFormat is given and output file is MD
        outputFormat = "svg";
      }
      if (!/(?:svg|png|pdf)$/.test(outputFormat)) {
        throw new Error('Output format must be one of "svg", "png" or "pdf"');
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
              .replace(/(\.(md|png|svg|pdf))$/, `-${diagrams.length + 1}$1`)
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
            var test = mermaid.mermaidAPI.parse(md);
            if (!test) {
              // not valid mermaid, console log?
              return;
            }
            var isEr = erDetector(md);
            if (isEr) {
              console.log("is erdiagram");
              let diag;
              let parseEncounteredException;
              const type = detectType(md);
              console.log(`d type:${type}`);
              try {
                diag = getDiagram(type);
                console.log(JSON.stringify(diag.db));
                // var y = diag.parser.yy(md);
                // jison lexer working!!!
                var r:boolean = diag.parser.parse(md);
                var entities = diag.db.getEntities();
                var relationships = diag.db.getRelationships();
                // model interfaces
                // TODO: models to sql
                const ddlSyntax = new DbParser(databaseType, diag.db).getSQLDataDefinition();
                // var r2 = diag.parser.parser.parse(md);
                // console.log(JSON.stringify(r));
                var test5 = 1 + 1;
                // diag = new Diagram(md);
              } catch (error) {
                // diag = new Diagram('error');
                parseEncounteredException = error;
              }
              if (parseEncounteredException)
                console.log(parseEncounteredException);
            } else {
              console.log("not erdiagram");
            }
            info(isEr);
            console.log(isEr);
            // var directive = detectDirective(md);
            // console.log(directive);
          } catch (error) {
            console.log("error");
            console.log(error);
            return;
          }

          var test2 = 1 + 1;
          //   const data = await parseMMD(browser, md, outputFormat, parseMMDOptions)
          //   await fs.promises.writeFile(imgFile, data)
          //   info(` ✅ ${imgFile}`)
        });
        // );
      } else {
        info("No mermaid charts found in Markdown input");
      }
      var m = mermaid;
      //   var test = mermaid.parse(fileContents);
      var t = mermaid.mermaidAPI.getSiteConfig();
      mermaid.initThrowsErrors();
      //   console.log(JSON.stringify(t));
      var defaultConfig = mermaid.mermaidAPI.defaultConfig;
      //   console.log(JSON.stringify(defaultConfig));
      mermaid.mermaidAPI.initialize(t);
      mermaid.mermaidAPI.render;
      //   var test = mermaid.mermaidAPI.parse(fileContents);
      //   console.log(JSON.stringify(test));
      // var config = mermaid.getSiteConfig();
      //   var models = mermaid.in
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
  return "";
};
