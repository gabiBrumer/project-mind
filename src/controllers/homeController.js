const homeController = {
    showRegister: (req, res) => {
        return res.render('./home/cadastro', {title: 'Cadastre-se'})
    },
    registerProcess: (req, res) => {
       return res.redirect('./home/login', {title: 'Cadastre-se'})
    },
    showLogin: (req, res) => {
        return res.render('./home/login', {title: 'Faça seu login'})
    },
    loginProcess: (req, res) => {
        return res.redirect('./admin/cadastroProduto', {title: 'Cadastre um produto'})
    }
}

module.exports = homeController;