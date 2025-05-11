import { BaseEntityModel } from '../entity.base';

export interface UserModel extends BaseEntityModel {
  name: string;
  avatar?: string;
  email?: string;
  phone?: string;
}
