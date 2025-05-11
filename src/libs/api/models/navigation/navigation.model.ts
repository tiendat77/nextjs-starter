export interface NavigationModel {
  name: string;
  slug: string;
  id?: string;
  children?: NavigationModel[];
}
