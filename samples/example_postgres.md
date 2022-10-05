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

## Commands
  1. generate output