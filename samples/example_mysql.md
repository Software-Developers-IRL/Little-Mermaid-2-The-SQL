# Mysql Example
* [Back](./readme.md)

## Load database
1. Launch docker database
  * `docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql:5.6.50`
1. connect to database using [mysql workbench](https://dev.mysql.com/downloads/workbench/)
   * user: root
   * password: my-secret-pw
1. Restore backup
   * download [AdventureWorks-MySQL-with-FKs.zip](https://github.com/tapsey/AdventureWorksMYSQL/blob/master/AdventureWorks-MySQL-with-FKs.zip)
   * copy `AdventureWorks-MySQL-with-FKs.sql` and run in mysql workbench to load
## Commands
  1. generate output [see](./Adventureworks_mysql.md)
      ```sh
      schemacrawler \
        --server=mysql --database=adventureworks \
        --port=3306 --user=root --host=host.docker.internal --password=my-secret-pw \
        --info-level=maximum \
        --command script \
        --script-language python \
        --script ./share/mermaid.py > ./share/output_mysql.md
      ```
  1. other commands
      * `schemacrawler -h`
      * 
        ```sh
        schemacrawler \
          --server=mysql --database=adventureworks \
          --port=3306 --user=root --host=host.docker.internal --password=my-secret-pw \
          --info-level=maximum --command=schema > ./share/raw_mysql.txt
        ```
      * ```
        schemacrawler \
          --server=mysql --database=adventureworks \
          --port=3306 --user=root --host=host.docker.internal --password=my-secret-pw \
          --info-level=maximum execute --command list
        ```