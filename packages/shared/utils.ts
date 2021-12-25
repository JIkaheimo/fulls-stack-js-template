import { SchemaOf } from 'yup';

export interface BaseSchema extends SchemaOf<unknown> {}

export const validateRequest = async (schema: BaseSchema, req: Record<string, unknown>) =>
  await schema.validate({
    body: req.body,
    query: req.query,
    params: req.params,
  });
