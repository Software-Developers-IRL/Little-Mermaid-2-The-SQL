# SQL Server Example
* [Back](./readme.md)

## Load database
1. Launch docker database
  * `docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=yourStrong(!)Password" -p 1234:1433 -d mcr.microsoft.com/mssql/server:2019-latest`
1. connect to database in [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16) or [Azure Data Studio](https://azure.microsoft.com/en-us/products/data-studio/)
   * user: sa
   * password: yourStrong(!)Password
   * server: localhost,1234
1. create database NOT NEEDED
   ```sql
   create database mermaidToSql
   ```
1. Restore backup
   * download [AdventureWorksLT2019.bak](https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-ver16&tabs=ssms) that corresponds with mssql 2019
   * copy into sql server docker machine `docker cp ./AdventureWorksLT2019.bak containerName:/`
   * run restore from SSMS or Azure Data Studio

## Commands
  1. TODO: NOT WORKING....
  1. generate output [see]()
      ```sh
      schemacrawler \
        --server=sqlserver --database=AdventureworksLTS2019 \
          --port=1234 --user=sa --host=host.docker.internal --password="yourStrong(!)Password" \
        --info-level=maximum \
        --command script \
        --script-language python \
        --script ./share/mermaid.py > ./share/output_mssql.md
      ```
  1. other commands
      * `schemacrawler -h`
      * 
        ```sh
        schemacrawler \
          --server=sqlserver --database=AdventureworksLTS2019 \
          --user=sa --host=host.docker.internal,1234 --password="yourStrong(!)Password" \
          --info-level=maximum --command=schema > ./share/raw_mssql.txt
        ```
      * ```
        schemacrawler \
          --server=sqlserver --database="AdventureworksLTS2019" \
          --user=sa --host="host.docker.internal,1234" --password="yourStrong(!)Password" \
          --info-level=maximum execute --command list
        ```