import { Blog, BLOGS } from '@jikaheimo/shared/types';
import { api } from './setup';

export const fetchBlogs = async () => {
  const { data: blogs } = await api.get(BLOGS);
  return blogs as Blog[];
};

export const fetchBlog = async (id: string) => {
  const { data: blog } = await api.get(`${BLOGS}/${id}`);
  return blog as Blog;
};

export const createBlog = async (blogData: Blog) => {
  const { data: blog } = await api.post(BLOGS, blogData);
  return blog as Blog;
};

export default {
  fetchBlogs,
  fetchBlog,
  createBlog,
};
