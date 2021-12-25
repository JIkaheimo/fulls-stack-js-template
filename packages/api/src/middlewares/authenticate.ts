import { RequestHandler } from 'express';
import { unauthorizedError } from '@/utils/errors';

export const authenticate: RequestHandler = (req, _res, next) => {
  if (!req.user) {
    return next(unauthorizedError());
  }

  return next();
};
