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
  tableFullName = re.sub("[\"\']", "", table.fullName).replace(" ","_").replace(".","_")
  print('  ' + tableFullName + ' {')
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
    print('    ' + re.sub("[,]", "_",re.sub(r'[()]', '', column.columnDataType.name)) + ' ' + columnShortName + keyType +  extraAttributes)
  print('  }')
  print('')

# generate relationships, need to display keys in the description for sql generation
# https://www.tabnine.com/code/java/methods/schemacrawler.schemacrawler.SchemaCrawlerOptionsBuilder/includeGreppedColumns
for table in catalog.tables:  
  tableOriginal = re.sub("[\"\']", "", table.fullName)
  tableFullName = tableOriginal.replace(" ","_").replace(".","_")
  # print (tableFullName)
  addSpace = False
  for foreignKeys in table.foreignKeys:
    fkTableOriginal = str(foreignKeys.primaryKeyTable)
    fkTableFullName = fkTableOriginal.replace(" ", "_").replace(".","_")
    if(tableFullName != fkTableFullName): 
      addSpace = True
      relationshipTxt = str(foreignKeys.primaryKeyTable.primaryKey.columns) + " to " + str(foreignKeys.columns)
      relationshipTxt = "\"" + re.sub("[\"]", "\'", relationshipTxt) + "\"" 
      relationshipTxt = relationshipTxt.replace(tableOriginal,tableFullName).replace(fkTableOriginal, fkTableFullName)
      # str(foreignKeys.foreignKeyTable)
      print('  ' + fkTableFullName + ' ||--o{ ' + tableFullName + ' : '+ relationshipTxt)
  if(addSpace):
    print('')
# old way
# for table in catalog.tables:  
#   for childTable in table.getRelatedTables(TableRelationshipType.child):
#     print('  ' + table.name + ' ||--o{ ' + childTable.name + ' : "foreign key"')
#   print('')
print('```')