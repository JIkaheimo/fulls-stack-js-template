import { User } from '@jikaheimo/shared';
import {
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  Optional,
  Sequelize,
} from 'sequelize';
import { BaseBlogModel } from './blog';

import { BaseModel } from './base';

type UserCreationAttributes = Optional<User, 'id'>

class BaseUserModel extends BaseModel<User, UserCreationAttributes> implements User {
  public displayName!: string;

  public googleId!: string;

  public picture!: string;

  public name!: string;

  public getBlogs!: HasManyGetAssociationsMixin<BaseBlogModel>;

  public addProject!: HasManyAddAssociationMixin<BaseBlogModel, number>;

  public hasProject!: HasManyHasAssociationMixin<BaseBlogModel, number>;

  public countProjects!: HasManyCountAssociationsMixin;

  public createProject!: HasManyCreateAssociationMixin<BaseBlogModel>;
}

export const define = (db: Sequelize) => db.define<BaseUserModel>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  },
);

export default define;
