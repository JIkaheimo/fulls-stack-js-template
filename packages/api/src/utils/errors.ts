import {
  unauthorized, forbidden, notFound, ErrorType,
} from '@/constants';

type ErrorCreator = (message?: string) => Error;

const errorCreator = (errorType: ErrorType): ErrorCreator => (message = errorType.message) => {
  const { strCode } = errorType;
  const error = new Error(message);
  error.name = strCode;
  return error;
};

// export const badRequestError = errorCreator(badRequest);

export const unauthorizedError = errorCreator(unauthorized);

export const forbiddenError = errorCreator(forbidden);

export const notFoundError = errorCreator(notFound);
