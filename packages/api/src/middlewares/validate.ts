import { RequestHandler } from 'express';
import { BaseSchema, validateRequest } from '@jikaheimo/shared/utils';

export const validate = (schema: BaseSchema): RequestHandler => async (req, _, next) => {
  await validateRequest(schema, {
    body: req.body,
    query: req.query,
    params: req.params,
  });
  return next();
};
