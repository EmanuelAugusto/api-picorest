let db = require("../models")

module.exports = {

    findAll:async (req,res)=>{
        try{
            let usuario = await db.usuario.findAll({})
            res.json(usuario)
        }
        catch(error){
            res.sendStatus(400)
        }
    },
    create: async(req,res)=>{

        try{
            let usuario = await db.usuario.create(req.body)
            res.json(usuario)

        }catch(error){
            res.sendStatus(400)
        }

    },
    update: async(req,res)=>{
        try{
            let result = await db.usuario.update(req.body,{where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    delete: async(req,res)=>{
        try{
            let result = await db.usuario.destroy({where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    findByPk: async(req,res)=>{
        var usuario =  [];
        try{
            let result = await db.usuario.findByPk(req.params.id)
            usuario.push({id: result.id,
                          nome: result.nome,
                          email: result.email,
                          senha: result.passWorld
                      })
            res.json(usuario)

        }catch(error){
            res.sendStatus(400)

        }
    }

}


// findAll:async (req,res)=>{
//     try{
//         let usuario = await db.users.findAll({
//             attributes:['id','name','email','age'],
//             include: [{
//                 model: db.tasks,
//                 attributes:['id','title','descript','createdAt',"userId"]
//             }]
//         })
//         res.json(users)
//     }
//     catch(error){
//         sendStatus(400)
//     }
// },