export interface ErrorType {
  strCode: string;
  code: number;
  message?: string;
}

export const badRequest: ErrorType = {
  message: 'Invalid request body',
  code: 400,
  strCode: '400',
};

export const unauthorized: ErrorType = {
  message: 'Unauthorized',
  code: 401,
  strCode: '401',
};

export const forbidden: ErrorType = {
  message: 'Access Forbidden',
  code: 403,
  strCode: '403',
};

export const notFound: ErrorType = {
  message: 'Not Found',
  code: 404,
  strCode: '404',
};

export const conflict: ErrorType = {
  code: 409,
  strCode: '409',
};

export const server: ErrorType = {
  message: 'Something went wrong :(',
  code: 500,
  strCode: '500',
};

export const errors = {
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  conflict,
  server,
};

export default errors;
