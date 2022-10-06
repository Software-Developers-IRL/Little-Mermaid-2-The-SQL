import {
  DbDefinition,
  DbEntityDefinition,
  DbRelationshipDefinition,
} from "./types";

interface Table {
  name: string;
  columns: string[];
}

class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;
  constructor(public data: T) {}
}
/**
 * Mermaid Models TO SQL parser
 */
export class DbParser {
  private symbols = ["INTEGER", "NVARCHAR", "DATETIME", "NUMERIC"];
  private db: DbDefinition;
  private dbType: string;
  private dataDefinitions!: Array<string>;
  private entities!: Record<string, DbEntityDefinition>;
  private relationships!: DbRelationshipDefinition[];

  constructor(dbType: string, db: DbDefinition) {
    this.db = db;
    this.dbType = dbType;
  }
  /**
   * return sql from mermaid erDiagram db models
   * @returns 
   */
  public getSQLDataDefinition() {
    this.entities = this.db.getEntities();
    this.relationships = this.db.getRelationships();
    // const tokens = this.ast.trim().split(" ");
    // console.log(tokens);
    // if(tokens[0] !== 'erDiagram'){
    //     throw 'Expecting erDiagram keyword';
    // }
    return this.lexer();
  }

  private lexer(): string {
    let statementGeneration: Array<string> = [];
    if (this.entities) {
      for (const key in this.entities) {
        if (Object.prototype.hasOwnProperty.call(this.entities, key)) {
          const entity = this.entities[key];
          statementGeneration.push(this.createTable(key, entity));
        }
      }
    }
    // for(let i = 1; i < tokens.length; i++){
    //     if(this.symbols.includes(tokens[i])){
    //         throw `Keyword reserved '${tokens[i]}'`;
    //     }
    //     const tableName = tokens[i];
    //     i++;
    //     if(tokens[i] !== "{"){
    //         throw `Expecting '{' got : '${tokens[i]}'`;
    //     }
    //     i++;
    //     while(tokens[i] !== '}' && i < tokens.length){
    //         if(!this.symbols.includes(tokens[i])){
    //             throw `Expecting keyword got : '${tokens[i]}'`;
    //         }
    //         const dataType = tokens[i];
    //         i++;
    //         statementGeneration.push(this.createColumn(tableName, tokens[i], dataType));
    //         i++;
    //     }
    //     statementGeneration.unshift(this.createTable(tableName));
    // }
    return statementGeneration.join("");
  }
  /**
   * convert labels with start and end strings per database type
   * @param label
   * @returns
   */
  private dbTypeEnds(label: string) {
    let char1 = '"';
    let char2 = '"';
    if (this.dbType == "mysql") {
      char1 = "`";
      char2 = "`";
    } else if (this.dbType == "sqlserver") {
      char1 = "[";
      char2 = "]";
    }
    return `${char1}${label}${char2}`;
  }
  /**
   * generate create table statement
   * @param entityKey
   * @param entity
   * @returns
   */
  private createTable(entityKey: string, entity: DbEntityDefinition) {
    let statement = `CREATE TABLE ${this.dbTypeEnds(entityKey)} (\n`;
    // TODO: incorporate foreign keys using relationships
    for (let i = 0; i < entity.attributes.length; i++) {
      const attribute = entity.attributes[i];
      if (attribute.attributeType && attribute.attributeName) {
        // need to add parenthesis or commas
        let columnType = attribute.attributeType.replace("_", ",");
        let columnTypeLength = columnType.replace(/[^0-9,]/gim, "");
        columnType = (
          columnType.replace(/[^a-z]/gim, "") +
          (columnTypeLength ? `(${columnTypeLength})` : "")
        ).trim();
        if (attribute.attributeComment) {
          // check if contains full column name
          statement += `\t${this.dbTypeEnds(
            attribute.attributeName
          )} ${columnType} ${attribute.attributeComment}`;
        } else {
          statement += `\t${this.dbTypeEnds(
            attribute.attributeName
          )} ${columnType}`;
        }
        statement += i != entity.attributes.length - 1 ? ",\n" : "\n";
      }
    }

    statement += `\n)`;
    return statement;
  }

  /* database create table examples:
  sqlite example:
  CREATE TABLE [test_table] (
    "id"	INTEGER NOT NULL,
    "Field 2_2"	TEXT,
    "Artist Id"	INTEGER,
    PRIMARY KEY("id"),
    FOREIGN KEY("Artist Id") REFERENCES "Artist"("ArtistId") ON DELETE NO ACTION ON UPDATE NO ACTION
  )

  mysql example:
  CREATE TABLE `test_table` (
    `id` INTEGER NOT NULL,
    `Field 2_2` TEXT,
    `Artist Id` INTEGER,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`Artist Id`) REFERENCES `Artist`(`ArtistId`)
  );

  postgres example:
  CREATE TABLE "test_table" (
    "id" INTEGER NOT NULL,
    "Field 2_2" TEXT,
    "Artist Id" INTEGER,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("Artist Id"") REFERENCES "Artist"("ArtistId")
  );

  sql server example:
  CREATE TABLE [test_table] (
    [id] INTEGER NOT NULL,
    [Field 2_2] TEXT,
    [Artist Id] INTEGER,
    PRIMARY KEY ([id]),
    FOREIGN KEY ([Artist Id]) REFERENCES [Artist]([ArtistId])
  );
  */

  private createColumn(
    tableName: string,
    columnName: string,
    dataType: string
  ) {
    return `ALTER TABLE ${tableName} ADD ${columnName} ${dataType}`;
  }
}
