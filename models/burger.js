module.exports = function(sequelize, DataTypes){
    var Burgers = sequelize.define("Burgers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATEONLY
        }
    });
    return Burgers;
};
