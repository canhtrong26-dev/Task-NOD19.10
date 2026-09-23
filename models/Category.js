const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = sequelize.define("Category", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
});


Category.associate = (models) => {
  Category.hasMany(models.Course, { foreignKey: 'categoryId' });
};



module.exports = Category;