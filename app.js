var azure = require('azure-storage');

accountName = "tabla01";
accountKey = "G1ohxJ0+kY1jAdQmXIisulO2Bsk8ao3btRx8RbnvmJLyZZCqmIDgN+UvenAID6cCtarqXh/7Myno/jU5dw1yeA=="

var tableService = azure.createTableService(accountName, accountKey);

tableService.createTableIfNotExists('mytableMarte', function(error, result, response) {
  if (!error) {
    console.log(response);
  }
});

var entGen = azure.TableUtilities.entityGenerator;

var entity = {
  PartitionKey: entGen.String('part2'),
  RowKey: entGen.String('row1'),
  boolValueTrue: entGen.Boolean(true),
  boolValueFalse: entGen.Boolean(false),
  intValue: entGen.Int32(42),
  dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
  complexDateValue: entGen.DateTime(new Date(Date.UTC(2013, 02, 16, 01, 46, 20)))
};
var task3 = {
  PartitionKey: {'_':'hometasks'},
  RowKey: {'_': '2'},
  description: {'_':'Renglon2222222222222sssss'},
  dueDate: {'_':new Date(2015, 6, 20), '$':'Edm.DateTime'}
};
var task2 = {
  PartitionKey: {'_':'hometasks2'},
  RowKey: {'_': '2'},
  description: {'_':'take out the trash!!!!!!!!!!!!'},
  dueDate: {'_':new Date(2015, 7, 20), '$':'Edm.DateTime'}
};

tableService.insertEntity('mytableMarte', task3, function(error, result, response) {
  if (!error) {
    console.log(result);
  }
});


tableService.retrieveEntity('mytableMarte', 'hometasks', '2', function(error, result, response) {
  if (!error) {
    console.log(result);
  }
});

//console.log(tableService.retrieveEntity);

