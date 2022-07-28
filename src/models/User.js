module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          nome: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          senha: {
            type: DataTypes.STRING,
            allowNull: false
          },
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
    }, {
        tableName: "users",
        timeStamps: true
    })

    User.associate = (Models) => {
        User.hasMany(Models.Product, {
            as: "products",
            foreignKey: "user_id",
            sourceKey: "id"
        })
    }
    
    return User;
}