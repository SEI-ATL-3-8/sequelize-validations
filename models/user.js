'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    firstName: {
      type: DataTypes.STRING, 
      allowNull:false,
      validate: {
        notNull: true
      }
    },
    lastName: {
      type: DataTypes.STRING, 
      allowNull:false,
      validate: {
        notNull: true
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        unique: true,
        len: [4,10]
      }
    },
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    age: DataTypes.INTEGER,
    shirtSize: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['S', 'M', 'L']]
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};