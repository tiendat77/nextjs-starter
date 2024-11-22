import { BaseEntityModel } from '../entity.base';

/**
 * API entity
 * @extends BaseEntityModel
 */
export interface BlogEntityModel extends BaseEntityModel {
  title: string;
  slug: string;
  content: string;

  description?: string;
  thumbnail?: string;
  tags?: string;
}

/**
 * Extends entity with additional properties
 * @extends BlogEntityModel
 */
export interface BlogModel extends BlogEntityModel {
  [key: string]: any;
}
