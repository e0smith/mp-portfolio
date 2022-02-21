module.exports = (sequelize, DataTypes) => {

    const Portfolio = sequelize.define("portfolio", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    })

    return Portfolio

}