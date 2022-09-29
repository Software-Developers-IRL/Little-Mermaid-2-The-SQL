import { info } from "console";
import mermaid from "mermaid";
// import { utils } from "mermaid";
import path from "path";
import { detectDirective } from "./mermaid/utils";

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
            const md = regexResult[0];

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
        await Promise.all(
          diagrams.map(async ([imgFile, md]) => {
            try {
              var test = mermaid.mermaidAPI.parse(md);
              if (!test) {
                // not valid mermaid, console log?
                return;
              }
            } catch (error) {
              console.log(error);
              return;
            }

            var directive = detectDirective(md);
            var test2 = 1 + 1;
            //   const data = await parseMMD(browser, md, outputFormat, parseMMDOptions)
            //   await fs.promises.writeFile(imgFile, data)
            //   info(` ✅ ${imgFile}`)
          })
        );
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
