const { age, date } = require('../../lib/utils')

module.exports = {
    index(req, res){
        
        return res.render("members/index")

    },
    create(req, res){
        
        return res.render("members/create")

    },
    post(req, res){
        const keys = Object.keys(req.body) //CRIA UM OBJETO QUE TEM VARIAS FUNÇÕES// CRIOU UM ARRAY DE CHAVES -> { }

    for (key of keys) { //PERCORRE O ARRAY DO FORMULARIO
        //req.body.avatar_url == ""
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }


    let {avatar_url, birth, id, name, services, gender} = req.body

        return

    },
    show(req, res){

        return
        
    },
    edit(req, res){

        return

    },
    put(req, res){
        const keys = Object.keys(req.body) //CRIA UM OBJETO QUE TEM VARIAS FUNÇÕES// CRIOU UM ARRAY DE CHAVES -> { }

    for (key of keys) { //PERCORRE O ARRAY DO FORMULARIO
        //req.body.avatar_url == ""
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }

        return

    },
    delete(req, res){

        return

    },
}

