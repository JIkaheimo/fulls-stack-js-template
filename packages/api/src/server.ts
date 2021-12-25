import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import passport from 'passport';
import { BLOGS, AUTH } from '@jikaheimo/shared';
import { client } from '@/redis';
import '@/services/passport';
import '@/services/cache';
import { blog, auth } from '@/routes';
import { errorHandler, unknownHandler, pathProvider } from '@/middlewares';

const app = express();

Promise.all([client()]).then(() => app.emit('ready'));

// Add cross-origin support.
app.use(cors());

// Serve static assets.
app.use(express.static(process.env.CLIENT_PATH as string));

// Add JSON body-parsing.
app.use(express.json());

// Attach pre-route middlewares.
app.use(pathProvider);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY as string],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(AUTH, auth);
app.use(BLOGS, blog);

app.get('*', (_req, res) => {
  res.sendFile('index.html', { root: process.env.CLIENT_PATH });
});

app.use(unknownHandler);
app.use(errorHandler);

export { app };
