mkdir api

npm init -y(create the project)

npm install -s express body-parser sequelize mariadb mysql2(install the dependences)
npm i -D nodemon sequelize-cli

code .(open the visual code)

crie o arquivo server.js

npx sequelize-cli init(cria as pastas: config, models, migrations e seeders)
*Renomei o arquivo "/config/config.json" para config.js, não esquecer de renomea-lo em "/models/index.js"

module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "Picorestdb",
    "host": "localhost",
    "dialect": "mariadb",
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "picorestdb",
    "host": "localhost",
    "dialect": "mariadb",
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "Picorestdb",
    "host": "127.0.0.1",
    "dialect": "mariadb",
  }
}

npx sequelize-cli db: create (cria o banco, setado no arquivo de configuração)

CRIANDO AS MIGRATIONS:(não deixe espaços entre os atributos)
npx sequelize-cli model:generate --name usuario --attributes nome:STRING,email:STRING,passWorld:STRING
npx sequelize-cli model:generate --name setor --attributes descricao:STRING
npx sequelize-cli model:generate --name funcao --attributes descricao:STRING

npx sequelize-cli model:generate --name curso --attributes descricao:STRING,cargaHoraria:STRING,dataInicio:DATE,dataConclusao:DATE
npx sequelize-cli model:generate --name funcaoCurso --attributes funcaoId:INTEGER,cursoId:INTEGER

npx sequelize-cli model:generate --name funcionario --attributes matricula:STRING,cpf:STRING,ctps:STRING,admissao:DATE,demissao:DATE,
sexo:STRING,numero:STRING,logradouro:STRING,bairro:STRING,cidade:STRING,uf:STRING,usuarioId:INTEGER,setorId:INTEGER,funcaoId:INTEGER

npx sequelize-cli model:generate --name funcionarioCurso --attributes comprovante:STRING,cargaHoraria:STRING,dataInicio:DATE,
dataConclusao:DATE,funcionarioId:INTEGER,cursoId:INTEGER


npx sequelize-cli db:migrate(starta as migrations= cria as tabelas no banco)
npx sequelize-cli db:migrate:undo(desfaz a migration mas recente)
npx sequelize-cli db:migrate:undo:all(desfaz todas as migratons)
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js(desfaz uma migration específica)

associações dos módulos:

funcaoCurso.associate = function(models) {
    funcaoCurso.belongsToMany(models.funcao,{
      through: 'funcaoCursos',
      foreignKey: 'funcaoId', 
      soucerKey: 'funcaoId'  
    })
    funcaoCurso.belongsToMany(models.curso,{
      through: 'funcaoCursos',
      foreignKey: 'cursoId', 
      soucerKey: 'cursoId'  
    })

funcionario.associate = function(models) {
    funcionario.belongsTo(models.usuario,{ 
      foreignKey: 'usuarioId',
      soucerKey: 'usuarioId'
    })
    funcionario.belongsTo(models.setor,{ 
      foreignKey: 'setorId',
      soucerKey: 'setorId'
    })
    funcionario.belongsTo(models.funcao,{ 
      foreignKey: 'funcaoId',
      soucerKey: 'funcaoId'
    })

funcionarioCurso.associate = function(models) {
    funcionarioCurso.belongsToMany(models.funcionario,{
      through: 'funcionarioCursos',
      foreignKey: 'funcionarioId', 
      soucerKey: 'funcionarioId'  
    })
    funcionarioCurso.belongsToMany(models.curso,{
      through: 'funcionarioCursos',
      foreignKey: 'cursoId', 
      soucerKey: 'cursoId'  
    })

Rotas:

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


INSERTS






INSERT INTO `cursos` (`descricao`,`createdAt`,`updatedAt`) VALUES ('java','2019-11-13','2019-11-13');
INSERT INTO `cursos` (`descricao`,`createdAt`,`updatedAt`) VALUES ('javascript','2019-11-13','2019-11-13');
INSERT INTO `cursos` (`descricao`,`createdAt`,`updatedAt`) VALUES ('c#','2019-11-13','2019-11-13');
INSERT INTO `cursos` (`descricao`,`createdAt`,`updatedAt`) VALUES ('c++','2019-11-13','2019-11-13');
INSERT INTO `cursos` (`descricao`,`createdAt`,`updatedAt`) VALUES ('web','2019-11-13','2019-11-13');


INSERT INTO `setors` (`descricao`,`createdAt`,`updatedAt`) VALUES ('Diretoria','2019-11-13','2019-11-13');
INSERT INTO `setors` (`descricao`,`createdAt`,`updatedAt`) VALUES ('inovação','2019-11-13','2019-11-13');
INSERT INTO `setors` (`descricao`,`createdAt`,`updatedAt`) VALUES ('desemvolvimento','2019-11-13','2019-11-13');
INSERT INTO `setors` (`descricao`,`createdAt`,`updatedAt`) VALUES ('RH','2019-11-13','2019-11-13');
INSERT INTO `setors` (`descricao`,`createdAt`,`updatedAt`) VALUES ('UX','2019-11-13','2019-11-13');


INSERT INTO `funcaos` (`descricao`,`createdAt`,`updatedAt`) VALUES ('Analista','2019-11-13','2019-11-13');
INSERT INTO `funcaos` (`descricao`,`createdAt`,`updatedAt`) VALUES ('Analista jr','2019-11-13','2019-11-13');
INSERT INTO `funcaos` (`descricao`,`createdAt`,`updatedAt`) VALUES ('Analista senior','2019-11-13','2019-11-13');
INSERT INTO `funcaos` (`descricao`,`createdAt`,`updatedAt`) VALUES ('Analista pleno','2019-11-13','2019-11-13');
INSERT INTO `funcaos` (`descricao`,`createdAt`,`updatedAt`) VALUES ('gerente','2019-11-13','2019-11-13');


INSERT INTO `usuarios` (`nome`,`email`,`passWorld`,`createdAt`,`updatedAt`) VALUES ('Israel Jerônimo','kfkfkf@kfkf.com','d4d4dd4','2019-11-13','2019-11-13');
INSERT INTO `usuarios` (`nome`,`email`,`passWorld`,`createdAt`,`updatedAt`) VALUES ('Ramon Uriel','kfkfkf@kfkf.com','d4d4dd4','2019-11-13','2019-11-13');
INSERT INTO `usuarios` (`nome`,`email`,`passWorld`,`createdAt`,`updatedAt`) VALUES ('Emanuel','kfkfkf@kfkf.com','d4d4dd4','2019-11-13','2019-11-13');
INSERT INTO `usuarios` (`nome`,`email`,`passWorld`,`createdAt`,`updatedAt`) VALUES ('John','kfkfkf@kfkf.com','d4d4dd4','2019-11-13','2019-11-13');
INSERT INTO `usuarios` (`nome`,`email`,`passWorld`,`createdAt`,`updatedAt`) VALUES ('Mateus','kfkfkf@kfkf.com','d4d4dd4','2019-11-13','2019-11-13');


INSERT INTO `funcionarios` (`matricula`,`cpf`,`ctps`,`admissao`,`demissao`,`sexo`,`numero`,`logradouro`,`bairro`,`cidade`,`uf`,`usuarioId`,`setorId`,
`funcaoId`,`createdAt`,`updatedAt`) VALUES ('4d4d','1444525','555554','2019-11-13','2019-11-13','m','124','rua 1','longe','far away','pe',1, 1, 1,'2019-11-13','2019-11-13');
INSERT INTO `funcionarios` (`matricula`,`cpf`,`ctps`,`admissao`,`demissao`,`sexo`,`numero`,`logradouro`,`bairro`,`cidade`,`uf`,`usuarioId`,`setorId`,
`funcaoId`,`createdAt`,`updatedAt`) VALUES ('4d4d','144452','555554','2019-11-13','2019-11-13','m','124','rua 1','longe','far away','pe', 2, 2, 2,'2019-11-13','2019-11-13');
INSERT INTO `funcionarios` (`matricula`,`cpf`,`ctps`,`admissao`,`demissao`,`sexo`,`numero`,`logradouro`,`bairro`,`cidade`,`uf`,`usuarioId`,`setorId`,
`funcaoId`,`createdAt`,`updatedAt`) VALUES ('4d4d','14445','555554','2019-11-13','2019-11-13','m','124','rua 1','longe','far away','pe', 3, 3, 3,'2019-11-13','2019-11-13');
INSERT INTO `funcionarios` (`matricula`,`cpf`,`ctps`,`admissao`,`demissao`,`sexo`,`numero`,`logradouro`,`bairro`,`cidade`,`uf`,`usuarioId`,`setorId`,
`funcaoId`,`createdAt`,`updatedAt`) VALUES ('4d4d','144452554','555554','2019-11-13','2019-11-13','m','124','rua 1','longe','far away','pe', 4, 4, 4,'2019-11-13','2019-11-13');
INSERT INTO `funcionarios` (`matricula`,`cpf`,`ctps`,`admissao`,`demissao`,`sexo`,`numero`,`logradouro`,`bairro`,`cidade`,`uf`,`usuarioId`,`setorId`,
`funcaoId`,`createdAt`,`updatedAt`) VALUES ('4d4d','144452554','555554','2019-11-13','2019-11-13','m','124','rua 1','longe','far away','pe', 5, 5, 5,'2019-11-13','2019-11-13');


INSERT INTO `funcionarioCursos` (`comprovante`,`cargaHoraria`,`dataInicio`,`dataConclusao`,`funcionarioId`,`cursoId`,`createdAt`,`updatedAt`) VALUES ('comprovante93939','36 Horas','2019-11-13','2019-11-13', 1, 1,'2019-11-13','2019-11-13');
INSERT INTO `funcionarioCursos` (`comprovante`,`cargaHoraria`,`dataInicio`,`dataConclusao`,`funcionarioId`,`cursoId`,`createdAt`,`updatedAt`) VALUES ('comprovante93909','36 Horas','2019-11-13','2019-11-13', 2, 2,'2019-11-13','2019-11-13');
INSERT INTO `funcionarioCursos` (`comprovante`,`cargaHoraria`,`dataInicio`,`dataConclusao`,`funcionarioId`,`cursoId`,`createdAt`,`updatedAt`) VALUES ('comprovante93939','36 Horas','2019-11-13','2019-11-13', 3, 3,'2019-11-13','2019-11-13');
INSERT INTO `funcionarioCursos` (`comprovante`,`cargaHoraria`,`dataInicio`,`dataConclusao`,`funcionarioId`,`cursoId`,`createdAt`,`updatedAt`) VALUES ('comprovante93939','36 Horas','2019-11-13','2019-11-13', 4, 4,'2019-11-13','2019-11-13');
INSERT INTO `funcionarioCursos` (`comprovante`,`cargaHoraria`,`dataInicio`,`dataConclusao`,`funcionarioId`,`cursoId`,`createdAt`,`updatedAt`) VALUES ('comprovante93939','36 Horas','2019-11-13','2019-11-13', 5, 5,'2019-11-13','2019-11-13');







https://sequelize.org/master/manual/migrations.html#creating-first-model--and-migration-
https://medium.com/@rogeriothe_48115/relacionamentos-com-sequelize-guia-final-2b3baf21b2a1
https://blog.rocketseat.com.br/nodejs-express-sequelize/
https://stackoverflow.com/questions/21949554/how-do-sequelize-getter-and-setters-work
