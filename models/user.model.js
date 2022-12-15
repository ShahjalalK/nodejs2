const { v4: uuidv4 } = require('uuid');

const ParsonData = [
    {
        id: uuidv4(),
        userName: 'Shahjalal',
        email: 'shahjalal@gmail.com'
    },
    {
        id: uuidv4(),
        userName: 'shamim',
        email: 'shamim@gmail.com'
    },
]

module.exports = ParsonData