const models = require('./models')

models.user.create({
    firstName: 'Joel',
    lastName: 'Hughes',
    userName: 'joel_h',
    email: 'joel.hughes@gmail.com',
    phoneNumber: '303-555-4444',
    age: 25,
    shirtSize: 'L'
}).catch(error => {console.log(error.message)})

models.user.create({
    firstName: 'Derek',
    lastName: 'Ensign',
    userName: 'joel_h',
    email: 'joel.hughes@gmail.com',
    phoneNumber: '303-555-4444',
    age: 25,
    shirtSize: 'L'
}).catch(error => {console.log(error.message)})


