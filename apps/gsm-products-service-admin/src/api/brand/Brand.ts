import { Product } from "../product/Product";

export type Brand = {
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
