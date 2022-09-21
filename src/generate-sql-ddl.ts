
interface Table {
    name: string;
    columns: string[];
}

class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;
  constructor(public data: T) {}
}

export class Parser {

    private symbols = ['INTEGER', 'NVARCHAR', 'DATETIME', 'NUMERIC'];
    private ast: string;
    private dataDefinitions! : Array<string>;

    constructor(abstractSyntaxTree: string){
        this.ast = abstractSyntaxTree;
    }

    public getSQLDataDefinition(){
        const tokens = this.ast.trim().split(" ");
        console.log(tokens);
        if(tokens[0] !== 'erDiagram'){
            throw 'Expecting erDiagram keyword';
        }
        return this.lexer(tokens);
    }

    private lexer(tokens : Array<string>): string{
        let statementGeneration : Array<string> = [];
        for(let i = 1; i < tokens.length; i++){
            if(this.symbols.includes(tokens[i])){
                throw `Keyword reserved '${tokens[i]}'`;
            }
            const tableName = tokens[i];
            i++;
            if(tokens[i] !== "{"){
                throw `Expecting '{' got : '${tokens[i]}'`;
            }
            i++;
            while(tokens[i] !== '}' && i < tokens.length){
                if(!this.symbols.includes(tokens[i])){
                    throw `Expecting keyword got : '${tokens[i]}'`;
                }
                const dataType = tokens[i];
                i++;
                statementGeneration.push(this.createColumn(tableName, tokens[i], dataType));
                i++;
            }
            statementGeneration.unshift(this.createTable(tableName));
        }
        return statementGeneration.join("");
    }

    private createTable(tableName: string,){
        return `CREATE TABLE ${tableName}`;
    }

    private createColumn(tableName: string, columnName: string, dataType: string){
        return `ALTER TABLE ${tableName } ADD ${columnName} ${dataType}`;
    }

}