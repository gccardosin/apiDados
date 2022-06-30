//importando dependencias internas
const Restaurante = require('../modelos/CadRest');

//Controller para criar um novo restaurante
const criar = async (req, res) => {
    //Obtendo dados vindo do formulario ou via REST POST
    const { nome, cnpj, rua, estado, cidade } = req.body;

    const resultadoCreate = await Produto.create({
        nome, 
        cnpj, 
        rua, 
        estado, 
        cidade
    });
    console.log('criou produto >>>', resultadoCreate);
    res.json({status: true});

};

//Controller para alterar um produto
const alterar = async (req, res) => {
    //Obtendo dados vindo do formulario ou via REST POST
    const {id, nome, cnpj, rua, estado, cidade } = req.body;

    //Buscar o produto no banco para alteração
    const restaurante = await Restaurante.findByPk(id);
    restaurante.nome = nome;
    restaurante.cnpj = cnpj;
    restaurante.rua = rua;
    restaurante.estado = estado;
    restaurante.cidade = cidade;

    const resultadoUpdate = await produto.save({
        nome,
        cnpj,	
        rua,
        estado,
        cidade
    });
    console.log('alterou produto >>>', resultadoUpdate);
    res.json({status: true});
};

//Controller para deletar um restaurante
const excluir = async (req, res) => {
    //Obtendo id para o restaurante ser excluido
    const { id } = req.params;

    //Buscar o produto no banco pára excluir
    const restaurante = await restaurante.findByPk(id);
    produto.destroy();
    console.log('excluido o produto >>>', restaurante);
    res.json({status: true});
};

//controller para detalhar/buscar um restaurante 
const detalhar = async (req, res) => {
    //Obtendo id para o restaurante ser buscado
    const { id } = req.params;

    //Buscar o produto no banco 
    const restaurante = await restaurante.findByPk(id);
    console.log('Obteve o produto >>>', restaurante);
    res.json({restaurante});
}

//controller para listar um produto
const listar = async (req, res) => {
    //listando todos os produtos
    const restaurante = await Restaurante.findAll();
    console.log('Listando todos os produtos >>>', restaurante);
    res.json({restaurante});
}


//exportando os controllers
module.exports = {criar, alterar, excluir, detalhar, listar};