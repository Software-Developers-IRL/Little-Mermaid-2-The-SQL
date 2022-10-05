# SQLITE Example
* [Back](./readme.md)
* original source https://dev.to/sualeh/how-to-generate-mermaid-diagrams-for-your-database-33bn
## Commands
  1. generate output
      ```sh
      schemacrawler \
        --server=sqlite --database=./share/chinook-database-2.0.1.sqlite \
        --info-level=maximum \
        --command script \
        --script-language python \
        --script ./share/mermaid.py > ./share/output.md
      ```
  1. other commands
      * `schemacrawler -h`
      * 
        ```sh
        schemacrawler \
          --server=sqlite --database=./share/chinook-database-2.0.1.sqlite \
          --info-level=maximum --command=schema > ./share/raw.txt
        ```
      * ```
        schemacrawler \
          --server=sqlite --database=./share/chinook-database-2.0.1.sqlite \
          --info-level=maximum execute --command list
        ```