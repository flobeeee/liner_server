'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_page.init({
    user_id: DataTypes.INTEGER,
    page_id: DataTypes.INTEGER,
    text: DataTypes.STRING,
    colorHex: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Page',
  });
  return User_page;
};