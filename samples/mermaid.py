from schemacrawler.schema import TableRelationshipType # pylint: disable=import-error
import re
from datetime import date

today = date.today()

print('# Mermaid erDiagram')
print ('* generated using schemacrawler on:' + str(today))
print ('* using Little-Mermaid-2-TheSQL formatting')
# TODO include package version
print('')
print('```mermaid')
print('erDiagram')
print('')
# generate entity tables
for table in catalog.tables:
  print('  ' + table.fullName + ' {')
  for column in table.columns:
    # // need to remove quotes and spaces
    # get all column attributes for debugging
    # print (dir(column))
    columnShortName = re.sub("[\"\']", "", column.name).replace(" ","")
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
    print('    ' + re.sub("[,]", "_",re.sub(r'[()]', '', column.columnDataType.name)) + ' ' + columnShortName + keyType +  extraAttributes)
  print('  }')
  print('')

# generate relationships, need to display keys in the description for sql generation
# https://www.tabnine.com/code/java/methods/schemacrawler.schemacrawler.SchemaCrawlerOptionsBuilder/includeGreppedColumns
for table in catalog.tables:  
  for foreignKeys in table.foreignKeys:
    relationshipTxt = str(foreignKeys.primaryKeyTable.primaryKey.columns) + " to " + str(foreignKeys.columns)
    relationshipTxt = "\"" + re.sub("[\"]", "\'", relationshipTxt) + "\"" 
    print('  ' + table.fullName + ' ||--o{ ' + str(foreignKeys.foreignKeyTable) + ' : '+ relationshipTxt)
  print('')
# old way
for table in catalog.tables:  
  for childTable in table.getRelatedTables(TableRelationshipType.child):
    print('  ' + table.name + ' ||--o{ ' + childTable.name + ' : "foreign key"')
  print('')
print('```')