'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Inquiry.init({
    inquiryType: DataTypes.INTEGER,
    title: DataTypes.STRING,
    contents: DataTypes.TEXT,
    inquiries: DataTypes.JSON,
    answers: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Inquiry',
  });
  return Inquiry;
};