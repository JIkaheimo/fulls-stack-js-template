import { Base } from './base'

export interface User extends Base {
  displayName: string
  googleId: string
  picture: string
  name: string
}
