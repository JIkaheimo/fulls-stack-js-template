import * as Yup from 'yup'

export interface BlogSchema {
  content: string
  title: string
}

export const blogSchema: Yup.SchemaOf<BlogSchema> = Yup.object().shape({
  title: Yup.string().required(),
  content: Yup.string().required(),
})
