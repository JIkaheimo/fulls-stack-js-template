import { Sequelize } from 'sequelize';

import { define as userDefine } from './models/user';
import { define as blogDefine } from './models/blog';

export const db = new Sequelize('mysql://root:@localhost:3306/blogs');

const UserModel = userDefine(db);
const BlogModel = blogDefine(db);

export { UserModel, BlogModel };

BlogModel.belongsTo(UserModel);
BlogModel.sync({ alter: true });

UserModel.hasMany(BlogModel);
UserModel.sync({ alter: true });
