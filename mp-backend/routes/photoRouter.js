// import controllers
const photoController = require('../controllers/photoController')

// router
const router = require('express').Router()

// use routers
router.post('/addPhoto', photoController.upload, photoController.addPhoto)
router.get('/allPhotos', photoController.getAllPhotos)

// Photo Url and Controller
router.get('/allPhotos', photoController.getAllPhotos)
router.post('/addPhoto/:id', photoController.addPhoto)

// Photo router
router.get('/:id', photoController.getOnePhoto)
router.put('/:id', photoController.updatePhoto)
router.delete('/:id', photoController.deletePhoto)

module.exports = router