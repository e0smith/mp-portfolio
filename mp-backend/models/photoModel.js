module.exports = (sequelize, DataTypes) => {

    const Photo = sequelize.define("photo", {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    })

    return Photo

}