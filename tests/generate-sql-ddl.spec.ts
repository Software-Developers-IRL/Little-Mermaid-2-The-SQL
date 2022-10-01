import { Parser } from "../src/generate-sql-ddl";

describe("Generate DDL examples", () => {
  it("Should generate create table SQL syntax", () => {
    const abt = `erDiagram artists { }`;
    const ddlSyntax = new Parser(abt).getSQLDataDefinition();
    expect(ddlSyntax).toBe('CREATE TABLE artists');
  });
});
