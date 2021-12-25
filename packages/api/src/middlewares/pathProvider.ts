import { RequestHandler } from 'express';

export const pathProvider: RequestHandler = (req, _, next) => {
  req.hostPath = `${req.protocol}://${req.get('host')}`;
  req.fullPath = `${req.hostPath}${req.originalUrl}`;
  next();
};

export default pathProvider;
