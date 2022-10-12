# little-mermaid-2-the-sql
* a command line tool for generating create sql from mermaid erDiagram

## Getting Started
1. `npm install -g @funktechno/little-mermaid-2-the-sql`
1. `littleMermaid2SQL --help`
1. `littleMermaid2SQL -d dbType --src markdownFilePath`

## Generating Mermaid erDiagram
* see [samples](./samples/readme.md) for more information

## Ala Cart
1. `npm install --save @funktechno/little-mermaid-2-the-sql`
1. Example
    * from markdown content
      ```typescript
      import { GenerateSqlFromMermaid } from "@funktechno/little-mermaid-2-the-sql/lib/src/Library";
      import { MarkdownContentResponseI } from "@funktechno/little-mermaid-2-the-sql/lib/src/types";
      import { DbEntityAttributesDefinition, DbRelSpec } from "@funktechno/little-mermaid-2-the-sql/lib/src/types";

      
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

      const sqlOutputs = GenerateSqlFromMermaid(markdownContent);
      ```

    * manual mermaid db model
      ```typescript
      import { DbParser } from "@funktechno/little-mermaid-2-the-sql/lib/src/generate-sql-ddl";
      import erDb from "@funktechno/little-mermaid-2-the-sql/lib/src/mermaid/src/diagrams/er/erDb";

      const db = erDb;

      let entityName = "Persons";
      // load mermaid db with entities
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

      db.addRelationship("Persons", `[Persons.PersonId] to [${entityName}.PersonId]`, entityName, relSpec);
      const ddlSyntax = new DbParser('sqlite', db).getSQLDataDefinition();
      ```
    * sql output
      ```sql
      CREATE TABLE "Persons" (
        "City" varchar(255),
        "Address" varchar(255),
        "FirstName" varchar(255),
        "LastName" varchar(255),
        "PersonID" int NOT NULL,
        PRIMARY KEY("PersonID")
      );

      CREATE TABLE "Orders" (
        "PersonID" int NOT NULL,
        "OrderID" int NOT NULL,
        PRIMARY KEY("OrderID"),
        FOREIGN KEY ("PersonId") REFERENCES "Persons"("PersonId")
      );
      ```

## Development

1. git clone repo
    1. run `git submodule update --init --recursive --progress` to clone submodule dependencies
2. run `npm install` inside directory.
3. Examples:
   1. sqlite `npm run littleMermaid2SQL -- -d sqlite --src samples/chinook-database-2.0.1.md`
   1. postgres `npm run littleMermaid2SQL -- -d postgres --src samples/Adventureworks_pg.md`
   1. mysql `npm run littleMermaid2SQL -- -d mysql --src samples/Adventureworks_mysql.md`
4. Force uninstall
  * `npm uninstall -g little-mermaid-2-the-sql`
  * `npm list -g`
  * `littleMermaid2SQL --help`
5. test package
  * update .npmignore
  * run `npm pack` unzip contents and verify, node_modules are not required b/c they will be installed with package.json
  * `npm unpublish @funktechno/little-mermaid-2-the-sql@0.0.5` can only work within 1 week of publish, not very useful b/c not possible to republish an unpublished version

### Technologies 
* [esLint](https://eslint.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)


