let database = require('./storage/db');

database.load();
database.put('first','firstValue');
database.put('second','secondValue');
database.put('third','thirdValue');
database.put('fourth','fourthValue');
console.log(database.get('first'));
console.log(database.getAll());
database.delete('second');
database.update('first','updateFirst');
database.save();
database.clear();
console.log(database.getAll());
database.load();
console.log(database.getAll());


