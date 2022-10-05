# SQLITE Example
* [Back](./readme.md)

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