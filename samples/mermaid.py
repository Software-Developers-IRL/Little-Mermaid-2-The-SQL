from schemacrawler.schema import TableRelationshipType # pylint: disable=import-error
import re

print('erDiagram')
print('')
for table in catalog.tables:
  print('  ' + table.fullName + ' {')
  for column in table.columns:
    print('    ' + re.sub(r'\([\d ,]+\)', '', column.columnDataType.name) + ' ' + column.name)
  print('  }')
  print('')

for table in catalog.tables:  
  for childTable in table.getRelatedTables(TableRelationshipType.child):
    print('  ' + table.name + ' ||--o{ ' + childTable.name + ' : "foreign key"')
  print('')