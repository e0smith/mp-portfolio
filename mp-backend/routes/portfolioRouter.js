const portfolioController = require('../controllers/portfolioController')

const router = require('express').Router()

router.get('/:id', portfolioController.getOnePortfolio)
router.get('/', portfolioController.getAllPortfolios)

// router.get('/getPortfolioPhotos/:id', portfolioController.getPortfolioPhotos)
router.post('/addPortfolio', portfolioController.addPortfolio)
router.put('/:id', portfolioController.updatePortfolio)
router.delete('/:id', portfolioController.deletePortfolio)

module.exports = router