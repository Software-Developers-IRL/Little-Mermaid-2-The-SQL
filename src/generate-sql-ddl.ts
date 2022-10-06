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
    let statement = `CREATE TABLE ${this.dbTypeEnds(entityKey)} (`;
    // TODO: incorporate foreign keys using relationships
    let primaryKeys: string[] = [];
    let attributesAdded = 0;
    for (let i = 0; i < entity.attributes.length; i++) {
      const attribute = entity.attributes[i];
      if (attribute.attributeType && attribute.attributeName) {
        statement += attributesAdded == 0 ? "\n" : ",\n";
        attributesAdded++;
        // need to add parenthesis or commas
        let columnType = attribute.attributeType.replace("_", ",");
        let columnTypeLength = columnType.replace(/[^0-9,]/gim, "");
        columnType = (
          columnType.replace(/[^a-zA-Z]/gim, "") +
          (columnTypeLength ? `(${columnTypeLength})` : "")
        ).trim();
        if (attribute.attributeComment) {
          let attributeName = attribute.attributeName;
          let attributeComment = attribute.attributeComment.trim();
          if (attribute.attributeComment.indexOf("'") != -1) {
            // extract
            const testFullNameMatches = attribute.attributeComment.match(
              /(?<=((?<=[\s,.:;"']|^)["']))(?:(?=(\\?))\2.)*?(?=\1)/gmu
            );
            if (testFullNameMatches && testFullNameMatches.length > 0) {
              attributeName = testFullNameMatches[0];
              attributeComment = attributeComment
                .replace(`'${attributeName}'`, "")
                .trim();
            }
          }
          if (attributeComment) attributeComment = " " + attributeComment;
          // check if contains full column name
          statement += `\t${this.dbTypeEnds(
            attributeName
          )} ${columnType}${attributeComment}`;
          if (
            attribute.attributeKeyType &&
            attribute.attributeKeyType == "PK"
          ) {
            primaryKeys.push(attribute.attributeName);
          }
        } else {
          if (
            attribute.attributeKeyType &&
            attribute.attributeKeyType == "PK"
          ) {
            primaryKeys.push(attribute.attributeName);
          }
          statement += `\t${this.dbTypeEnds(
            attribute.attributeName
          )} ${columnType}`;
        }
        // statement += i != entity.attributes.length - 1 ? ",\n" : "\n";
      }
    }
    if (primaryKeys.length > 0) {
      statement += ",\n\tPRIMARY KEY(";
      for (let i = 0; i < primaryKeys.length; i++) {
        const element = primaryKeys[i];
        statement += (i == 0 ? "" : ",") + this.dbTypeEnds(primaryKeys[i]);
      }
      statement += ")";
    }
    // foreign keys
    let entityFKeys = this.relationships.filter(
      (relation) => relation.entityB == entityKey
    );
    if (entityFKeys.length > 0) {
      for (let i = 0; i < entityFKeys.length; i++) {
        const fk = entityFKeys[i];
        const fkRelTxt = fk.roleA;
        // must match format "[..] to [..]"
        const keySplit = "] to [";
        if (
          fkRelTxt.indexOf(keySplit) != -1 &&
          fkRelTxt[0] == "[" &&
          fkRelTxt[fkRelTxt.length - 1] == "]"
        ) {
          let keys = fkRelTxt.substring(1, fkRelTxt.length - 2).split(keySplit);
          let fkCol = keys[1];
          if (fkCol.indexOf(".") != -1) {
            fkCol = fkCol.split(".")[1];
          }
          let pkCol = keys[0];
          if (pkCol.indexOf(".") != -1) {
            pkCol = pkCol.split(".")[1];
          }
          // FOREIGN KEY (`Artist Id`) REFERENCES `Artist`(`ArtistId`)
          statement += `,\n\tFOREIGN KEY (${this.dbTypeEnds(
            fkCol
          )}) REFERENCES ${this.dbTypeEnds(fk.entityA)}(${this.dbTypeEnds(
            pkCol
          )})`;
        }
        // const keys = fk.roleA.match(
        //   /(?<=((?<=[\s,.:;\[]|^)[/]]))(?:(?=(\\?))\2.)*?(?=\1)/gmu
        // );

        // const keys2 = fk.roleA.match(
        //   /\[(.*)\]/gmu
        // );
        // const keys3 = fk.roleA.replace(
        //   /\[(.*)\]/gmu,""
        // );
        // const keys4 = fk.roleA.match(
        //   /\[.*\]/gmu
        // );
        // const keys5 = fk.roleA.match(
        //   /(?<=\[).*(?=\])/gmu
        // );
        let test = 1 + 1;
      }
    }

    if (attributesAdded != 0) {
      statement += "\n";
    }

    statement += `)\n\n`;
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
