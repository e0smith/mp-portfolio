const db = require('../models')
pry = require('pryjs')

// create main Model
const Portfolio = db.portfolios

// create portfolio
const addPortfolio = async (req, res) => {
    // eval(pry.it)
    let info = {
        title: req.body.title,
        description: req.body.description
    }
    const portfolio = await Portfolio.create(info)
    res.status(200).send(portfolio)
    console.log(portfolio)
}

// get all portfolios
const getAllPortfolios = async (req, res) => {
    eval(pry.it)
    let portfolios = await Portfolio.findAll({})
    res.status(200).send(portfolios)

}

// get single portfolio
const getOnePortfolio = async (req, res) => {
    let id = req.params.id
    let portfolio = await Portfolio.findOne({ where: { id: id }})
    res.status(200).send(portfolio)
}

// update Portfolio
const updatePortfolio = async (req, res) => {
    let id = req.params.id
    const portfolio = await Portfolio.update(req.body, { where: { id: id }})
    res.status(200).send(portfolio)
}

// delete portfolio by id
const deletePortfolio = async (req, res) => {
    let id = req.params.id
    await Portfolio.destroy({ where: { id: id }} )
    res.status(200).send('Portfolio is deleted !')
}

// get all photos that belong to portfolio
const getPortfolioPhotos =  async (req, res) => {
    const id = req.params.id
    const data = await Portfolio.findOne({
        include: [{
            model: Photo,
            as: 'photo'
        }],
        where: { id: id }
    })
    res.status(200).send(data)
}

module.exports = {
    addPortfolio,
    getAllPortfolios,
    getOnePortfolio,
    updatePortfolio,
    deletePortfolio,
    getPortfolioPhotos,
}