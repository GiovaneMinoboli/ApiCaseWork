const api = require("./api")
const express = require('express')
const server =  express()

server.use(express.json())
server.listen(8000)

server.get('/', (req, res) => {
    res.send({ message: 'Giovane'})
})

// enquanto o array numeros for diferente de vazio, pega o conteudo, faz o processo de ordenação, armazena e mostra
server.get('/numbers', async (req, res) => {
    let id = 1
    let cont = 1
    let num = []
    let aux
    while (cont = 1) {
        try {
            const { data } = await api.get(`numbers?page=${id}`)
            
            numeros = data.numbers
            
            for (j = 0; j < numeros.length; j++) {
                num.push(numeros[j])
                for (k = 0; k < num.length; k++) {
                    for (l = k + 1; l <= num.length; l++) {
                        if(num[k] > num[l]) {
                            aux = num[l]
                            num[l] = num[k]
                            num[k] = aux
                        }
                    }
                }
            }
            if (numeros.length != 0) {
                console.log(id)
                id++
            } else {
                cont = 2
            }
        } catch (error) {
            console.log(num)
            return res.send({ error: error.message})
        }
    }
    return res.send({ numbers: num })
})