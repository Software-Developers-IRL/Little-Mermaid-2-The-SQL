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
      //   var test = mermaid.parse(fileContents);
      var t = mermaid.mermaidAPI.getSiteConfig();
      console.log(JSON.stringify(t));
      var defaultConfig = mermaid.mermaidAPI.defaultConfig;
      console.log(JSON.stringify(defaultConfig));
      mermaid.mermaidAPI.initialize(defaultConfig);
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
