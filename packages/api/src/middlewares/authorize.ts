import { RequestHandler } from 'express';
import { ModelCtor } from 'sequelize';
import { forbiddenError, notFoundError } from '@/utils/errors';

export const authorize = (model: ModelCtor<any>, field: string): RequestHandler => async (req, _, next) => {
  // Get the resource.
  const resource = await model.findByPk(req.params.id);

  if (resource == null) {
    return next(notFoundError());
  }

  // Check if user is allowed to access it.
  if (resource[field] !== req?.user?.id) next(forbiddenError());

  req.resource = resource;

  return next();
};

export default authorize;
