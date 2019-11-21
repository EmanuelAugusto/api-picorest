let db = require("../models")

module.exports = {

    
    /*findAll:async (req,res)=>{
        var funcionarioFiltrado = [];
            try{
                let funcionario = await db.funcionario.findAll({
                    attributes:['id','matricula','cpf','ctps','admissao','demissao','sexo','numero','logradouro','bairro','cidade','uf'],
                    include: 
                    ([
                        {model: db.usuario,
                        attributes:['id','nome','email','passWorld']  
                    },{
                        model: db.setor,
                        attributes:['id','descricao']
                    },{
                        model: db.funcao,
                        attributes:['id','descricao']
                      }//,{
                    //     model: db.funcionariocurso,
                    //     attributes:['id','comprovante'],
                        // include: {
                        //     model: db.curso,
                        //     attributes:['id','descricao']
                        // }
                     //}
                    ])
                })
                for (var i = 0; i < funcionario.length; i++) {
                 funcionarioFiltrado.push({
                 id: funcionario[i].id,
                 nome: funcionario[i].usuario.nome,
                 setor: funcionario[i].setor.descricao,
                 funcao: funcionario[i].funcao.descricao,
                 //cursoId: funcionario[i].funcionariocurso.comprovante
                 //curso: funcionario[i].curso.descricao
                });
    
                }
    
                res.json(funcionarioFiltrado);
            }
            catch(error){
                res.sendStatus(400)
            }
        },*/


    findAll:async (req,res)=>{
        try{
            let funcionario = await db.funcionario.sequelize.query('SELECT u.nome, s.descricao AS setor, f.descricao AS funcao, fr.matricula, fc.comprovante, c.descricao AS curso FROM usuarios AS u INNER JOIN funcionarios AS fr ON u.id = fr.usuarioId INNER JOIN setors AS s ON s.id = fr.setorId INNER JOIN funcaos AS f ON f.id = fr.funcaoId INNER JOIN funcionarioCursos AS fc ON fr.id = fc.funcionarioId INNER JOIN cursos AS c ON c.id = fc.cursoId WHERE u.id = :userId ',
            { replacements: { userId: req.body.usuarioId  }, type: db.funcionario.sequelize.QueryTypes.SELECT }
            )
            res.json(funcionario)
        }
        catch(error){
            console.log(error)
            res.sendStatus(400)
        }
    },



//     sequelize.query('SELECT * FROM users WHERE name LIKE :search_name ',
//     { replacements: { search_name: 'ben%'  }, type: sequelize.QueryTypes.SELECT }
//   ).then(projects => {
//     console.log(projects)
//   }








    create: async(req,res)=>{

        try{
            let funcionario = await db.funcionario.create(req.body)
            res.json(funcionario)

        }catch(error){
            res.sendStatus(400)
        }

    },
    update: async(req,res)=>{
        try{
            let result = await db.funcionario.update(req.body,{where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    delete: async(req,res)=>{
        try{
            let result = await db.funcionario.destroy({where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    


       
    findByPk: async(req,res)=>{
        try{
            let result = await db.funcionario.findByPk(req.params.id,{attributes:['id','matricula','cpf','ctps','admissao','demissao','sexo','numero','logradouro','bairro','cidade','uf'],
            include: 
            [
               {model: db.usuario,
                attributes:['id','nome','email','passWorld'], 
                include: 
                [
                    {model: db.funcionario,
                     attributes:['matricula'],
                     include: 
                [
                    {model: db.funcionarioCurso,
                        attributes:['comprovante'],
                        include: 
                        [
                            {model: db.curso,
                             attributes:['descricao'],
                                 
                            }    
                        ]
                    }
                ]
                    }
                ]
            },{
                model: db.setor,
                attributes:['id','descricao']
            },{
                model: db.funcao,
                attributes:['id','descricao']
              }

            ]
            
            })
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
// include: [
//     {model: db.usuario,
//     attributes:['id','nome','email','passWorld']   
// }],
// include: [{
//     model: db.setor,
//     attributes:['id','descricao']
// }],
// include: [{
//     model: db.funcao,
//     attributes:['id','descricao']
// }]
/*let funcionario = await db.funcionario.findAll({
                attributes:['id','matricula','cpf','ctps','admissao','demissao','sexo','numero','logradouro','bairro','cidade','uf'],
                include: [
                    {model: db.usuario,
                    attributes:['id','nome','email','passWorld'],
                    include: [{
                        model
                    }]
                },{ */