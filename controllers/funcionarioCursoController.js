let db = require("../models")

module.exports = {

    findAll:async (req,res)=>{
        try{
            let funcionarioCurso = await db.funcionarioCurso.findAll({})
            res.json(funcionarioCurso)
        }
        catch(error){
            sendStatus(400)
        }
    },
    create: async(req,res)=>{

        try{
            let funcionarioCurso = await db.funcionarioCurso.create(req.body)
            res.json(funcionarioCurso)

        }catch(error){
            res.sendStatus(400)
        }

    },
    update: async(req,res)=>{
        try{
            let result = await db.funcionarioCurso.update(req.body,{where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    delete: async(req,res)=>{
        try{
            let result = await db.funcionarioCurso.destroy({where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    findByPk: async(req,res)=>{
        try{
            let result = await db.funcionarioCurso.findByPk(req.params.id)
            res.json(result)

        }catch(error){
            res.sendStatus(400)

        }
    }

}

/*SELECT nome FROM usuarios 
INNER JOIN funcionarios 
ON usuarios.Id = funcionarios.usuarioId 
INNER JOIN funcionarioCursos 
ON funcionarios.Id = funcionarioCursos.funcionarioId 
INNER JOIN cursos 
ON funcionarioCursos.cursoId  = cursos.id 
WHERE cursoId = 1 */


//https://stackoverflow.com/questions/20460270/how-to-make-join-queries-using-sequelize-on-node-js


