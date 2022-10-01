import { DbParser } from "../src/generate-sql-ddl";
import erDb from "../src/mermaid/src/diagrams/er/erDb";
describe("Generate DDL examples", () => {
  it("Should generate create table SQL syntax", () => {
    const db = erDb;
    // `erDiagram artists { }`;
    const ddlSyntax = new DbParser('sqlite', db).getSQLDataDefinition();
    // expect(ddlSyntax).toBe('CREATE TABLE artists');
  });
});
