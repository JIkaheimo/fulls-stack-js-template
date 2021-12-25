import * as Yup from 'yup';

import { blogSchema } from '@jikaheimo/shared/schemas';

export const blogCreateSchema = Yup.object().shape({
  body: blogSchema,
});
