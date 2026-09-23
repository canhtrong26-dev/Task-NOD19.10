const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Course = sequelize.define("Course", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: false },
  instructor: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  categoryId: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
      model: 'Categories',
      key: 'id'
    }
  },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
});



Course.associate = (models) => {
  Course.belongsTo(models.Category, { foreignKey: 'categoryId' });
};



module.exports = Course;    