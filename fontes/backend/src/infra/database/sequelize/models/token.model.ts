import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './index';

interface TokenAttributes {
  id?: number;
  accessToken: string;
  expiresAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TokenCreationAttributes extends Optional<TokenAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Token extends Model<TokenAttributes, TokenCreationAttributes> implements TokenAttributes {
  public id?: number;
  public accessToken!: string;
  public expiresAt!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Token.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    accessToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'tokens',
    timestamps: true,
  }
);

export default Token;
