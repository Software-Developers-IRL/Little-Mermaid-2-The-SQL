# Samples
* [Home](../readme.md)
* generate mermaid erDiagram from database using schemacrawler

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
  1. Examples
     1. [SQLITE](./example_sqlite.md)
     1. [PostgreSQL](./example_postgres.md)
     1. [Mysql](./example_mysql.md)
     1. [SQLServer](./example_sqlserver.md)
