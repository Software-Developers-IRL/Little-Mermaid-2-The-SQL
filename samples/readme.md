# Samples
* generate mermaid from sql using schemacrawler
* from https://dev.to/sualeh/how-to-generate-mermaid-diagrams-for-your-database-33bn

## Steps
  1. `cd samples`
  1. Launch [docker image](https://www.schemacrawler.com/docker-image.html), connect, and generate mermaid output from database schema
      1. unix
          ```sh
          docker run \
            -v $(pwd):/home/schcrwlr/share \
            --name schemacrawler \
            --rm -i -t \
            --entrypoint=/bin/bash \
            schemacrawler/schemacrawler
          ```
      1. windows bat (cmd.exe only)
          ```bat
          docker run ^
            -v "%cd%":/home/schcrwlr/share ^
            --name schemacrawler ^
            --rm -i -t ^
            --entrypoint="/bin/bash" ^
            schemacrawler/schemacrawler
          ```
  1. generate output
      ```sh
      schemacrawler \
        --server=sqlite --database=./share/chinook-database-2.0.1.sqlite \
        --info-level=maximum \
        --command script \
        --script-language python \
        --script ./share/mermaid.py > output.md
      ```
  1. other commands
      * `schemacrawler -h`
      * 
        ```sh
        schemacrawler \
          --server=sqlite --database=./share/chinook-database-2.0.1.sqlite \
          --info-level=maximum --command=schema
        ```
      * ```
        schemacrawler \
          --server=sqlite --database=./share/chinook-database-2.0.1.sqlite \
          --info-level=maximum execute --command list
        ```
