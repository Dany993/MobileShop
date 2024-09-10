import { Product } from "../product/Product";

export type Specification = {
  createdAt: Date;
  details: string | null;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
};
