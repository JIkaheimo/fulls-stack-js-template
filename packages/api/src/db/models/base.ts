import { Model } from 'sequelize';

export abstract class BaseModel<Attributes, CreationAttributes> extends Model<Attributes, CreationAttributes> {
  public readonly id!: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public readonly deletedAt!: Date;
}

export default BaseModel;
