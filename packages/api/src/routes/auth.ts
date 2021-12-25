import { RequestHandler, Router } from 'express';
import passport from 'passport';

const router = Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }) as RequestHandler,
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/blogs',
    failureRedirect: '/',
  }),
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/current_user', (req, res) => {
  res.json(req.user);
});

export { router };
