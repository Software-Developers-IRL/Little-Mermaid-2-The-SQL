# PostgreSQL Example
* [Back](./readme.md)

## Load database
1. Launch docker database
  * `docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres:latest`
1. connect to database using [pgadmin](https://www.pgadmin.org/download/)
   * user: postgres
   * password: mysecretpassword
1. Restore backup
  * copy contents of [install.sql](https://github.com/lorint/AdventureWorks-for-Postgres/blob/master/install.sql)
  * locate pgadmin bin path and run
     * `"C:\Program Files\pgAdmin 4\v6\runtime\psql.exe" "host='localhost' port='5432' dbname='Adventureworks' user='postgres' sslmode='prefer' sslcompression='False' " < install.sql`

## Commands
  1. generate output [see](./Adventureworks_pg.md)
      ```sh
      schemacrawler \
        --server=postgresql --database=Adventureworks \
          --port=5432 --user=postgres --host=host.docker.internal --password=mysecretpassword \
        --info-level=maximum \
        --command script \
        --script-language python \
        --script ./share/mermaid.py > ./share/output_pg.md
      ```
  1. other commands
      * `schemacrawler -h`
      * 
        ```sh
        schemacrawler \
          --server=postgresql --database=Adventureworks \
          --port=5432 --user=postgres --host=host.docker.internal --password=mysecretpassword \
          --info-level=maximum --command=schema > ./share/raw_pg.txt
        ```
      * ```
        schemacrawler \
          --server=postgresql --database=Adventureworks \
          --port=5432 --user=postgres --host=host.docker.internal --password=mysecretpassword \
          --info-level=maximum execute --command list
        ```