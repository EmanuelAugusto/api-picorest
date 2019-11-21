let db = require("../models")

module.exports = {

    findAll:async (req,res)=>{
        try{
            let funcao = await db.funcao.findAll({})
            res.json(funcao)
        }
        catch(error){
            sendStatus(400)
        }
    },
    create: async(req,res)=>{

        try{
            let funcao = await db.funcao.create(req.body)
            res.json(funcao)

        }catch(error){
            res.sendStatus(400)
        }

    },
    update: async(req,res)=>{
        try{
            let result = await db.funcao.update(req.body,{where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    delete: async(req,res)=>{
        try{
            let result = await db.funcao.destroy({where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    findByPk: async(req,res)=>{
        try{
            let result = await db.funcao.findByPk(req.params.id)
            res.json(result)

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