"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event }) {
      // band
      Meet_Greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      });

      // event
      Meet_Greet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event",
      });
    }
  }
  Meet_Greet.init(
    {
      meet_greet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      theme: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      available_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      band_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Meet_Greet",
      tableName: "meet_greets",
      timestamps: false,
    }
  );
  return Meet_Greet;
};
