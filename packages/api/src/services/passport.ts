import { User } from '@jikaheimo/shared';
import passport from 'passport';
import { Strategy, VerifyFunction } from 'passport-google-oauth2';
import { UserModel } from '@/db';

passport.serializeUser((user, done) => {
  done(null, (user as User).id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findByPk(id as number);
    done(null, user as unknown as Express.User);
  } catch (err) {
    done(err, null);
  }
});

const verify: VerifyFunction = async (_accessToken, _refreshToken, profile, done) => {
  try {
    const existingUser = await UserModel.findOne({
      where: { googleId: profile.id },
    });

    if (existingUser) {
      return done(null, existingUser);
    }

    const user = UserModel.create({
      googleId: profile.id,
      displayName: profile.displayName,
      name: profile.name,
      picture: profile.picture,
    });

    return done(null, user);
  } catch (err) {
    return done(err as Error, undefined);
  }
};

passport.use(
  new Strategy(
    {
      callbackURL: '/auth/google/callback',
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    verify,
  ),
);
