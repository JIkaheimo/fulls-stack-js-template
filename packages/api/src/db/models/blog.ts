import { Blog } from '@jikaheimo/shared';
import { DataTypes, Optional, Sequelize } from 'sequelize';
import { BaseModel } from './base';

type BlogCreationAttributes = Optional<Blog, 'id'>;

export class BaseBlogModel extends BaseModel<Blog, BlogCreationAttributes> implements Blog {
  public title!: string;

  public content!: string;
}

export const define = (db: Sequelize) => db.define<BaseBlogModel>(
  'Blog',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  },
);

export default define;
