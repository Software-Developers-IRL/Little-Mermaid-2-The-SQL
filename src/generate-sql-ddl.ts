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
          const element = this.entities[key];
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

  private createTable(tableName: string) {
    return `CREATE TABLE ${tableName}`;
  }

  private createColumn(
    tableName: string,
    columnName: string,
    dataType: string
  ) {
    return `ALTER TABLE ${tableName} ADD ${columnName} ${dataType}`;
  }
}
