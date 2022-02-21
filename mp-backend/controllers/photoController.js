const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')

const Photo = db.photos

// photo creation
const addPhoto = async (req, res) => {
    let info = {
        image: req.file.path,
        title: req.body.title,
        date: req.body.date,
        description: req.body.description
    }
    const photo = await Photo.create(info)
    res.status(200).send(photo)
    console.log(photo)
}

// get all photos
const getAllPhotos = async (req, res) => {
    let photos = await Photo.findAll({})
    res.status(200).send(photos)
}

// get single photo
const getOnePhoto = async (req, res) => {
    let id = req.params.id
    let photo = await Photo.findOne({ where: { id: id }})
    res.status(200).send(photo)

}

// update Photo
const updatePhoto = async (req, res) => {
    let id = req.params.id
    const photo = await Photo.update(req.body, { where: { id: id }})
    res.status(200).send(photo)
}

// delete photo by id
const deletePhoto = async (req, res) => {
    let id = req.params.id
    await Photo.destroy({ where: { id: id }} )
    res.status(200).send('Photo is deleted!')
}
  
// Upload Image Controller
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')

module.exports = {
    addPhoto,
    getAllPhotos,
    getOnePhoto,
    updatePhoto,
    deletePhoto,
    upload 
}