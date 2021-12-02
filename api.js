const axios = require('axios')
const api = axios.create({
    baseURL: 'http://challenge.dienekes.com.br/api/'
})

module.exports = api