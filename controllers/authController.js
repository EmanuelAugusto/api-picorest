let db = require('../models');

module.exports = {
	findAll:async (req,res)=>{
        try{
            let usuario = await db.usuario.findAll({})
            res.send(req.body)
            //res.send("ola mundo")
        }
        catch(error){
            res.sendStatus(400)
        }
    },
}