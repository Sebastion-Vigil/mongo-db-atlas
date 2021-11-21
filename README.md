# mongo-db-atlas
- https://www.shellhacks.com/mongodb-show-collection-data-mongo-shell/

## Select the database to use and list collections:

 - show dbs 
 - use <databaseName>
 - show collections

## Execute one of the following commands to show collection data in MongoDB:

 - db.<collectionName>.find() 

 - db.<collectionName>.find().pretty() 

## While showing collection data it may be useful to limit the number documents:

 - db.<collectionName>.find().limit(<number>)

 - db.<collectionName>.find().pretty().limit(<number>)
