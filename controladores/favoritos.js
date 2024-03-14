const {getTodosFavoritos, deletaFavoritoPorId, insereFavorito} = require('../servicos/favoritos')

function getFavoritos(req, res){
    try {
        const favoritos = getTodosFavoritos()
        res.send(favoritos)
    }
    catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res){
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201)
        res.send('Livro inserido com sucesso.')
    }
    catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res){
    try {
        const id = req.params.id

        if (id && Number(id)){
            deletaFavoritoPorId(id)
            res.send("Livro deletado com sucesso.")
        }
        else {
            res.status(422)
            res.send("Id inválido.")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}