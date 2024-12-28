const { faker } = require("@faker-js/faker")

function generateEmail() {
    const newEmail = faker.internet.email()
    return newEmail
}

module.exports = {
    generateEmail
}

