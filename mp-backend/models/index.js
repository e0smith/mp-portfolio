const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Connection has been established.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.portfolios = require('./portfolioModel.js')(sequelize, DataTypes)
db.photos = require('./photoModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('re-sync complete!')
})



// 1 to Many Relation

db.portfolios.hasMany(db.photos, {
    foreignKey: 'photo_id',
    as: 'photo'
})

db.photos.belongsTo(db.portfolios, {
    foreignKey: 'portfolio_id',
    as: 'portfolio'
})





module.exports = db