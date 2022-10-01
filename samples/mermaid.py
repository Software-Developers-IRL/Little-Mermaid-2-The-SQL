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
    if(keyType != "" and column.partOfForeignKey ):
       keyType = " FK"
    # dont need to define FK can get through relationships
    # keyType += (""  if keyType == "" else ",") + "FK" if column.partOfForeignKey else ""
    extraAttributes = ""
    if(columnFullName != ""):
      extraAttributes += columnFullName
    
    if(extraAttributes != ""):
      extraAttributes = " \"" + extraAttributes + "\""
    print('    ' + re.sub("[,]", "_",re.sub(r'[()]', '', column.columnDataType.name)) + ' ' + columnShortName + keyType +  extraAttributes)
  print('  }')
  print('')

for table in catalog.tables:  
  for childTable in table.getRelatedTables(TableRelationshipType.child):
    print('  ' + table.name + ' ||--o{ ' + childTable.name + ' : "foreign key"')
  print('')
print('```')