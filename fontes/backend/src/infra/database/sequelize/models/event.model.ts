import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './index'; // Importa a instância do Sequelize

interface EventAttributes {
  id: string;
  type: string;
  payload: object;
  createdAt?: Date;
  updatedAt?: Date;
}

interface EventCreationAttributes extends Optional<EventAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Event extends Model<EventAttributes, EventCreationAttributes> implements EventAttributes {
  public id!: string;
  public type!: string;
  public payload!: object;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Event.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payload: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'events',
    timestamps: true,
  }
);

export default Event;
