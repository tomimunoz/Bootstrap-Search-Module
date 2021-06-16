var faker = require("faker");
var fs = require('fs');

var database = { products: [] };

for (var i = 1; i <= 300; i++) {
  apoderados = {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    info: faker.lorem.sentences()
  };
  // console.log(apoderados)
  database.products.push({
    id: i,
    name: faker.company.companyName(),
    cuit: faker.address.zipCode(),
    apoderados:  personas = [apoderados],
    description: faker.lorem.sentences(),
    description2: faker.lorem.sentences(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
  });
}

// console.log(JSON.stringify(database));
fs.writeFile('server/jsonfilePRUEBA.json', JSON.stringify(database), function(err) {
  if (err) throw err;
  console.log('complete');
  });