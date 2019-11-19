module.exports = function(app){

    //curso
    var cursoController = require('../controllers/cursoController')
        
    app.route('/cursos')
    .get(cursoController.findAll)
    .post(cursoController.create);
    
    app.route('/cursos/:id')
    .get(cursoController.findByPk)
    .put(cursoController.update)
    .delete(cursoController.delete);
    
    
    //funcao
    var funcaoController = require('../controllers/funcaoController')
        
    app.route('/funcoes')
    .get(funcaoController.findAll)
    .post(funcaoController.create);
    
    app.route('/funcoes/:id')
    .get(funcaoController.findByPk)
    .put(funcaoController.update)
    .delete(funcaoController.delete);
    
    //funcaoCurso
    var funcaoCursoController = require('../controllers/funcaoCursoController')
        
    app.route('/funcaoCursos')
    .get(funcaoCursoController.findAll)
    .post(funcaoCursoController.create);
    
    app.route('/funcaoCursos/:id')
    .get(funcaoCursoController.findByPk)
    .put(funcaoCursoController.update)
    .delete(funcaoCursoController.delete);
    
    //funcionario
    var funcionarioController = require('../controllers/funcionarioController')
        
    app.route('/funcionarios')
    .get(funcionarioController.findAll)
    .post(funcionarioController.create);
    
    app.route('/funcionarios/:id')
    .get(funcionarioController.findByPk)
    .put(funcionarioController.update)
    .delete(funcionarioController.delete);
    
    //funcionarioCurso
    var funcionarioCursoController = require('../controllers/funcionarioCursoController')
        
    app.route('/funcionarioCursos')
    .get(funcionarioCursoController.findAll)
    .post(funcionarioCursoController.create);
    
    app.route('/funcionarioCursos/:id')
    .get(funcionarioCursoController.findByPk)
    .put(funcionarioCursoController.update)
    .delete(funcionarioCursoController.delete);
    
    //setor
    var setorController = require('../controllers/setorController')
        
    app.route('/setores')
    .get(setorController.findAll)
    .post(setorController.create);
    
    app.route('/setores/:id')
    .get(setorController.findByPk)
    .put(setorController.update)
    .delete(setorController.delete);
    
    
    //usuário
    var usuarioController = require('../controllers/usuarioController')
        
    app.route('/usuarios')
    .get(usuarioController.findAll)
    .post(usuarioController.create);
    
    app.route('/usuarios/:id')
    .get(usuarioController.findByPk)
    .put(usuarioController.update)
    .delete(usuarioController.delete);
    
    }