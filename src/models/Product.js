module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
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
          peso: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          preco: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          descricao: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          imagem: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
            }
    }, {
        tableName: "products",
        timeStamps: true
    })
    Product.associate = (Models) => {
        Product.hasOne(Models.User, {
            foreignKey: "user_id",
            as: "users"
        })
    }

    return Product;
}