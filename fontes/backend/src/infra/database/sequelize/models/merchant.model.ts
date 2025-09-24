import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './index';

interface MerchantAttributes {
  id: string;
  name: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MerchantCreationAttributes extends Optional<MerchantAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Merchant extends Model<MerchantAttributes, MerchantCreationAttributes> implements MerchantAttributes {
  public id!: string;
  public name!: string;
  public address?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Merchant.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'merchants',
    timestamps: true,
  }
);

export default Merchant;
