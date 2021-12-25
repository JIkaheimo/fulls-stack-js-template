import { Router } from 'express';
import { Blog } from '@jikaheimo/shared';
import { authenticate, authorize, validate } from '@mw/index';
import { BlogModel } from '@db/index';
import { blogCreateSchema } from '@/schemas/blog';

const router = Router();

router.use(authenticate);

router.get('/', async (req, res) => {
  const blogs = await req.user;
  return res.json(blogs);
});

router.get('/:id', authorize(BlogModel, '_user'), async (req, res) => {
  const blog = await BlogModel.findByPk(req.params.id);
  res.json(blog);
});

router.delete('/:id', authorize(BlogModel, '_user'), async (req, res) => {
  await req.resource?.destroy();
  res.status(204).json();
});

router.post('/', validate(blogCreateSchema), async (req, res) => {
  const { title, content } = req.body as Blog;

  try {
    const blog = await BlogModel.create({
      title,
      content,
    });
    res.json(blog);
  } catch (err) {
    res.status(400).send(err);
  }
});

export { router };
