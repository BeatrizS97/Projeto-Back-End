const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Beatriz Silva',
        imagem: 'https://github.com/BeatrizS97.png',
        minibio: 'Estudante de análise e desenvolvimento de sistemas'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)