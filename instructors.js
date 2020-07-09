const fs = require('fs') //fire sistem
const data = require("./data.json")
const { age, date } = require('./utils')


//Show
exports.show = function(req, res) {
    //req.params
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        return id == instructor.id
    })

    if(!foundInstructor) return res.send("instructor not found")

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","), //Método split gera um array separado de virgula
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at),//constructor Intl
    }

    return res.render("instructors/show", { instructor })
}

//Create
exports.post = function(req, res) {  //responsavel por exportar as funções aqui utilizadas
    //req.query
    
    //req.body
    const keys = Object.keys(req.body) //CRIA UM OBJETO QUE TEM VARIAS FUNÇÕES// CRIOU UM ARRAY DE CHAVES -> { }

    for (key of keys) { //PERCORRE O ARRAY DO FORMULARIO
        //req.body.avatar_url == ""
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }


    let {avatar_url, birth, id, name, services, gender} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })
    
    // return res.send(req.body)
}

//edit
exports.edit =  function(req, res) {
    //req.params
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        return id == instructor.id
    })

    if(!foundInstructor) return res.send("instructor not found")

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)
    }

    return res.render("instructors/edit", { instructor })
}

