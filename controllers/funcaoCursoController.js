let db = require("../models")

module.exports = {

    findAll:async (req,res)=>{
        try{
            let funcaoCurso = await db.funcaoCurso.findAll({})
            res.json(funcaoCurso)
        }
        catch(error){
            sendStatus(400)
        }
    },
    create: async(req,res)=>{

        try{
            let funcaoCurso = await db.funcaoCurso.create(req.body)
            res.json(funcaoCurso)

        }catch(error){
            res.sendStatus(400)
        }

    },
    update: async(req,res)=>{
        try{
            let result = await db.funcaoCurso.update(req.body,{where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    delete: async(req,res)=>{
        try{
            let result = await db.funcaoCurso.destroy({where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    findByPk: async(req,res)=>{
        try{
            let result = await db.funcaoCurso.findByPk(req.params.id)
            res.json(result)

        }catch(error){
            res.sendStatus(400)

        }
    }

}


