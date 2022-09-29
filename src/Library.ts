import mermaid from "mermaid";

/**
 * parse markdown erDiagram mermaid in sql
 * @param fileContents
 * @returns
 */
export const GenerateSqlFromMermaid = async function (
  fileContents: string,
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
      var m = mermaid;
      //   var test = mermaid.parse(fileContents);
      var t = mermaid.mermaidAPI.getSiteConfig();
      mermaid.initThrowsErrors();
      //   console.log(JSON.stringify(t));
      var defaultConfig = mermaid.mermaidAPI.defaultConfig;
      //   console.log(JSON.stringify(defaultConfig));
      mermaid.mermaidAPI.initialize(t);
      mermaid.mermaidAPI.render;
      var test = mermaid.mermaidAPI.parse(fileContents);
      console.log(JSON.stringify(test));
      // var config = mermaid.getSiteConfig();
      //   var models = mermaid.in
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
  return "";
};
