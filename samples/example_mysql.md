# Mysql Example
* [Back](./readme.md)

## Load database
1. Launch docker database
  * `docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql:5.6.50`
1. connect to database using [mysql workbench](https://dev.mysql.com/downloads/workbench/)
   * user: root
   * password: my-secret-pw
1. Restore backup
## Commands
  1. generate output