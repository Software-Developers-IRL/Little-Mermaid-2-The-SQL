from schemacrawler.schema import TableRelationshipType # pylint: disable=import-error
import re
from datetime import date

today = date.today()

print('# Mermaid erDiagram')
print ('* Generated using schemacrawler on: ' + str(today))
print ('* using Little-Mermaid-2-TheSQL formatting')
databaseInfo = str(catalog.databaseInfo) \
  .strip() \
  .replace("--", "") \
  .strip() \
  .replace("database:", "DatabaseInfo:")
isSqlite = "sqlite" in databaseInfo.lower()
isMysql = "mysql" in databaseInfo.lower()
print ('* ' + databaseInfo)
# print(dir(catalog.jdbcDriverInfo))
if(isSqlite):
  print("* Connection: "+ catalog.jdbcDriverInfo.connectionUrl)
# print(str(catalog.jdbcDriverInfo.driverProperties.toArray()))
if(not isMysql):
  for dProp in catalog.jdbcDriverInfo.driverProperties.toArray():
    if("Database name" in str(dProp)):
      print("* DatabaseName DriverProperty: "+str(dProp).partition('\n')[0])
if str(catalog.schemas) != '[]':
  print ('* Schemas: ' + str(catalog.schemas))
# TODO include package version
print('')
diagCount = 1
print('## Diagrams:')
print('* Diagram-'+str(diagCount))
print('    ```mermaid')
print('    erDiagram')
print('')
singleTableCount = 0
# if no foreign keys do one table at a time w/ max of 10 or 5 tables in a separate mermaid diagram
# generate entity tables
entityCount = 0
for table in catalog.tables:
  hasFKRelationship = False
  for childTable in table.getRelatedTables(TableRelationshipType.child):
    hasFKRelationship = True
  for foreignKeys in table.foreignKeys:
    hasFKRelationship = True
  if(hasFKRelationship == True):
    entityCount += 1
    print('      %% Entity With No Relantionships #' + str(entityCount))
    tableFullName = re.sub("[\"\']", "", table.fullName).replace(" ","_").replace(".","_")
    print('      ' + tableFullName + ' {')
    for column in table.columns:
      # // need to remove quotes and spaces
      # get all column attributes for debugging
      # print (dir(column))
      columnShortName = re.sub("[\"\']", "", column.name).replace(" ","").replace(".","_")
      # check if any alphanumerics as can't start with number, add r if not
      hasStartingLetter = str(re.sub(r'[^a-zA-Z]', '', columnShortName[0])) != ""
      if(not hasStartingLetter):
        columnShortName = "r" + columnShortName
      columnFullName = ""
      if(columnShortName != column.name):
        columnFullName = "'" + column.name + "'"
      # values cared about:
        # isNullable
        # autoIncremented
        # isPartOfIndex
        # isPartOfUniqueIndex
      keyType = " PK" if column.partOfPrimaryKey else ""
      if(keyType == "" and column.partOfForeignKey ):
        keyType = " FK"
      # dont need to define FK can get through relationships
      # keyType += (""  if keyType == "" else ",") + "FK" if column.partOfForeignKey else ""
      extraAttributes = ""
      if(columnFullName != ""):
        extraAttributes += columnFullName
      if(not column.nullable):
        extraAttributes += " NOT NULL"
      if(extraAttributes != ""):
        extraAttributes = " \"" + extraAttributes.strip() + "\""
      print('        ' + re.sub("[,]", "_",re.sub(r'[()]', '', column.columnDataType.name)) + ' ' + columnShortName + keyType +  extraAttributes)
    print('      }')
    print('')
  else:
    singleTableCount+=1

# generate relationships, need to display keys in the description for sql generation
# https://www.tabnine.com/code/java/methods/schemacrawler.schemacrawler.SchemaCrawlerOptionsBuilder/includeGreppedColumns
for table in catalog.tables:
  tableOriginal = re.sub("[\"\']", "", table.fullName)
  tableFullName = tableOriginal.replace(" ","_").replace(".","_")
  # print (tableFullName)
  addSpace = False
  
  for foreignKeys in table.foreignKeys:
    # if(hasattr(foreignKeys.primaryKeyTable,'getPrimaryKey')):
    #   print('test4')
    #   try:
    #     :FIXME: will cause program to stop printing in mysql for some reason
    #     print(foreignKeys.primaryKeyTable.getPrimaryKey())
    #   except Exception:
    #     sys.exc_clear()
    #     pass
    #     print("failure")
    #   print('test5')
    fkTableOriginal = str(foreignKeys.primaryKeyTable)
    fkTableFullName = fkTableOriginal.replace(" ", "_").replace(".","_")
    if(tableFullName != fkTableFullName): 
      addSpace = True
      relationshipTxt = str(foreignKeys.primaryKeyTable.primaryKey.columns) + " to " + str(foreignKeys.columns)
      relationshipTxt = "\"" + re.sub("[\"]", "\'", relationshipTxt) + "\"" 
      relationshipTxt = relationshipTxt.replace(tableOriginal,tableFullName).replace(fkTableOriginal, fkTableFullName)
      # str(foreignKeys.foreignKeyTable)
      print('      ' + fkTableFullName + ' ||--o{ ' + tableFullName + ' : '+ relationshipTxt)
  if(addSpace):
    print('')
# old way
# for table in catalog.tables:  
#   for childTable in table.getRelatedTables(TableRelationshipType.child):
#     print('  ' + table.name + ' ||--o{ ' + childTable.name + ' : "foreign key"')
#   print('')
print('    ```')
if(singleTableCount > 0):
  # update this for larger single table erDiagrams
  batchCount = 5
  diagCount += 1
  print('* Diagram-'+str(diagCount))
  print('    ```mermaid')
  print('    erDiagram')
  print('')
  currentCount = 0
  for table in catalog.tables:
    hasFKRelationship = False
    for childTable in table.getRelatedTables(TableRelationshipType.child):
      hasFKRelationship = True
    for foreignKeys in table.foreignKeys:
      hasFKRelationship = True
    if(hasFKRelationship == False):
      if(currentCount != 0 and currentCount % batchCount == 0):
        print('    ```')
        diagCount += 1
        print('* Diagram-'+str(diagCount))
        print('    ```mermaid')
        print('    erDiagram')
        print('')
      currentCount += 1
      print('      %% Entity With No Relantionships #' + str(currentCount))
      tableFullName = re.sub("[\"\']", "", table.fullName).replace(" ","_").replace(".","_")
      print('      ' + tableFullName + ' {')
      for column in table.columns:
        # // need to remove quotes and spaces
        # get all column attributes for debugging
        # print (dir(column))
        columnShortName = re.sub("[\"\']", "", column.name).replace(" ","").replace(".","_")
        # check if any alphanumerics as can't start with number, add r if not
        hasStartingLetter = str(re.sub(r'[^a-zA-Z]', '', columnShortName[0])) != ""
        if(not hasStartingLetter):
          columnShortName = "r" + columnShortName
        columnFullName = ""
        if(columnShortName != column.name):
          columnFullName = "'" + column.name + "'"
        # values cared about: 
          # isNullable
          # autoIncremented
          # isPartOfIndex
          # isPartOfUniqueIndex
        keyType = " PK" if column.partOfPrimaryKey else ""
        if(keyType == "" and column.partOfForeignKey ):
          keyType = " FK"
        # dont need to define FK can get through relationships
        # keyType += (""  if keyType == "" else ",") + "FK" if column.partOfForeignKey else ""
        extraAttributes = ""
        if(columnFullName != ""):
          extraAttributes += columnFullName
        if(not column.nullable):
          extraAttributes += " NOT NULL"
        if(extraAttributes != ""):
          extraAttributes = " \"" + extraAttributes.strip() + "\""
        print('        ' + re.sub("[,]", "_",re.sub(r'[()]', '', column.columnDataType.name)) + ' ' + columnShortName + keyType +  extraAttributes)
      print('      }')
      print('')
  print('    ```')

print('## Summary:')
print('* Entities with Relationships:'+str(entityCount))
print('* Entities without Relationships:'+str(singleTableCount))
print('* Total Entities:'+str(entityCount+singleTableCount))