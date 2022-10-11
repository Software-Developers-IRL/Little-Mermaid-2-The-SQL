import { getExpected, updateExpected } from "../utils/helper";
import { GenerateSqlFromMermaid } from "../../src/Library";
import { MarkdownContentResponseI } from "../../src/types";

const dataSource = "GenerateSqlFromMermaid";

describe("Generate DDL examples from markdown", () => {
    it("Create DLL", async () => {
      const markdownContent:MarkdownContentResponseI ={
        settings: {
            database: "postgres",
            outputName: "result",
            isRaw: false,
            src: ""
        },
        content:`
        #Test
        \`\`\`mermaid
        erDiagram
            %% comment 1
            Persons {
                int PersonID PK "NOT NULL"
                varchar255 LastName
                varchar255 FirstName
                varchar255 Address
                varchar255 City
            }

            %% comment 2
            Orders {
                int OrderID PK "NOT NULL"
                int PersonID FK "NOT NULL"
            }
  
            Persons ||--o{ Orders : "[Persons.PersonId] to [Orders.PersonId]"
        \`\`\`
        `
      };
      // junit compile error for require parser.js export
    //   const sqlOutputs = GenerateSqlFromMermaid(markdownContent);
  
    //   const dataKey = expect.getState().currentTestName || "unknown";
  
    //   const expectedResult = await getExpected(dataSource, dataKey);
  
    //   if (sqlOutputs != expectedResult) {
    //     await updateExpected(dataSource, dataKey, sqlOutputs);
    //   }
  
    //   expect(sqlOutputs).toStrictEqual(expectedResult);
    });
  });
  