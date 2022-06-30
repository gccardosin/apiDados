//Importa dependencias externas
const express = require('express');

//importa o controlador de produto
const restauranteController = require('../controladores/CadRest');

//criando gerenciador de rotas
const router = express.Router();

//Obtendo o produto
router.get('/:id', restauranteController.detalhar);

//listar todos os produtos
router.get('/', restauranteController.listar);

//criar um produto
router.post('/', restauranteController.criar);

//alterar um produto
router.put('/', restauranteController.alterar);

//excluir um produto
router.delete('/:id', restauranteController.excluir);

module.exports = router;