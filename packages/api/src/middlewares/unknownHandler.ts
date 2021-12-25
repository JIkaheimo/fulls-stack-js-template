import { RequestHandler } from 'express';
import { notFound } from '@/constants';

export const unknownHandler: RequestHandler = (_, res) => {
  res.status(notFound.code).send({ message: notFound.message });
};

export default unknownHandler;
