import { Model } from 'sequelize';
import { User as CustomUser } from '@jikaheimo/shared';

export {};

declare global {
  namespace Express {
    interface Request {
      hostPath: string;
      fullPath: string;
      resource?: Model;
      user?: CustomUser;
    }
  }
}
