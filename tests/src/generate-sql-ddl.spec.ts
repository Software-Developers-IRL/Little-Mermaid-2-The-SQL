import { DbParser } from "../../src/generate-sql-ddl";
import erDb from "../../src/mermaid/src/diagrams/er/erDb";
import { DbEntityAttributesDefinition, DbRelSpec } from "../../src/types";
import { getExpected, updateExpected } from "../utils/helper";
import * as fs from "fs";

const dataSource = "getSQLDataDefinition";
describe("Generate DDL examples", () => {
  it("Should generate create table SQL syntax", async () => {
    const db = erDb;
    let entityName = "Persons";
    db.addEntity(entityName);
    let attributes:DbEntityAttributesDefinition[] = [
      {
        attributeName: "PersonID",
        attributeKeyType: "PK",
        attributeType: "int",
        attributeComment: "NOT NULL"
      },
      {
        attributeName: "LastName",
        attributeType: "varchar255"
      },
      {
        attributeName: "FirstName",
        attributeType: "varchar255"
      },
      {
        attributeName: "Address",
        attributeType: "varchar255"
      },
      {
        attributeName: "City",
        attributeType: "varchar255"
      }
    ];
    db.addAttributes(entityName,attributes);

    entityName = "Orders";
    db.addEntity(entityName);
    attributes = [
      {
        attributeName: "OrderID",
        attributeKeyType: "PK",
        attributeType: "int",
        attributeComment: "NOT NULL"
      },
      {
        attributeName: "PersonID",
        attributeKeyType: "FK",
        attributeType: "int",
        attributeComment: "NOT NULL"
      }
    ];
    db.addAttributes(entityName,attributes);

    const relSpec:DbRelSpec= {
      cardA: "ZERO_OR_MORE",
      cardB: "ONLY_ONE",
      relType: "IDENTIFYING"
    };

    db.addRelationship("Persons", `[Persons.PersonId] to [${entityName}.PersonId]`,entityName, relSpec);
    // `erDiagram artists { }`;
    const ddlSyntax = new DbParser("sqlite", db).getSQLDataDefinition();

    const dataKey = expect.getState().currentTestName || "unknown";

    const expectedResult = await getExpected(dataSource, dataKey);

    if (ddlSyntax != expectedResult) {
      await updateExpected(dataSource, dataKey, ddlSyntax);
    }

    // console.log(result);
    expect(ddlSyntax).toStrictEqual(expectedResult);
    // expect(ddlSyntax).toBe('CREATE TABLE artists');

    // await fs.writeFileSync(
    //   "output-sqlite.sql",
    //   ddlSyntax
    // );
  });
});
